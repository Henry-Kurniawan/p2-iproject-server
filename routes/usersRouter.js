const express = require("express")
const usersRouter = express.Router()
const ControllerUser = require("../controllers/controllerUser")
const errorHandler = require("../middleware/errorHandler")
const { authentication } = require("../middleware/authentication")



usersRouter.post("/register", ControllerUser.register)
usersRouter.post("/login", ControllerUser.login)


usersRouter.use(authentication)

usersRouter.get("/bookmarks", ControllerUser.viewMyBookmark)
usersRouter.post("/bookmarks", ControllerUser.addBookmark)
usersRouter.put("/bookmarks/:cardId", ControllerUser.editBookmarkStatus)
// usersRouter.delete("/bookmarks/:cardId", ControllerUser.login)

usersRouter.use(errorHandler)


module.exports = usersRouter