require("dotenv").config()

const express = require("express")
const app = express()
const router = require("./routes/index.js")

const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(router)

module.exports = app