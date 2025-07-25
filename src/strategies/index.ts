import { StrategyPayload } from "../core/strategy";

export const STRATEGIES_LIST: Array<StrategyPayload> = [
  {
    name: "Lido stETH",
    id: "STETH",
    tokenOut: "STETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xa30099925b14b00b76ae2efe2639cd01598fe68a",
        "0x6dc0eb1980fa6b3fa89f5b29937b9baab5865b3e",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Maker sDAI",
    id: "sDAI",
    tokenOut: "sDAI",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x1d489ccd2b96908c0a80acbbdb2f1963ffed3384",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0x629f097996a5fb606470974bda1c3b6abc4d6857",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
        "0x767cdccccf758dc2d74b917592223887b68d6757",
        "0xbbed4cbab27e51c0d0d2b12cddcbd1e87113d939",
      ],
    },
  },
  {
    name: "Rocketpool ETH",
    id: "rETH",
    tokenOut: "rETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
      {
        chainId: 42161,
        network: "Arbitrum",
      },
      {
        chainId: 10,
        network: "Optimism",
      },
    ],
    creditManagers: {
      [1]: ["0x6dc0eb1980fa6b3fa89f5b29937b9baab5865b3e"],
      [10]: [
        "0x1c1261bbccd09cb618d3fd8cd74bf7562c022ac4",
        "0x6ed2150a2d4136b42adf2043d25f5834baa0f1a9",
      ],
      [42161]: [
        "0xcedaa4b4a42c0a771f6c24a3745c3ca3ed73f17a",
        "0x3ab1d35500d2da4216f5863229a7b81e2f6ff976",
      ],
    },
  },
  {
    name: "Lido wstETH",
    id: "wstETH",
    tokenOut: "wstETH",
    chains: [
      {
        chainId: 42161,
        network: "Arbitrum",
      },
      {
        chainId: 10,
        network: "Optimism",
      },
      {
        chainId: 1135,
        network: "Lisk",
      },
    ],
    creditManagers: {
      [10]: [
        "0x1c1261bbccd09cb618d3fd8cd74bf7562c022ac4",
        "0x6ed2150a2d4136b42adf2043d25f5834baa0f1a9",
      ],
      [1135]: [
        "0xfd69c9ef4d88e568d3514861f15770cc77f81526",
        "0x57b54c825d918796b1bef8f4c98d632b5e9fa6a3",
      ],
      [42161]: [
        "0xcedaa4b4a42c0a771f6c24a3745c3ca3ed73f17a",
        "0x3ab1d35500d2da4216f5863229a7b81e2f6ff976",
      ],
    },
  },
  {
    name: "Coinbase cbETH",
    id: "cbETH",
    tokenOut: "cbETH",
    chains: [
      {
        chainId: 42161,
        network: "Arbitrum",
      },
    ],
    creditManagers: {
      [42161]: [
        "0xcedaa4b4a42c0a771f6c24a3745c3ca3ed73f17a",
        "0x3ab1d35500d2da4216f5863229a7b81e2f6ff976",
      ],
    },
  },
  {
    name: "Stakewise ETH",
    id: "osETH",
    tokenOut: "osETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x6dc0eb1980fa6b3fa89f5b29937b9baab5865b3e"],
    },
  },
  {
    name: "Ether.fi ETH",
    id: "weETH",
    tokenOut: "weETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x6dc0eb1980fa6b3fa89f5b29937b9baab5865b3e",
        "0x50ba483272484fc5eebe8676dc87d814a11faef6",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Renzo ETH",
    id: "ezETH",
    tokenOut: "ezETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
      {
        chainId: 42161,
        network: "Arbitrum",
      },
      {
        chainId: 10,
        network: "Optimism",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
      [10]: [
        "0x1c1261bbccd09cb618d3fd8cd74bf7562c022ac4",
        "0x6ed2150a2d4136b42adf2043d25f5834baa0f1a9",
      ],
      [42161]: [
        "0xcedaa4b4a42c0a771f6c24a3745c3ca3ed73f17a",
        "0x3ab1d35500d2da4216f5863229a7b81e2f6ff976",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Ethena USDe",
    id: "USDe",
    tokenOut: "USDe",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
      {
        chainId: 42161,
        network: "Arbitrum",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0x629f097996a5fb606470974bda1c3b6abc4d6857",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
        "0x767cdccccf758dc2d74b917592223887b68d6757",
        "0xbbed4cbab27e51c0d0d2b12cddcbd1e87113d939",
      ],
      [42161]: [
        "0xe5e2d4bb15d26a6036805fce666c5488367623e2",
        "0xb780dd9cec259a0bbf7b32587802f33730353e86",
      ],
    },
  },
  {
    name: "Ethena staked USDe",
    id: "sUSDe",
    tokenOut: "sUSDe",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0x629f097996a5fb606470974bda1c3b6abc4d6857",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
        "0x767cdccccf758dc2d74b917592223887b68d6757",
        "0xbbed4cbab27e51c0d0d2b12cddcbd1e87113d939",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Kelp rsETH",
    id: "rsETH",
    tokenOut: "rsETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
      {
        chainId: 42161,
        network: "Arbitrum",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
      [42161]: [
        "0xcedaa4b4a42c0a771f6c24a3745c3ca3ed73f17a",
        "0x3ab1d35500d2da4216f5863229a7b81e2f6ff976",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Swell rswEth",
    id: "rswETH",
    tokenOut: "rswETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    issuesOnClose: true,
  },
  {
    name: "Puffer pufETH",
    id: "pufETH",
    tokenOut: "pufETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    issuesOnClose: true,
  },
  {
    name: "Renzo pzETH",
    id: "pzETH",
    tokenOut: "pzETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    issuesOnClose: true,
  },
  {
    name: "Mellow rstETH",
    id: "rstETH",
    tokenOut: "rstETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x4bf7481fdf7b67a8206254badc15480a55bb25ab",
        "0xd665774088c7936b65be0cbcf83aebe87cb10de7",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Mellow steakLRT",
    id: "steakLRT",
    tokenOut: "steakLRT",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [],
    },
    issuesOnClose: true,
  },
  {
    name: "Mellow amphrETH",
    id: "amphrETH",
    tokenOut: "amphrETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    issuesOnClose: true,
  },
  {
    name: "LBTC",
    id: "LBTC",
    tokenOut: "LBTC",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xefc134755aaf89fe84476946251680bece41246e",
        "0xc6d1c9d0f50e5a056713bc88891e3e1629ebd6bf",
        "0x2dd94ebdbabffed2bebd3ed039dd943334f55666",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "Mellow Re7LRT",
    id: "Re7LRT",
    tokenOut: "Re7LRT",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    issuesOnClose: true,
  },
  {
    name: "cp0xLRT",
    id: "cp0xLRT",
    tokenOut: "cp0xLRT",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x0fafa30cd35bc6a48ff2b40694d4a73d4f4bcc92",
        "0x0af1324369e3fd78325fab0cb62eea19f3e4ebf0",
      ],
    },
    releaseAt: 1750683600,
    issuesOnClose: true,
  },
  {
    name: "Sky Savings Rate",
    id: "sUSDS",
    tokenOut: "sUSDS",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
        "0x767cdccccf758dc2d74b917592223887b68d6757",
        "0xbbed4cbab27e51c0d0d2b12cddcbd1e87113d939",
      ],
    },
    releaseAt: 1731931200000,
  },
  {
    name: "Sky Rewards Rate",
    id: "stkUSDS",
    tokenOut: "stkUSDS",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
      ],
    },
    releaseAt: 1731931200000,
  },
  {
    name: "Ether.fi eBTC",
    id: "eBTC",
    tokenOut: "eBTC",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xefc134755aaf89fe84476946251680bece41246e",
        "0xc6d1c9d0f50e5a056713bc88891e3e1629ebd6bf",
        "0x2dd94ebdbabffed2bebd3ed039dd943334f55666",
      ],
    },
    releaseAt: 1733148000000,
    issuesOnClose: true,
  },
  {
    name: "Pump BTC",
    id: "pumpBTC",
    tokenOut: "pumpBTC",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [],
    },
    releaseAt: 1734350400000,
  },
  {
    name: "Savings crvUSD",
    id: "scrvUSD",
    tokenOut: "scrvUSD",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
      ],
    },
    releaseAt: 1737374400000,
  },
  {
    name: "Convex scrvUSD/sUSDe",
    id: "stkcvxllamathena",
    tokenOut: "stkcvxllamathena",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
      ],
    },
    releaseAt: 1737374400000,
  },
  {
    name: "Mellow DVstETH",
    id: "DVstETH",
    tokenOut: "DVstETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x478ad2ad71139d3f1430ce5b0f03880ac142dc6b",
        "0x63ae843b332de97c55a007e27c5697c2b8b81627",
        "0x6dcdb1b03469e8fc93f99f91c1386ff0da9b1ef4",
        "0x5c2c9b5ee8535954a3517a8083dc9481464a397c",
      ],
    },
    releaseAt: 1740398400000,
    issuesOnClose: [300, 309],
    zeroSlippage: {
      [1]: {
        "0xf00b548f1b69cb5ee559d891e03a196fb5101d4a": true,
      },
    },
    additionalRewardQuotas: {
      [1]: {
        "0xf00b548f1b69cb5ee559d891e03a196fb5101d4a": [
          "0x0b010000b7624eb9b3dfbc279673c76e9d29d5f7",
          "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54",
        ],
      },
    },
  },
  {
    name: "Stakestone Berachain Vault",
    id: "beraSTONE",
    tokenOut: "beraSTONE",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    releaseAt: 1738584000000,
    issuesOnClose: true,
  },
  {
    name: "Treehouse tETH",
    id: "tETH",
    tokenOut: "tETH",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: ["0x50ba483272484fc5eebe8676dc87d814a11faef6"],
    },
    releaseAt: 1739188800000,
    issuesOnClose: true,
  },
  {
    name: "Beets stS",
    id: "stS",
    tokenOut: "stS",
    chains: [
      {
        chainId: 146,
        network: "Sonic",
      },
    ],
    creditManagers: {
      [146]: [
        "0xfd8e94a216c80db2e892b59ccca668df5ee589b2",
        "0x29b9131bd16859ddac4d43167aca40720dd75f7b",
      ],
    },
    releaseAt: 1740398400000,
  },
  {
    name: "Coinshift csUSDL",
    id: "csUSDL",
    tokenOut: "csUSDL",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
      ],
    },
    releaseAt: 1738713600000,
  },
  {
    name: "Rings scUSD",
    id: "scUSD",
    tokenOut: "scUSD",
    chains: [
      {
        chainId: 146,
        network: "Sonic",
      },
    ],
    creditManagers: {
      [146]: [
        "0x160841120eb4885089d8ee7504b4aab5e73ebaf4",
        "0x1719131f99b634879e1094d5d968bdfb6a47144f",
      ],
    },
    releaseAt: 1740398400000,
  },
  {
    name: "Convex stkcvxRLUSD/USDC",
    id: "stkcvxRLUSDUSDC",
    tokenOut: "stkcvxRLUSDUSDC",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0x3eb95430fdb99439a86d3c6d7d01c3c561393556",
        "0x58c8e983d9479b69b64970f79e8965ea347189c9",
        "0x4582411643f9bbe6c736ed2114eda856b1c9ed40",
        "0xe35eb22a349baba4f1a28a9cdba641d3b72c6203",
        "0xf73dcfe24f5e4d290c79fea72169deb6873666ae",
      ],
    },
    releaseAt: 1744632000000,
  },
  {
    name: "ynBNBx",
    id: "ynBNBx",
    tokenOut: "ynBNBx",
    chains: [
      {
        chainId: 56,
        network: "BNB",
      },
    ],
    creditManagers: {
      [1135]: [
        "0x7bc15d198d1f5ec007b028c093a21373847c3d89",
        "0x9f4a7e6bf52c63bcd0dbc26c7d4ed00d0246596a",
      ],
    },
    issuesOnClose: true,
  },
  {
    name: "sUSDX",
    id: "sUSDX",
    tokenOut: "sUSDX",
    chains: [
      {
        chainId: 56,
        network: "BNB",
      },
    ],
    creditManagers: {
      [1135]: [
        "0xe46ce90ecbf09026bbe7e898f213e74060e9e70a",
        "0x008bf6e954320103e9e021e782ed95b0f70f78eb",
      ],
    },
    releaseAt: 1749747600,
    issuesOnClose: true,
  },
  {
    name: "uptBTC",
    id: "uptBTC",
    tokenOut: "uptBTC",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xfe83807dec8c6a4f4d93b7dbd6340771753e2cd8",
        "0x732f28d627f3f5cfb599a539f58fa7cba6698297",
      ],
    },
    releaseAt: 1750683600,
    issuesOnClose: true,
  },
  {
    name: "Pendle uptBTC PT (14 aug 2025)",
    id: "PT_uptBTC_14AUG2025",
    tokenOut: "PT_uptBTC_14AUG2025",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xfe83807dec8c6a4f4d93b7dbd6340771753e2cd8",
        "0x732f28d627f3f5cfb599a539f58fa7cba6698297",
      ],
    },
    releaseAt: 1750683600,
    issuesOnClose: true,
  },
  {
    name: "mTBILL",
    id: "mTBILL",
    tokenOut: "mTBILL",
    chains: [
      {
        chainId: 42793,
        network: "Etherlink",
      },
    ],
    creditManagers: {},
    issuesOnClose: true,
  },
  {
    name: "mBASIS",
    id: "mBASIS",
    tokenOut: "mBASIS",
    chains: [
      {
        chainId: 42793,
        network: "Etherlink",
      },
    ],
    creditManagers: {},
    issuesOnClose: true,
  },

  {
    name: "Lisk lskETH",
    id: "lskETH",
    tokenOut: "lskETH",
    chains: [
      {
        chainId: 1135,
        network: "Lisk",
      },
    ],
    creditManagers: {
      [1135]: [
        "0xfd69c9ef4d88e568d3514861f15770cc77f81526",
        "0x57b54c825d918796b1bef8f4c98d632b5e9fa6a3",
      ],
    },
    issuesOnClose: true,
    additionalRewardQuotas: {
      [1135]: {
        "0xa16952191248e6b4b3a24130dfc47f96ab1956a7": [
          "0xac485391eb2d7d88253a7f1ef18c37f4242d1a24",
        ],
      },
    },
  },
  {
    name: "Falcon staked USDf",
    id: "sUSDf",
    tokenOut: "sUSDf",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xbcd2ffac58189e57334bb63253acbf34d776de53",
        "0x8c118e8c20cebbaa2467b735bbb8b13d614e6608",
      ],
    },
    issuesOnClose: true,
    hideInProd: true,
  },
  {
    name: "PT sUSDf 25SEP2025",
    id: "PT_sUSDf_25SEP2025",
    tokenOut: "PT_sUSDf_25SEP2025",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xbcd2ffac58189e57334bb63253acbf34d776de53",
        "0x8c118e8c20cebbaa2467b735bbb8b13d614e6608",
      ],
    },
    issuesOnClose: true,
    hideInProd: true,
  },
  {
    name: "PT USDf 29JAN2026",
    id: "PT_USDf_29JAN2026",
    tokenOut: "PT_USDf_29JAN2026",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xbcd2ffac58189e57334bb63253acbf34d776de53",
        "0x8c118e8c20cebbaa2467b735bbb8b13d614e6608",
      ],
    },
    issuesOnClose: true,
    hideInProd: true,
  },
  {
    name: "Convex-staked USDC/USDf",
    id: "stkcvxUSDCUSDf",
    tokenOut: "stkcvxUSDCUSDf",
    chains: [
      {
        chainId: 1,
        network: "Mainnet",
      },
    ],
    creditManagers: {
      [1]: [
        "0xbcd2ffac58189e57334bb63253acbf34d776de53",
        "0x8c118e8c20cebbaa2467b735bbb8b13d614e6608",
      ],
    },
    issuesOnClose: true,
    hideInProd: true,
  },
];

// {
//   name: "Yearn DAI",
//   id: "yvDAI",
//   tokenOut: "yvDAI",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Yearn USDC",
//   id: "yvUSDC",
//   tokenOut: "yvUSDC",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Yearn WETH",
//   id: "yvWETH",
//   tokenOut: "yvWETH",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Yearn WBTC",
//   id: "yvWBTC",
//   tokenOut: "yvWBTC",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex crvUSD+USDC",
//   id: "stkcvxcrvUSDUSDC",
//   tokenOut: "stkcvxcrvUSDUSDC",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex crvUSD+USDT",
//   id: "stkcvxcrvUSDUSDT",
//   tokenOut: "stkcvxcrvUSDUSDT",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex crvUSD+FRAX",
//   id: "stkcvxcrvUSDFRAX",
//   tokenOut: "stkcvxcrvUSDFRAX",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex FRAX+USDC",
//   id: "stkcvxcrvFRAX",
//   tokenOut: "stkcvxcrvFRAX",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex crvUSD+ETH+CRV",
//   id: "stkcvxcrvUSDETHCRV",
//   tokenOut: "stkcvxcrvUSDETHCRV",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Convex crvUSD+WBTC+ETH",
//   id: "stkcvxcrvUSDTWBTCWETH",
//   tokenOut: "stkcvxcrvUSDTWBTCWETH",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Yearn USDC.e",
//   id: "yvUSDC_e",
//   tokenOut: "yvUSDC_e",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Frax Staked frxETH",
//   id: "sfrxETH",
//   tokenOut: "sfrxETH",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Yearn USDT",
//   id: "yvUSDT",
//   tokenOut: "yvUSDT",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "USDX",
//   id: "USDX",
//   tokenOut: "USDX",
//   chains: [],
//   creditManagers: {},
// },
// {
//   name: "Pendle sUSDX PT (1 sep 2025)",
//   id: "PT_sUSDX_1SEP2025",
//   tokenOut: "PT_sUSDX_1SEP2025",
//   chains: [],
//   creditManagers: {},
// },
