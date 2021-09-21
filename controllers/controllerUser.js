const { User } = require("../models")

const {signToken} = require("../helpers/jwt")
const {comparePassword} = require("../helpers/bcrypt")
const axios = require("axios")

// In case you need to change the token to another set
const TRELLO_BOARD_ID = process.env.TRELLO_BOARD_ID
const TRELL0_API_KEY = process.env.TRELLO_API_KEY
const TRELLO_TOKEN = process.env.TRELLO_TOKEN

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
                    idBoard: TRELLO_BOARD_ID,
                    key: TRELL0_API_KEY,
                    token: TRELLO_TOKEN
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

    static async viewMyBookmark(req, res, next) {
        try {
            const { trelloListId } = req.currentUser
            
            let trelloBookmarks = await axios({
                method: "get",
                url: `https://api.trello.com/1/lists/${trelloListId}/cards`,
            })

            res.status(200).json(trelloBookmarks.data)
        } catch (err) {
            next(err)
        }
    }

    static async addBookmark(req, res, next) {
        try {
            const { trelloListId } = req.currentUser
            const { title } = req.query
            const trelloParams = {
                name: title,
                idList: trelloListId,
                key: TRELL0_API_KEY,
                token: TRELLO_TOKEN
            }
            
            let trelloBookmarks = await axios({
                method: "post",
                url: `https://api.trello.com/1/cards`,
                params: trelloParams,
                headers: {
                    Accept: "application/json"
                }
            })

            res.status(201).json({
                id: trelloBookmarks.data.id,
                name: trelloBookmarks.data.name,
                dueComplete: trelloBookmarks.data.dueComplete
            })
        } catch (err) {
            next(err)
        }
    }

    static async editBookmarkStatus(req, res, next) {
        try {
            const cardId = req.params.cardId
            const status = req.query.status // true/false
            
            const trelloParams = {
                dueComplete: status,
                key: TRELL0_API_KEY,
                token: TRELLO_TOKEN
            }

            let trelloBookmarks = await axios({
                method: "put",
                url: `https://api.trello.com/1/cards/${cardId}`,
                params: trelloParams,
                headers: {
                    Accept: "application/json"
                }
            })

            res.status(200).json({
                id: trelloBookmarks.data.id,
                name: trelloBookmarks.data.name,
                dueComplete: trelloBookmarks.data.dueComplete
            })

        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerUser