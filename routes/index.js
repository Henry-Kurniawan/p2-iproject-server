const express = require("express")
const router = express.Router()
const animesRouter = require("./animesRouter")
const usersRouter = require("./usersRouter")
const errorHandler = require("../middleware/errorHandler")

router.get("/", (req, res) => {
    res.send("home")
})

router.use ("/animes", animesRouter)
router.use ("/users", usersRouter)


module.exports = router