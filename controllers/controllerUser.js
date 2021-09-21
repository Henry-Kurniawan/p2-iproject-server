const { User } = require("../models")

const {signToken} = require("../helpers/jwt")
const {comparePassword} = require("../helpers/bcrypt")
const axios = require("axios")

class ControllerUser {
    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userLogin = await User.findOne({
                where: { 
                    email 
                }
            })
            
            if(userLogin) {
                const isValid = comparePassword(password, userLogin.password)
                const {id, email, trelloListId} = userLogin
                if(isValid) {
                    const access_token = signToken({
                        id,
                        email,
                        trelloListId
                    })
                    res.status(200).json({ access_token, id, email, trelloListId })
                } else {
                    next({
                        name: "LoginError",
                        code: 401,
                        message: "Invalid Username or Password"
                    })
                }
            } else {
                next({
                    name: "LoginError",
                    code: 401,
                    message: "Invalid Username or Password"
                })
            }

        } catch(err) {
            next(err)
        }
    }

    static async register(req, res, next) {
        try {
 
            const { email, password, phoneNumber, address } = req.body

            let checkEmail = await User.findOne({
                where: { email }
            })

            if(checkEmail) {
                next({
                    name: "RegisterError",
                    code: 400,
                    message: "Email already exist"
                })
            } else {
                const trelloParams = {
                    name: email,
                    idBoard: process.env.TRELLO_BOARD_ID,
                    key: process.env.TRELLO_API_KEY,
                    token: process.env.TRELLO_TOKEN
                }

                let trelloList = await axios({
                    method: "post",
                    url: "https://api.trello.com/1/lists",
                    params: trelloParams
                })

                let trelloListId = trelloList.data.id

                const data = {
                    email,
                    password,
                    phoneNumber,
                    address,
                    trelloListId
                }

                const newUser = await User.create(data)
    
                const access_token = signToken({
                    id: newUser.id,
                    email: newUser.email,
                    trelloListId: newUser.trelloListId
                })

                res.status(201).json({
                    access_token,
                    email: newUser.email,
                    id: newUser.id,
                    trelloListId: newUser.trelloListId
                })
            }
        } catch (err) {
            // res.status(500).json(err.message)
            next(err)
        }
    }
}

module.exports = ControllerUser