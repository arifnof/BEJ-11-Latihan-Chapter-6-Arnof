const express = require("express")
const router = express.Router()
const postHandlers = require("../handlers/postHandlers")
const authMiddleware = require("../middleware/auth")

router.use(authMiddleware)

router.get("/", postHandlers.get)
router.get("/:id", postHandlers.getById)
router.post("/", postHandlers.create)
router.put("/:id", postHandlers.update)
router.put("/:id/like", postHandlers.updateLike)
router.delete("/:id", postHandlers.destroy)

router.get("/:postId/media", postHandlers.getMedia)
router.post("/:postId/media", postHandlers.createMedia)
router.delete("/:postId/media/:id", postHandlers.destroyMedia)

module.exports = router
