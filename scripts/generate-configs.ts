import * as fs from "fs";
import * as path from "path";

import { TOKENS_MIGRATION_LIST } from "../src/migration";
import { POOLS_LIST } from "../src/pools";
import { STRATEGIES_LIST } from "../src/strategies";
import { TRADING_PAIRS_LIST } from "../src/trading";

const CONFIG = [
  {
    outputDir: ["..", "public", "client-v3", "configs", "strategies"],
    outputFile: "strategies.json",
    source: STRATEGIES_LIST,
  },
  {
    outputDir: ["..", "public", "client-v3", "configs", "pools"],
    outputFile: "pools.json",
    source: POOLS_LIST,
  },
  {
    outputDir: ["..", "public", "client-v3", "configs", "trading"],
    outputFile: "trading.json",
    source: TRADING_PAIRS_LIST,
  },
  {
    outputDir: ["..", "public", "client-v3", "configs", "tokens-migration"],
    outputFile: "tokens-migration.json",
    source: TOKENS_MIGRATION_LIST,
  },
];

function generateStrategiesJson(): void {
  for (let { outputDir: dir, outputFile: file, source } of CONFIG) {
    try {
      // Define the output directory and file path
      const outputDir = path.join(__dirname, ...dir);
      const outputFile = path.join(outputDir, file);

      // Create the directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`Created directory: ${outputDir}`);
      }

      // Remove existing file if it exists
      if (fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile);
        console.log(`Removed existing file: ${outputFile}`);
      }

      // Transform source to JSON string
      const jsonString = JSON.stringify(source, null, 2);

      // Write the JSON file
      fs.writeFileSync(outputFile, jsonString, "utf8");

      console.log(
        `Successfully generated ${file} with ${source.length} entries`,
      );
      console.log(`File saved to: ${outputFile}`);
    } catch (error) {
      console.error(`Error generating ${file}:`, error);
      process.exit(1);
    }
  }
}

// Run the script
generateStrategiesJson();
