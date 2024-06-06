const express = require("express")
const bcrypt = require("bcryptjs")

const { User, Follower } = require("../infrastructure/database/models")

module.exports = {
  get: async () => {
    try {
      const users = await User.findAll({
        attributes: {
            exclude: [
                'password',
                'updated_at',
                'deleted_at'
            ]
        }})
      return users
    } catch (error) {
      throw error
    }
  },
  getById: async (id) => {
    try {
      const user = await User.findOne({ where: { id },
        attributes: {
            exclude: [
                'password',
                'updated_at',
                'deleted_at'
            ]
        }})
      return user
    } catch (error) {
      throw error
    }
  },
  create: async (userData) => {
    try {
      userData.password = await bcrypt.hash(userData.password, 10)
      let data = await User.create(userData)
      return { id: data.id }
    } catch (error) {
      throw error
    }
  },
  update: async (id, userData) => {
    try {
      userData.password = await bcrypt.hash(userData.password, 10)
      let data = await User.update(userData, { where : { id } } )
      return { status: "success", id: data.id }
    } catch (error) {
      throw error
    }
  },
  updateFollower: async (id, userData) => {
    try {
      let data = await User.update(userData, { where : { id } } )
      return { status: "success", id: data.id }
    } catch (error) {
      throw error
    }
  },
  destroy: async (id) => {
    try {
      let data = await User.destroy({ where : { id } })
      return { id: data.id }
    } catch (error) {
      throw error
    }
  },
}
