import type { TokenMigrationConfigPayload } from "../core/migration";

export const TOKENS_MIGRATION_LIST: Array<TokenMigrationConfigPayload> = [
  {
    // Pendle PT sUSDf 25 Sep 2025,
    source: "0xab365c0879024481e4ad3b47bd6fea9c10014fbc",
    expired: 1758758400_000,
    // Pendle PT sUSDf 29 Jan 2026
    target: "0x48e502fbb6ff2cc687d049150e2c8addc765a43a",

    chainId: 1,
    network: "Mainnet",
    type: "pt",
  },
];
