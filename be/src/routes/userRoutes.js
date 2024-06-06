const express = require("express")
const router = express.Router()
const userHandlers = require("../handlers/userHandlers")
const authMiddleware = require("../middleware/auth")

router.use(authMiddleware)

router.get("/", userHandlers.get)
router.get("/:id", userHandlers.getById)
router.post("/", userHandlers.create)
router.put("/:id", userHandlers.update)
router.delete("/:id", userHandlers.destroy)

module.exports = router
