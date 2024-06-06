const jwt = require("jsonwebtoken")

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    if (!authHeader) {
      throw new Error('Authorization Header not found')
    }
    const token = authHeader.split(" ")[1]
    if (!token) {
      throw new Error('No Bearer Token provided')
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.helper.error(err, "Failed to authenticate token", 401)
      }
      jwt.sign({ id: decoded.id }, ACCESS_TOKEN_SECRET, {expiresIn: "1h"})
      req.userId = decoded.id
      next()
    })
  } catch (error) {
    throw error
    // return res.helper.validationError("Unathorized", error.message, 401)
  }
}

module.exports = authMiddleware
