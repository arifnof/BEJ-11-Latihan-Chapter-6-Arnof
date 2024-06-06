const authServices = require("../services/authServices")

const register = async (req, res) => {
  try {
    const userData = req.body
    const user = await authServices.create(userData)
    res.helper.success(user, "Register successful")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error logging in")
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const { status, message, token } = await authServices.login(username,password)
    if (status == "success") {
      res.helper.success({ token }, message)
    }else{
      return res.helper.validationError("Unathorized", message, 401)
    }
  } catch (error) {
    throw error
    // res.helper.error(error, "Error logging in")
  }
}

const loginStatus = async (req, res) => {
  try {
    const userId = req.userId
    res.helper.success({ userId : userId }, "Logged in")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error checking login status")
  }
}

module.exports = { register, login, loginStatus }
