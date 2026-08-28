/**
 * An EVM address.
 *
 * Declared here rather than taken from a chain library: this repo is static
 * config data, and every consumer's `Address` resolves to the same template
 * literal type, so the lists stay assignable without the dependency.
 */
export type Address = `0x${string}`;
