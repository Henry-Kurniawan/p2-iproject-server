const express = require("express")
const router = express.Router()
const animesRouter = require("./animesRouter")

router.get("/", (req, res) => {
    res.send("home")
})

router.use ("/animes", animesRouter)

module.exports = router