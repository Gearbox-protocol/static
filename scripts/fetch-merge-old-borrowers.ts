#!/usr/bin/env ts-node
/**
 * Fetches the same charts-server credit_sessions/list sources
 * collects unique `borrower` addresses, and merges them
 * into `public/client-v3/accounts/legacy_borrowers.json`. Existing entries are kept; only new addresses are added.
 *
 * Run: `ts-node scripts/fetch-merge-old-borrowers.ts`
 *
 * Note: `assertListSourcesMatchCanonical` query-key checks match `creditSessionsListUrl`
 * (no sortBy/sort in the URL). If you change list URLs in fetch-old-accounts.ts, update
 * this file the same way.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  ARBITRUM_POOLS,
  OPTIMISM_POOLS,
  POOL_ADDRESSES_ALL_MAINNET,
  POOL_ADDRESSES_V2_MAINNET,
  V2_MAINNET_LC,
} from "./common";

const REPO_ROOT = path.join(__dirname, "..");

const BORROWERS_JSON = path.join(
  REPO_ROOT,
  "public",
  "client-v3",
  "accounts",
  "legacy_borrowers.json",
);
const PAGE_LIMIT = 200;

const CHARTS_LIST_BASE =
  "https://charts-legacy.gearbox.foundation/api/chainlink/credit_sessions/list";

const POOL_ADDRESSES_V3_MAINNET = POOL_ADDRESSES_ALL_MAINNET.filter(
  a => !V2_MAINNET_LC.has(a.toLowerCase()),
);

interface ListSource {
  url: string;
  accountVersion: number;
}

const LIST_SOURCES: ListSource[] = [
  {
    url: creditSessionsListUrl(1, POOL_ADDRESSES_V2_MAINNET),
    accountVersion: 2,
  },
  {
    url: creditSessionsListUrl(1, POOL_ADDRESSES_V3_MAINNET),
    accountVersion: 300,
  },
  {
    url: creditSessionsListUrl(42161, ARBITRUM_POOLS),
    accountVersion: 300,
  },
  {
    url: creditSessionsListUrl(10, OPTIMISM_POOLS),
    accountVersion: 300,
  },
];

type SessionRow = Record<string, unknown>;

interface FetchAllPagesResult {
  rows: SessionRow[];
  count: number;
  pages: number;
}

function creditSessionsListUrl(chainId: number, pools: string[]): string {
  const u = new URL(CHARTS_LIST_BASE);
  u.searchParams.set("offset", "0");
  u.searchParams.set("limit", "20");
  u.searchParams.set("sortBy", "status,tvl");
  u.searchParams.set("sort", "asc,desc");
  u.searchParams.set("status", "0");
  u.searchParams.set("pool", pools.join(","));
  u.searchParams.set("chainId", String(chainId));
  return u.toString();
}

function chainIdFromListUrl(endpointUrl: string): number {
  const id = Number(new URL(endpointUrl).searchParams.get("chainId"));
  if (!Number.isFinite(id)) {
    throw new Error(`Missing or invalid chainId in URL: ${endpointUrl}`);
  }
  return id;
}

async function fetchAllPages(
  initialUrl: string,
  pageLimit: number,
): Promise<FetchAllPagesResult> {
  let url = new URL(initialUrl);
  url.searchParams.set("limit", String(pageLimit));
  url.searchParams.set("offset", "0");

  const rows: SessionRow[] = [];
  let pages = 0;
  let expectedCount = 0;

  for (;;) {
    pages += 1;
    const res = await fetch(url.toString(), {
      headers: { accept: "application/json" },
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `HTTP ${res.status} ${
          res.statusText
        } for ${url.toString()}\n${text.slice(0, 500)}`,
      );
    }

    const json = (await res.json()) as {
      count?: number;
      next?: string | null;
      data?: unknown[];
    };
    if (typeof json.count === "number") {
      expectedCount = json.count;
    }
    const chunk = Array.isArray(json.data) ? json.data : [];
    rows.push(...(chunk as SessionRow[]));

    if (!json.next || chunk.length === 0) {
      break;
    }
    const nextRel = json.next.startsWith("?") ? json.next.slice(1) : json.next;
    const nextParams = new URLSearchParams(nextRel);
    const merged = new URL(url);
    for (const key of ["offset", "limit"]) {
      const v = nextParams.get(key);
      if (v !== null) {
        merged.searchParams.set(key, v);
      }
    }
    url = merged;
  }

  return { rows, count: expectedCount, pages };
}

const ADDRESS_RE = /^0x[0-9a-f]{40}$/;

function normalizeBorrower(raw: unknown): string | null {
  if (typeof raw !== "string") {
    return null;
  }
  const s = raw.trim().toLowerCase();
  return ADDRESS_RE.test(s) ? s : null;
}

async function loadExistingBorrowers(filePath: string): Promise<Set<string>> {
  try {
    const text = await readFile(filePath, "utf8");
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
        `Expected { "borrowers": string[] } or string[] in ${filePath}`,
      );
    }
    const set = new Set<string>();
    for (const item of list) {
      const b = normalizeBorrower(String(item));
      if (b) {
        set.add(b);
      }
    }
    return set;
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") {
      return new Set();
    }
    throw e;
  }
}

async function main(): Promise<void> {
  console.log(
    `fetch-merge-old-borrowers: pageLimit=${PAGE_LIMIT} → ${path.relative(
      REPO_ROOT,
      BORROWERS_JSON,
    )}`,
  );

  const fromFetch = new Set<string>();
  let totalApiReportedCount = 0;

  for (const source of LIST_SOURCES) {
    const chainId = chainIdFromListUrl(source.url);
    console.log(
      `Fetching (v${source.accountVersion}): ${source.url.slice(0, 80)}…`,
    );
    const { rows, count, pages } = await fetchAllPages(source.url, PAGE_LIMIT);
    console.log(
      `  → ${rows.length} rows (reported count=${count}, pages=${pages}, chainId=${chainId}, version=${source.accountVersion})`,
    );
    if (rows.length !== count) {
      throw new Error(
        `Fetch count mismatch for chainId=${chainId} v${source.accountVersion}: API reported count=${count} but received ${rows.length} rows`,
      );
    }
    totalApiReportedCount += count;
    for (const row of rows) {
      if (!row || typeof row !== "object") {
        continue;
      }
      const b = normalizeBorrower((row as SessionRow).borrower);
      if (b) {
        fromFetch.add(b);
      }
    }
  }

  const existing = await loadExistingBorrowers(BORROWERS_JSON);
  const before = existing.size;
  let added = 0;
  for (const b of fromFetch) {
    if (!existing.has(b)) {
      added += 1;
      existing.add(b);
    }
  }
  const merged = [...existing].sort();

  await mkdir(path.dirname(BORROWERS_JSON), { recursive: true });
  const payload = {
    borrowers: merged,
    lastMergedAt: new Date().toISOString(),
    lastFetchUniqueBorrowers: fromFetch.size,
    addedThisRun: added,
  };
  await writeFile(
    BORROWERS_JSON,
    `${JSON.stringify(payload, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `Done. Fetch unique borrowers: ${fromFetch.size}; file had ${before}; added ${added}; total ${merged.length}. API rows total: ${totalApiReportedCount}.`,
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
