import { RequestHandler } from "express"
import { Pet } from "../models/Pet"
import { createMenuObject } from "../helpers/createMenuObject"

export const Search: RequestHandler = (req, res) => {
  let query: string = req.query.q as string

  let list = Pet.getFromName(query)

  res.render("pages/page", {
    list,
    query,
    menu: createMenuObject(""),
  })
}
