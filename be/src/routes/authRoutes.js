const express = require("express")
const router = express.Router()
const authHandlers = require("../handlers/authHandlers")
const authMiddleware = require("../middleware/auth")

router.post("/register", authHandlers.register)
router.post("/login", authHandlers.login)
router.get("/loginStatus", authMiddleware, authHandlers.loginStatus)

module.exports = router
