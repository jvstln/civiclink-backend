import { disconnect } from "mongoose";
import { officialModel } from "../models/official.model";
import * as fs from "fs";
import * as path from "path";
import * as csv from "csv-parse/sync";
import { Official } from "../types/official.type";
import { connectToDatabase } from "./db";

export async function initializeDatabase() {
  // Connect to MongoDB
  await connectToDatabase();

  // Read and parse CSV file
  const csvFilePath = path.join(
    process.cwd(),
    "public",
    "verified-government-data.csv"
  );
  const fileContent = fs.readFileSync(csvFilePath, "utf-8");

  const records: Official[] = csv.parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Clear existing data
  await officialModel.deleteMany({});

  // Insert new data
  const officials = records.map((record) => ({
    name: record.name,
    position: record.position.toLowerCase(),
    jurisdiction: record.jurisdiction.toLowerCase(),
    level: record.level.toLowerCase(),
    state: record.state.toLowerCase(),
    email: record.email.toLowerCase(),
    phone: record.phone,
    description: record.description,
    categories: record.categories,
  }));

  await officialModel.insertMany(officials);
  console.log(`Successfully inserted ${officials.length} officials`);

  // Disconnect from MongoDB
  await disconnect();
}

// Run the initialization if this file is executed directly
if (require.main === module) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error initializing DB: ", error);
      process.exit(1);
    });
}
