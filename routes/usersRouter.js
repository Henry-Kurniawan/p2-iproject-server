const express = require("express")
const usersRouter = express.Router()
const ControllerUser = require("../controllers/controllerUser")
const errorHandler = require("../middleware/errorHandler")



usersRouter.post("/register", ControllerUser.register)
usersRouter.post("/login", ControllerUser.login)

usersRouter.use(errorHandler)


module.exports = usersRouter