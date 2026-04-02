#!/usr/bin/env ts-node
/**
 * Reads `public/client-v3/accounts/legacy_borrowers.json`, fetches credit sessions per borrower from
 * charts-server `credit_sessions/borrower/:address?chainId=` for chains 1, 42161, 10.
 * Keeps sessions where `status === 0` and `pool` is in the same allowlists as
 * `scripts/fetch-old-accounts.ts`. Trims to { borrower, account, underlyingToken, version, chainId }
 * (version from pool on mainnet V2 vs V3 split; chain 42161/10 → 3).
 *
 * Writes `public/client-v3/accounts/legacy_accounts/<prefix>.json` like fetch-old-accounts (full directory replace each run).
 * Duplicate keys (chainId + account + borrower) are reported but not removed from output.
 *
 * Run: `ts-node scripts/fetch-old-accounts-from-borrowers.ts`
 */

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  ARBITRUM_POOLS,
  OPTIMISM_POOLS,
  POOL_ADDRESSES_ALL_MAINNET,
  V2_MAINNET_LC,
} from "./common";

const REPO_ROOT = path.join(__dirname, "..");

const CHARTS_API = "https://charts-server.fly.dev/api/chainlink";
const BORROWERS_JSON = path.join(
  REPO_ROOT,
  "public",
  "client-v3",
  "accounts",
  "legacy_borrowers.json",
);
const OUT_DIR = path.join(
  REPO_ROOT,
  "public",
  "client-v3",
  "accounts",
  "legacy_accounts",
);
const BROKEN_BORROWERS_JSON = path.join(OUT_DIR, "broken_borrowers.json");
const BORROWER_BATCH_SIZE = 30;

const CHAIN_IDS = [1, 42161, 10] as const;
type ChainId = (typeof CHAIN_IDS)[number];

const POOLS_ALLOWED_LC: Record<ChainId, Set<string>> = {
  1: new Set(POOL_ADDRESSES_ALL_MAINNET.map(p => p.toLowerCase())),
  42161: new Set(ARBITRUM_POOLS.map(p => p.toLowerCase())),
  10: new Set(OPTIMISM_POOLS.map(p => p.toLowerCase())),
};

const ADDRESS_RE = /^0x[0-9a-f]{40}$/;

type SessionRow = Record<string, unknown>;

interface TrimmedSession {
  borrower: string;
  account: string;
  underlyingToken: string;
  version: number;
  chainId: ChainId;
}

interface FetchStats {
  borrower: string;
  chainId: ChainId;
  rawTotal: number;
  skippedStatus: number;
  skippedPool: number;
  skippedNoAccount: number;
  skippedTrim: number;
}

interface BorrowerResult {
  borrower: string;
  accepted: TrimmedSession[];
  stats: FetchStats[];
}

interface BrokenBorrowerEntry {
  borrower: string;
  error: string;
}

function borrowerPrefix(borrower: string): string {
  const s = borrower.trim().toLowerCase();
  if (!/^0x[0-9a-f]{2}/i.test(s)) {
    throw new Error(`Invalid borrower address: ${borrower}`);
  }
  return s.slice(2, 4);
}

function trimSession(
  row: SessionRow,
  chainId: ChainId,
  accountVersion: number,
): TrimmedSession {
  return {
    borrower: String(row.borrower),
    account: String(row.account),
    underlyingToken: String(row.underlyingToken),
    version:
      typeof row.version === "number" && Number.isFinite(row.version)
        ? (row.version as number)
        : accountVersion,
    chainId,
  };
}

function accountVersionForPool(chainId: ChainId, poolLc: string): number {
  if (chainId === 1) {
    return V2_MAINNET_LC.has(poolLc) ? 2 : 3;
  }
  return 3;
}

async function fetchBorrowerSessions(
  borrowerLc: string,
  chainId: ChainId,
): Promise<SessionRow[]> {
  const url = new URL(`${CHARTS_API}/credit_sessions/borrower/${borrowerLc}`);
  url.searchParams.set("chainId", String(chainId));
  const res = await fetch(url.toString(), {
    headers: { accept: "application/json" },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `HTTP ${
        res.status
      } borrower=${borrowerLc} chainId=${chainId}\n${text.slice(0, 400)}`,
    );
  }
  const json = (await res.json()) as { data?: { accounts?: unknown } };
  const accounts = json?.data?.accounts;
  return Array.isArray(accounts) ? (accounts as SessionRow[]) : [];
}

async function loadBorrowers(): Promise<string[]> {
  const text = await readFile(BORROWERS_JSON, "utf8");
  const parsed: unknown = JSON.parse(text);
  const list = Array.isArray(parsed)
    ? parsed
    : parsed &&
      typeof parsed === "object" &&
      "borrowers" in parsed &&
      Array.isArray((parsed as Record<string, unknown>).borrowers)
    ? ((parsed as Record<string, unknown[]>).borrowers as unknown[])
    : null;
  if (list === null) {
    throw new Error(
      `Expected { "borrowers": string[] } or string[] in ${BORROWERS_JSON}`,
    );
  }
  const out: string[] = [];
  for (const item of list) {
    const s = String(item).trim().toLowerCase();
    if (ADDRESS_RE.test(s)) {
      out.push(s);
    }
  }
  return out;
}

async function processBorrowerChain(
  borrowerLc: string,
  chainId: ChainId,
  into: TrimmedSession[],
): Promise<FetchStats> {
  const sessions = await fetchBorrowerSessions(borrowerLc, chainId);
  const allowed = POOLS_ALLOWED_LC[chainId];
  let skippedStatus = 0;
  let skippedPool = 0;
  let skippedNoAccount = 0;
  let skippedTrim = 0;

  for (const row of sessions) {
    if (!row || typeof row !== "object") {
      skippedTrim += 1;
      continue;
    }
    const status = (row as SessionRow).status;
    if (status !== 0) {
      skippedStatus += 1;
      continue;
    }
    const poolRaw = (row as SessionRow).pool;
    if (typeof poolRaw !== "string") {
      skippedTrim += 1;
      continue;
    }
    const poolLc = poolRaw.toLowerCase();
    if (!allowed.has(poolLc)) {
      skippedPool += 1;
      continue;
    }
    if (typeof row.account !== "string" || !row.account.trim()) {
      skippedNoAccount += 1;
      continue;
    }
    if (
      typeof row.borrower !== "string" ||
      typeof row.underlyingToken !== "string"
    ) {
      skippedTrim += 1;
      continue;
    }
    const version = accountVersionForPool(chainId, poolLc);
    into.push(trimSession(row, chainId, version));
  }

  return {
    borrower: borrowerLc,
    chainId,
    rawTotal: sessions.length,
    skippedStatus,
    skippedPool,
    skippedNoAccount,
    skippedTrim,
  };
}

async function processBorrowerAcrossChains(
  borrowerLc: string,
  onRequestComplete: () => void,
): Promise<BorrowerResult> {
  const borrowerAccepted: TrimmedSession[] = [];
  const stats: FetchStats[] = [];
  for (const chainId of CHAIN_IDS) {
    try {
      const st = await processBorrowerChain(
        borrowerLc,
        chainId,
        borrowerAccepted,
      );
      stats.push(st);
    } finally {
      onRequestComplete();
    }
  }
  return { borrower: borrowerLc, accepted: borrowerAccepted, stats };
}

function dedupeKey(t: TrimmedSession): string {
  const acc = String(t.account).toLowerCase();
  const bor = String(t.borrower).toLowerCase();
  return `${t.chainId}:${acc}:${bor}`;
}

async function main(): Promise<void> {
  console.log(
    `fetch-old-accounts-from-borrowers: borrowers=${path.relative(
      REPO_ROOT,
      BORROWERS_JSON,
    )} → out=${path.relative(REPO_ROOT, OUT_DIR)}`,
  );

  const borrowers = await loadBorrowers();
  if (borrowers.length === 0) {
    throw new Error(`No valid borrower addresses in ${BORROWERS_JSON}`);
  }
  console.log(`Loaded ${borrowers.length} borrower address(es).`);

  const accepted: TrimmedSession[] = [];
  let totalRawSessions = 0;
  let sumSkippedStatus = 0;
  let sumSkippedPool = 0;
  let sumSkippedNoAccount = 0;
  let sumSkippedTrim = 0;
  const brokenBorrowers: BrokenBorrowerEntry[] = [];

  const totalRequests = borrowers.length * CHAIN_IDS.length;
  let requestsCompleted = 0;
  const reportProgress = (): void => {
    requestsCompleted += 1;
    if (requestsCompleted % 50 === 0 || requestsCompleted === totalRequests) {
      console.log(`  … requests ${requestsCompleted}/${totalRequests}`);
    }
  };

  for (let i = 0; i < borrowers.length; i += BORROWER_BATCH_SIZE) {
    const batch = borrowers.slice(i, i + BORROWER_BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(async borrowerLc => {
        try {
          const result = await processBorrowerAcrossChains(
            borrowerLc,
            reportProgress,
          );
          return { ok: true as const, result };
        } catch (error) {
          const message =
            error instanceof Error ? error.message : String(error);
          console.error(
            `[fetch-old-accounts-from-borrowers] Failed borrower ${borrowerLc}: ${message}`,
          );
          brokenBorrowers.push({ borrower: borrowerLc, error: message });
          return { ok: false as const, borrower: borrowerLc };
        }
      }),
    );
    for (const entry of batchResults) {
      if (!entry.ok) {
        continue;
      }
      const { borrower, accepted: borrowerAccepted, stats } = entry.result;
      const acceptedBeforeBorrower = accepted.length;
      accepted.push(...borrowerAccepted);
      for (const st of stats) {
        totalRawSessions += st.rawTotal;
        sumSkippedStatus += st.skippedStatus;
        sumSkippedPool += st.skippedPool;
        sumSkippedNoAccount += st.skippedNoAccount;
        sumSkippedTrim += st.skippedTrim;
      }
      if (accepted.length === acceptedBeforeBorrower) {
        console.warn(
          `[fetch-old-accounts-from-borrowers] No valid credit account for borrower ${borrower} on any chain (chainIds: ${CHAIN_IDS.join(
            ", ",
          )})`,
        );
      }
    }
  }

  const acceptedCount = accepted.length;
  const skippedTotal =
    sumSkippedStatus + sumSkippedPool + sumSkippedNoAccount + sumSkippedTrim;

  const keyCounts = new Map<string, number>();
  for (const t of accepted) {
    const k = dedupeKey(t);
    keyCounts.set(k, (keyCounts.get(k) ?? 0) + 1);
  }
  const uniqueKeys = keyCounts.size;
  let keysWithDuplicates = 0;
  let duplicateExtraRows = 0;
  for (const c of keyCounts.values()) {
    if (c > 1) {
      keysWithDuplicates += 1;
      duplicateExtraRows += c - 1;
    }
  }

  console.log("");
  console.log("— Summary (filters) —");
  console.log(
    `  Raw session rows from API (all borrowers × chains): ${totalRawSessions}`,
  );
  console.log(`  Skipped (status !== 0):     ${sumSkippedStatus}`);
  console.log(`  Skipped (pool not allowed): ${sumSkippedPool}`);
  console.log(`  Skipped (no account):       ${sumSkippedNoAccount}`);
  console.log(`  Skipped (trim / bad row):   ${sumSkippedTrim}`);
  console.log(`  Skipped total:              ${skippedTotal}`);
  console.log(`  Accepted (trimmed):         ${acceptedCount}`);
  console.log("");
  console.log(
    "— Dedupe key chainId+account+borrower (report only, rows kept) —",
  );
  console.log(`  Unique keys:                ${uniqueKeys}`);
  console.log(`  Keys with duplicates:       ${keysWithDuplicates}`);
  console.log(`  Extra duplicate rows:       ${duplicateExtraRows}`);

  try {
    await rm(OUT_DIR, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
  await mkdir(OUT_DIR, { recursive: true });

  const byPrefix = new Map<string, TrimmedSession[]>();
  for (const t of accepted) {
    const prefix = borrowerPrefix(String(t.borrower));
    if (!byPrefix.has(prefix)) {
      byPrefix.set(prefix, []);
    }
    byPrefix.get(prefix)!.push(t);
  }

  const prefixes = [...byPrefix.keys()].sort();
  let totalWritten = 0;
  for (const prefix of prefixes) {
    const records = byPrefix.get(prefix);
    if (!records) {
      continue;
    }
    records.sort((a, b) => {
      if (a.chainId !== b.chainId) {
        return a.chainId - b.chainId;
      }
      return String(a.account)
        .toLowerCase()
        .localeCompare(String(b.account).toLowerCase());
    });
    const filePath = path.join(OUT_DIR, `${prefix}.json`);
    await writeFile(filePath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
    totalWritten += records.length;
    console.log(
      `Wrote ${records.length} records → ${path.relative(REPO_ROOT, filePath)}`,
    );
  }

  if (totalWritten !== acceptedCount) {
    throw new Error(
      `Write mismatch: accepted=${acceptedCount}, written=${totalWritten}`,
    );
  }

  const brokenPayload = {
    generatedAt: new Date().toISOString(),
    brokenBorrowers,
  };
  await writeFile(
    BROKEN_BORROWERS_JSON,
    `${JSON.stringify(brokenPayload, null, 2)}\n`,
    "utf8",
  );
  if (brokenBorrowers.length > 0) {
    console.warn(
      `[fetch-old-accounts-from-borrowers] ${
        brokenBorrowers.length
      } borrower(s) failed. Details → ${path.relative(
        REPO_ROOT,
        BROKEN_BORROWERS_JSON,
      )}`,
    );
  }

  console.log("");
  console.log(
    `Done. ${prefixes.length} prefix file(s), ${totalWritten} records written (directory replaced).`,
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
