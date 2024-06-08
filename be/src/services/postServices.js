const express = require("express")

const {
  Post,
  Media,
  User,
  sequelize,
} = require("../infrastructure/database/models")

module.exports = {
  get: async () => {
    try {
      const posts = await Post.findAll({
        attributes: {
          exclude: ["user_id", "updated_at", "deleted_at"],
        },
        include: [
          {
            model: User,
            as: "user",
            required: true,
            attributes: {
              exclude: ["password", "updated_at", "deleted_at"],
            },
          },
          {
            model: Media,
            as: "media",
            required: true,
            attributes: {
              exclude: ["updated_at", "deleted_at"],
            },
          },
        ],
      })
      return posts
    } catch (error) {
      throw error
    }
  },
  getById: async (id) => {
    try {
      const post = await Post.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: "user",
            required: true,
            attributes: {
              exclude: ["password", "updated_at", "deleted_at"],
            },
          },
          {
            model: Media,
            as: "media",
            required: true,
            attributes: {
              exclude: ["updated_at", "deleted_at"],
            },
          },
        ],
        attributes: {
          exclude: ["user_id", "updated_at", "deleted_at"],
        },
      })
      return post
    } catch (error) {
      throw error
    }
  },
  getFeed: async (userId) => {
    try {
      const feeds = await Post.findAll({
        where: { user_id: userId },
        include: [
          {
            model: User,
            as: "user",
            required: true,
            attributes: {
              exclude: ["password", "updated_at", "deleted_at"],
            },
          },
          {
            model: Media,
            as: "media",
            required: true,
            attributes: {
              exclude: ["updated_at", "deleted_at"],
            },
          },
        ],
        attributes: {
          exclude: ["user_id", "updated_at", "deleted_at"],
        },
      })
      return feeds
    } catch (error) {
      throw error
    }
  },
  /*
  create: async (postData) => {
    try {
      let data = await Post.create(postData)
      return { id: data.id }
    } catch (error) {
      throw error
    }
  },
  update: async (id, postData) => {
    try {
      let data = await Post.update(postData, { where: { id } })
      return { status: "success", id: data.id }
    } catch (error) {
      throw error
    }
  },
  destroy: async (id) => {
    try {
      let data = await Post.destroy({ where: { id } })
      return { id: data.id }
    } catch (error) {
      throw error
    }
  },
  updateLike: async (id, postLike) => {
    try {
      let data = await Post.update({ postLike }, { where: { id } })
      return { status: "success", id: data.id }
    } catch (error) {
      throw error
    }
  },
  getMedias: async (post_id) => {
    try {
      const post = await Media.findAll({
        where: { post_id },
        attributes: {
          exclude: ["updated_at", "deleted_at"],
        },
      })
      return post
    } catch (error) {
      throw error
    }
  },
  createMedia: async (post_id, postMediaData) => {
    const transaction = await sequelize.transaction()
    try {
      let media = await Media.findOne(
        { where: { id: postMediaData.mediaId } },
        { transaction }
      )
      if (!media) {
        throw new Error("Media not found")
      }
      postMediaData.post_id = post_id
      let data = await Media.create(postMediaData, { transaction })
      await transaction.commit()
      return { status: "success", id: data.id }
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  destroyMedia: async (post_id, id) => {
    const transaction = await sequelize.transaction()
    try {
      let data = await Media.destroy({ where: { id, post_id } })
      await transaction.commit()
      return { status: "success", id }
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  */
}
