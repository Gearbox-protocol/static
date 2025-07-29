export type TokenTypePool = "eth" | "stable" | "btc" | "wbnb" | "s" | "hemiBTC";

export interface PoolConfigPayload {
  // is used to recognize pool in the list; maybe show this name instead of version + underlying symbol?
  name: string;
  // pool address
  address: Address;
  // chain id and network type as in sdk. wrong entries are being omitted
  chainId: number;
  network: string;
  // is used to recognize pool in the list; maybe show this name instead name from sdk?
  curator: string;
  poolType: [TokenTypePool];
}

type Address = `0x${string}`;
