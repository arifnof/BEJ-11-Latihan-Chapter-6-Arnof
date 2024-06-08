const postServices = require("../services/postServices")

const create = async (req, res) => {
  try {
    const postData = req.body
    const post = await postServices.create(postData)
    res.helper.success(post, "Post created")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error creating data")
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id
    const { status } = await postServices.update(id, req.body)
    if (status == "success") {
      res.helper.success({ id }, "Post updated")
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
    const post = await postServices.get()
    res.helper.success(post, "Post list")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const getById = async (req, res) => {
  try {
    const id = req.params.id
    const post = await postServices.getById(id)
    res.helper.success(post, "Post")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const destroy = async (req, res) => {
  try {
    const id = req.params.id
    const post = await postServices.destroy(id)
    res.helper.success({ id: post.id }, "Data deleted")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error deleting data")
  }
}

const updateLike = async (req, res) => {
  try {
    const id = req.params.id
    const postLike = req.body.postLike
    const { status } = await postServices.updateLike(id, postLike)
    if (status == "success") {
      res.helper.success({ id }, "Post updated")
    }else{
      return res.helper.validationError("Not Found", message, 404)
    }
  } catch (error) {
    throw error
    // res.helper.error(error, "Error updating data")
  }
}

const getMedia = async (req, res) => {
  try {
    const postId = req.params.postId
    const postMedias = await postServices.getMedias(postId)
    res.helper.success(postMedias, "PostMedias")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

const createMedia = async (req, res) => {
  try {
    const postId = req.params.postId
    const postMediaData = req.body
    const post = await postServices.createMedia(postId, postMediaData)
    res.helper.success(post, "Post Media added")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error creating data")
  }
}

const destroyMedia = async (req, res) => {
  try {
    const postId = req.params.postId
    const id = req.params.id
    const postMedia = await postServices.destroyMedia(postId, id)
    res.helper.success({ id: postMedia.id }, "Data deleted")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error deleting data")
  }
}

const getFeed = async (req, res) => {
  try {
    const userId = req.userId
    const post = await postServices.getFeed(userId)
    res.helper.success(post, "User Feed")
  } catch (error) {
    throw error
    // res.helper.error(error.message, "Error getting data")
  }
}

module.exports = { create, update, get, getById, destroy, updateLike, getMedia, createMedia, destroyMedia, getFeed }
