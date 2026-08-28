import { writeFile } from "node:fs/promises";

import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

/**
 * Matches how ui-kit publishes: one marker at the ESM root — subdirectories
 * inherit it — while CommonJS is told apart by its `.cjs` extension and needs
 * no marker of its own.
 */
const markEsm = () =>
  writeFile(
    "./dist/esm/package.json",
    `{"type": "module","sideEffects":false}`,
    "utf-8",
  );

export default defineConfig(inlineConfig => {
  const commonOptions: UserConfig = {
    entry: ["src/**/*.ts", "src/**/*.tsx"],
    root: "./src",
    // One output file per source file, so importing a single icon does not
    // drag the other thirty-three in.
    unbundle: true,
    clean: !inlineConfig.watch,
    treeshake: false,
    sourcemap: false,
    hash: false,
    cjsDefault: false,
    dts: false,
    deps: { neverBundle: true },
  };

  return [
    {
      ...commonOptions,
      format: "cjs",
      outDir: "./dist/cjs/",
      outExtensions: () => ({ js: ".cjs" }),
    },
    {
      ...commonOptions,
      format: "esm",
      outDir: "./dist/esm/",
      outExtensions: () => ({ js: ".js" }),
      onSuccess: markEsm,
    },
    {
      ...commonOptions,
      format: "esm",
      outDir: "./dist/types/",
      outExtensions: () => ({ dts: ".ts" }),
      dts: { emitDtsOnly: true },
    },
  ];
});
