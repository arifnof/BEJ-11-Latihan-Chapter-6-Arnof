const express = require("express")
const routes = require("./routes")
const accessLogMiddleware = require("./middleware/accessLog")
const errorLogMiddleware = require("./middleware/errorLog")
const responseMiddleware = require("./middleware/responseHelper")
const errorHandler = require("./middleware/errorHandler")

const app = express()

app.use(express.json())

app.use(accessLogMiddleware)

app.use(responseMiddleware);

app.use("/", routes)

app.use(errorLogMiddleware)

app.use(errorHandler)

module.exports = app
