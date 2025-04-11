import "dotenv/config";
import mongoose from "mongoose";

export const connectToDatabase = async (
  databaseUrl: string = process.env.MONGODB_URI!
) => {
  console.log("Connecting to database...");
  await mongoose.connect(databaseUrl);
  console.log("Connected to database successfully");
};
