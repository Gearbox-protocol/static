/**
 * The config payload this repo publishes. Declared here rather than imported
 * from the SDK: the shape is this repo's contract with its consumers, and the
 * SDK's copy lived behind a legacy entrypoint that no longer exists.
 */
import type { Address } from "../core/address";

export type TokenMigration = "pt";

export interface TokenMigrationConfigPayload {
  // chain id and network type as they are written in sdk. wrong entries are being omitted
  chainId: number;
  network: string;
  // type, probably in the future there will be more migration types
  type: TokenMigration;

  // token to migrate from
  source: Address;
  // source token expiration time in ms
  expired: number;
  // token to migrate to
  target: Address;
}
