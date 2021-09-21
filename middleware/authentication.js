const { verify } = require("../helpers/jwt")
const { User, Product } = require("../models/")

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.access_token
        const payload = verify(token)
        const foundUser = await User.findOne({
            where : {
                id: payload.id,
                email: payload.email
            }
        })

        if(!foundUser) {
            throw new Error()
        }

        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
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