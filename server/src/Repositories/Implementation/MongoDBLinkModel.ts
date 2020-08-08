import { Schema, model } from "mongoose";

const LinkSchema = new Schema({
  alias: { type: String, unique: true, required: true },
  url: { type: String, required: true },
});

const LinkModel = model("Link", LinkSchema);

export { LinkModel };
