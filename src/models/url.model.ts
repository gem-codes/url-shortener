import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
  originalURL: {
    type: String,
    required: true,
  },
  tinyURL: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

export const URL = mongoose.model("URL", urlSchema)
