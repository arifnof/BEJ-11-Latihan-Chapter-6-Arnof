const userServices = require("../services/userServices")

const create = async (req, res) => {
  try {
    const userData = req.body
    const user = await userServices.create(userData)
    res.helper.success(user, "User created")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error creating data")
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const { status } = await userServices.update(id, req.body)
    if (status == "success") {
      res.helper.success({ id }, "User updated")
    }else{
      return res.helper.validationError("Not Found", message, 404)
    }
  } catch (error) {
    throw error
    // res.helper.error(error, "Error updating data")
  }
}

const get = async (req, res) => {
  try {
    const user = await userServices.get()
    res.helper.success(user, "User list")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const getById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await userServices.getById(id)
    res.helper.success(user, "User")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const getPost = async (req, res) => {
  try {
    const id = req.params.id
    const user = await userServices.getPost(id)
    res.helper.success(user, "User")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const destroy = async (req, res) => {
  try {
    const id = req.params.id
    const user = await userServices.destroy(id)
    res.helper.success({ id: user.id }, "Data deleted")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error deleting data")
  }
}

module.exports = { create, update, get, getById, getPost, destroy }
