export interface StrategyPayload {
  name: string;
  id: string;
  tokenOut: string;
  // chain id and network type as in sdk. wrong entries are being omitted
  chainId: number;
  network: string;
  // if a chain doesn't have credit managers - strategy won't be shown on that chain
  creditManagers: Array<Address>;

  /*  
    undefined - released
    number - one value for the current chain
    In ms, for example: 1740398400_000
  */
  releaseAt?: number;
  // an options to show strategies in dev environment only
  // undefined, false = no
  hideInProd?: boolean;
  /*
   undefined - no restrictions
   number - one value for the current chain
  */
  maxLeverage?: number;
  /*
    undefined, false = no
    PartialRecord<number, boolean> - delayed withdrawal for each chain separately
  */
  delayedWithdrawal?: boolean;
  /* 
    previously known as "bad asset", an asset closing account with may need extra capital.
    undefined, false = no
    VersionRange - problems only in this range
  */
  issuesOnClose?: boolean | VersionRange;
  /*
    pools in which current token has zero slippage
    pool - boolean
  */
  zeroSlippage?: PartialRecord<Address, boolean>;
  // pools in which additional quota should be bought for current token
  // pool - boolean
  additionalRewardQuotas?: PartialRecord<Address, Address[]>;
}

type VersionRange = [number, number];

type Address = `0x${string}`;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
