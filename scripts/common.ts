/** Mainnet pools treated as account version 2 (same as fetch-old-accounts.ts). */
export const POOL_ADDRESSES_V2_MAINNET = [
  "0x24946bcbbd028d5abb62ad9b635eb1b1a67af668",
  "0x79012c8d491dcf3a30db20d1f449b14caf01da6c",
  "0x86130bdd69143d8a4e5fc50bf4323d48049e98e4",
  "0xb03670c20f87f2169a7c4ebe35746007e9575901",
  "0xb8cf3ed326bb0e51454361fb37e9e8df6dc5c286",
  "0xb2a015c71c17bcac6af36645dead8c572ba08a08",
];

export const POOL_ADDRESSES_ALL_MAINNET = [
  "0xff94993fa7ea27efc943645f95adb36c1b81244b",
  "0xe7146f53dbcae9d6fa3555fe502648deb0b2f823",
  "0xda0002859b2d05f66a753d8241fcde8623f26f4f",
  "0xda00010eda646913f273e10e7a5d1f659242757d",
  "0xda00000035fef4082f78def6a8903bee419fbf8e",
  ...POOL_ADDRESSES_V2_MAINNET,
  "0x8ef73f036feec873d0b2fd20892215df5b8bdd72",
  "0x05a811275fe9b4de503b3311f51edf6a856d936e",
  "0x31426271449f60d37cc5c9aef7bd12af3bdc7a94",
  "0x4d56c9cba373ad39df69eb18f076b7348000ae09",
  "0x7354ec6e852108411e681d13e11185c3a2567981",
];

export const ARBITRUM_POOLS = [
  "0x04419d3509f13054f60d253e0c79491d9e683399",
  "0x890a69ef363c9c7bdd5e36eb95ceb569f63acbf6",
  "0xa76c604145d7394dec36c49af494c144ff327861",
];

export const OPTIMISM_POOLS = [
  "0xa210bb193ca352fa81fbd0e81cb800580b0762ee",
  "0x5520daa93a187f4ec67344e6d2c4fc9b080b6a35",
  "0x42db77b3103c71059f4b997d6441cfb299fd0d94",
];

export const V2_MAINNET_LC = new Set(
  POOL_ADDRESSES_V2_MAINNET.map(a => a.toLowerCase()),
);
