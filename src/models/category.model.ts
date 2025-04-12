import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: { type: String },
  image: { type: String },
});

export const categoryModel = mongoose.model("Category", categorySchema);
