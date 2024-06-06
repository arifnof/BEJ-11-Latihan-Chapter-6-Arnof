const express = require("express")
const authRoutes = require("./authRoutes")
const userRoutes = require("./userRoutes")
const itemRoutes = require("./itemRoutes")
const orderRoutes = require("./orderRoutes")

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the BingleShop API",
  })
})

router.use("/", authRoutes)
router.use("/user", userRoutes)
router.use("/item", itemRoutes)
router.use("/order", orderRoutes)

router.use((req, res, next) => {
  res.helper.notFound()
})

module.exports = router
