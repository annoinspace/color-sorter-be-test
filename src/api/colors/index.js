import express from "express"
import createHttpError from "http-errors"

import ColorsModel from "./model.js"
import { componentToHex, getCategoryFromRGB } from "../lib/colorSorter.js"

const colorsRouter = express.Router()

colorsRouter.post("/add", async (req, res, next) => {
  try {
    const { r, g, b } = req.body
    const rgb = [r, g, b]
    console.log("rgb from body", rgb)
    const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    console.log("hex color from rgb", hex)
    const basicCategory = getCategoryFromRGB(rgb)

    const newColor = new ColorsModel({
      rgbValue: rgb,
      hexValue: hex,
      baseColor: basicCategory
    })

    const newColorSaved = await newColor.save()
    res.status(201).send(newColorSaved)
  } catch (error) {
    next(error)
  }
})

colorsRouter.get("/", async (req, res, next) => {
  try {
    const colors = await ColorsModel.find({})
    res.send(colors)
  } catch (error) {
    next(error)
  }
})

export default colorsRouter
