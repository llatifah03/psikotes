import mongoose, { Schema } from "mongoose";

const psikotesSchema = new Schema(
  {
    description: String,
    subTitle: String,
    title: String,
    imageUrl: String,
    pathName: String,
  },
  { timestamps: true }
);

const Psikotes =
  mongoose.models.Psikotes || mongoose.model("Psikotes", psikotesSchema);

export default Psikotes;
