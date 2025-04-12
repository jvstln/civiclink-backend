import { disconnect } from "mongoose";
import { officialModel } from "../models/official.model";
import * as fs from "fs";
import * as path from "path";
import * as csv from "csv-parse/sync";
import { Official } from "../types/official.type";
import { connectToDatabase } from "./db";
import { Category } from "../types/category.type";
import { categoryModel } from "../models/category.model";

const getPublicDataPath = (fileName: string) => {
  return path.join(process.cwd(), "public", "data", fileName);
};

export async function initializeDatabase() {
  // Connect to MongoDB
  await connectToDatabase();

  // Read and parse CSV files
  const officialsFilePath = getPublicDataPath("verified-government-data.csv");
  const categoriesFilePath = getPublicDataPath("categories.csv");

  const rawOfficials: Official[] = csv.parse(
    fs.readFileSync(officialsFilePath, "utf-8"),
    { columns: true, skip_empty_lines: true }
  );

  const rawCategories: Category[] = csv.parse(
    fs.readFileSync(categoriesFilePath, "utf-8"),
    { columns: true, skip_empty_lines: true }
  );

  // Clear existing data
  await officialModel.deleteMany({});
  await categoryModel.deleteMany({});

  // Create categories first
  await categoryModel.insertMany(rawCategories);
  console.log(`Successfully inserted ${rawCategories.length} categories`);

  // Insert new data
  const officials = await Promise.all(
    rawOfficials.map(async (record) => {
      const category = await categoryModel.findOne({ name: record.category });

      return {
        name: record.name,
        position: record.position.toLowerCase(),
        jurisdiction: record.jurisdiction.toLowerCase(),
        level: record.level.toLowerCase(),
        state: record.state.toLowerCase(),
        email: record.email.toLowerCase(),
        phone: record.phone,
        description: record.description,
        category: category?._id,
      };
    })
  );

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
