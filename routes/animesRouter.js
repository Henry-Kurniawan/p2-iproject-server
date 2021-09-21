const express = require("express")
const animesRouter = express.Router()
const ControllerAnime = require("../controllers/controllerAnime")
const errorHandler = require("../middleware/errorHandler")

animesRouter.get("/", ControllerAnime.getAnimeList)
animesRouter.get("/:id", ControllerAnime.getAnimeDetail)

animesRouter.use(errorHandler)

module.exports = animesRouter