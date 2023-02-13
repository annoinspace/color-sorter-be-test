import mongoose from "mongoose"
import bcrypt from "bcrypt"

const { Schema, model } = mongoose

const colorsSchema = new Schema(
  {
    rgbValue: [{ type: Number, required: true }],
    hexValue: { type: String, required: true },
    name: { type: String, required: false },
    baseColor: { type: String, required: true },
    categories: [{ type: String, enum: ["Pastel", "Neutral", "Bright", "Cool", "Warm"], required: false }]
  },
  {
    timestamps: true
  }
)

export default model("Color", colorsSchema)
