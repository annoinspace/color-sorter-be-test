import mongoose from "mongoose"
import bcrypt from "bcrypt"

const { Schema, model } = mongoose

const colorsSchema = new Schema(
  {
    rgbValue: [{ type: Number, required: true }],
    hexValue: { type: String, required: true },
    name: { type: String, required: false },
    baseColor: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export default model("Color", colorsSchema)
