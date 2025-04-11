import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of official is required"],
      minLength: [3, "Name must be more than 3 characters"],
    },
    position: {
      type: String,
      required: [true, "Position of official is required"],
      lowercase: true,
    },
    jurisdiction: {
      type: String,
      required: [true, "Jurisdiction of official is required"],
      lowercase: true,
    },
    level: {
      type: String,
      required: [true, "Level of official is required"],
      lowercase: true,
    },
    state: {
      type: String,
      required: [true, "State of official is required"],
      lowercase: true,
    },
    description: { type: String, trim: true },
    email: {
      type: String,
      required: [true, "Email of official is required"],
      unique: [true, "Official with this email already exists"],
      trim: true,
      lowercase: true,
    },
    phone: { type: String, required: [true, "Phone of official is required"] },
    categories: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ position: 1, jurisdiction: 1 }, { unique: true });

export const officialModel = model("Official", userSchema);
