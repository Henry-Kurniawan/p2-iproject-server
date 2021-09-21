const express = require("express")
const animesRouter = express.Router()
const ControllerAnime = require("../controllers/controllerAnime")

animesRouter.get("/", ControllerAnime.getAnimeList)
animesRouter.get("/:id", ControllerAnime.getAnimeDetail)

module.exports = animesRouter