import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    creator: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Field = mongoose.model("Field", fieldSchema);
export { Field };
