import "dotenv/config";
import express from "express";
import { connectToDatabase } from "./utils/db";
import { indexRouter } from "./routes/index.route";

const app = express();

const PORT = process.env.PORT || 5000;

// Generic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", indexRouter);

// Connect to DB first before starting up the server
connectToDatabase(process.env.MONGODB_URI!)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Error connecting to database", err.message);
  });
