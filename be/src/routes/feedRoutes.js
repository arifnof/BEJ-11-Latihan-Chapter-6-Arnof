const express = require("express")
const router = express.Router()
const postHandlers = require("../handlers/postHandlers")
const authMiddleware = require("../middleware/auth")

router.use(authMiddleware)

router.get("/", postHandlers.getFeed)

module.exports = router
