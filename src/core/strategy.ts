export interface StrategyPayload {
  name: string;
  id: TokenOut;
  tokenOut: TokenOut;
  chains: Array<AllowedChain>;
  creditManagers: CreditManagersList;

  releaseAt?: ReleaseAtLocal;
  hideInProd?: HideInProd;
  maxLeverage?: MaxLeverage;
  delayedWithdrawal?: DelayedWithdrawal;
  issuesOnClose?: IssuesOnClose;
  zeroSlippage?: ZeroSlippage;
  additionalRewardQuotas?: AdditionalRewardQuotas;
  rewardsToKeepOnLiquidation?: RewardsToKeepOnLiquidation;
}

type TokenOut = string;

// chain id and network type as in sdk. wrong entries are being omitted
interface AllowedChain {
  chainId: number;
  network: string;
}

// undefined - no restrictions
// number - one value for all chains
// PartialRecord<number, number> - different values for each chain
// PartialRecord<number, PartialRecord<Address, number>> - different values for each chain and each cm
type MaxLeverage =
  | undefined
  | number
  | PartialRecord<number, PartialRecord<Address, number> | number>;

// undefined - released
// number - the same release date for all chains
// PartialRecord<number, number> - release date for each chain separately
// In ms, for example: 1740398400_000
type ReleaseAtLocal = undefined | number | PartialRecord<number, number>;

// if a chain doesn't have credit managers - strategy won't be shown on that chain
type CreditManagersList = PartialRecord<number, Array<Address>>;

// undefined, false = no
// PartialRecord<number, boolean> - delayed withdrawal for each chain separately
type DelayedWithdrawal = undefined | boolean | PartialRecord<number, boolean>;

// previously known as "bad asset", an asset closing account with may need extra capital.
// undefined, false = no
// VersionRange - problems only in this range
// PartialRecord<number, boolean | VersionRange> - delayed withdrawal for each chain separately
type IssuesOnClose =
  | undefined
  | boolean
  | VersionRange
  | PartialRecord<number, boolean | VersionRange>;

// an optons to show strategies in dev environment only
// undefined, false = no
// PartialRecord<number, boolean> - delayed withdrawal for each chain separately
type HideInProd = undefined | boolean | PartialRecord<number, boolean>;

// pools in which current token has zero slippage
// chain - pool - boolean
type ZeroSlippage =
  | undefined
  | PartialRecord<number, PartialRecord<Address, boolean>>;

// pools in which additional quota should be bought for current token
// chain - pool - boolean
type AdditionalRewardQuotas =
  | undefined
  | PartialRecord<number, PartialRecord<Address, Address[]>>;

// is equal to AdditionalRewardQuotas in not specified
type RewardsToKeepOnLiquidation =
  | undefined
  | PartialRecord<number, PartialRecord<Address, Address[]>>;

type VersionRange = [number, number];

type Address = `0x${string}`;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
