const express = require("express")
const authRoutes = require("./authRoutes")
const userRoutes = require("./userRoutes")
const postRoutes = require("./postRoutes")

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Instaglam API",
  })
})

router.use("/", authRoutes)
router.use("/user", userRoutes)
router.use("/post", postRoutes)

router.use((req, res, next) => {
  res.helper.notFound()
})

module.exports = router
