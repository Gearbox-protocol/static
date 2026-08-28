/**
 * The config payload this repo publishes. Declared here rather than imported
 * from the SDK: the shape is this repo's contract with its consumers, and the
 * SDK's copy lived behind a legacy entrypoint that no longer exists.
 */
import type { Address } from "../core/address";

export type TokenTypePool =
  | "eth"
  | "stable"
  | "btc"
  | "wbnb"
  | "s"
  | "hemiBTC"
  | "mon"
  | "somi";

export interface PoolConfigPayload {
  // is used to recognize pool in the list; maybe show this name instead of version + underlying symbol?
  name: string;
  // pool address
  address: Address;
  // chain id and network type as they are written in sdk. wrong entries are being omitted
  chainId: number;
  network: string;
  // is used to recognize pool in the list; maybe show this name instead name from sdk?
  curator: string;
  poolType: [TokenTypePool];
  // is used hide pools with low interest checkbox on the main page
  isLowInterest?: boolean;
}
