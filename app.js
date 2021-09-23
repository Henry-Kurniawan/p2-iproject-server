if(process.env.NODE_ENV === "development") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const router = require("./routes/index.js")

const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(router)

module.exports = app

/*
sequelize model:generate --name User --attributes email:string,password:string,trelloListId:string,phoneNumber:string,address:string
sequelize model:generate --name Genre --attributes name:string

*/