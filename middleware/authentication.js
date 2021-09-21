const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models/")

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.access_token
        
        const payload = verifyToken(token)
        const foundUser = await User.findOne({
            where : {
                id: payload.id,
                email: payload.email
            }
        })

        if(!foundUser) {
            throw new Error()
        }

        req.currentUser = {
            id: foundUser.id,
            email: foundUser.email,
            trelloListId: foundUser.trelloListId
        }
        
        next()

    } catch (err) {
        next({
            name: "InvalidUserToken",
            code: 401,
            message: `Invalid Token`
        })
    }
}

module.exports = {
    authentication
}