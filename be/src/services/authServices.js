const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

const { User } = require("../infrastructure/database/models")

module.exports = {
  create: async (userData) => {
    try {
      userData.password = await bcrypt.hash(userData.password, 10)
      let data = await User.create(userData)
      return { id: data.id }
    } catch (error) {
      throw error
    }
  },
  login: async (username, password) => {
    try {
      const user = await User.findOne({ where: { username } })
      if (!user) {
        return {
          status: "fail",
          message: "Invalid username or password",
          token: null,
        }
      }
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return {
          status: "fail",
          message: "Invalid username or password",
          token: null,
        }
      }
      const token = jwt.sign({ id: user.id }, ACCESS_TOKEN_SECRET, {expiresIn: "1h"})
      return {
        status: "success",
        message: "Login successful",
        token,
      }
    } catch (error) {
      throw error
    }
  },
}
