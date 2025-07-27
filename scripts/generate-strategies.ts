import * as fs from "fs";
import * as path from "path";
import { STRATEGIES_LIST } from "../src/strategies";

function generateStrategiesJson(): void {
  try {
    // Define the output directory and file path
    const outputDir = path.join(__dirname, "..", "public", "strategies");
    const outputFile = path.join(outputDir, "strategies.json");

    // Create the directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`Created directory: ${outputDir}`);
    }

    // Remove existing strategies.json if it exists
    if (fs.existsSync(outputFile)) {
      fs.unlinkSync(outputFile);
      console.log(`Removed existing file: ${outputFile}`);
    }

    // Transform STRATEGIES_LIST to JSON string
    const jsonString = JSON.stringify(STRATEGIES_LIST, null, 2);

    // Write the JSON file
    fs.writeFileSync(outputFile, jsonString, "utf8");

    console.log(
      `Successfully generated strategies.json with ${STRATEGIES_LIST.length} strategies`,
    );
    console.log(`File saved to: ${outputFile}`);
  } catch (error) {
    console.error("Error generating strategies.json:", error);
    process.exit(1);
  }
}

// Run the script
generateStrategiesJson();
