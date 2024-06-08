"use strict"
const bcrypt = require("bcryptjs")
const follower = require("../models/follower")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users",[
        {
          username: "arnof",
          email: "arnof@instaglam.com",
          password: await bcrypt.hash("instaglam@24", 10),
          bio: "premium account",
          full_name: "Premium Account Testing",
          is_verified: true,
          is_premium: true,
          phone_number: "+6281345678910",
        },
        {
          username: "usertest",
          email: "usertest@email.com",
          password: await bcrypt.hash("jakarta@24", 10),
          bio: "standard account 1",
          full_name: "Standard Account 1 Testing",
          is_verified: true,
          is_premium: false,
          phone_number: "+6281390909090",
        },
        {
          username: "usertest2",
          email: "usertest2@email.com",
          password: await bcrypt.hash("jakarta@24", 10),
          bio: "standard account 2",
          full_name: "Standard Account 2 Testing",
          is_verified: true,
          is_premium: false,
          phone_number: "+6281390909090",
        },
      ],{}
    )
    await queryInterface.bulkInsert("followers",[
        {
          user_id: 1,
          follower_id: 2,
        },
        {
          user_id: 1,
          follower_id: 3,
        },
      ],{}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
    await queryInterface.bulkDelete("followers", null, {})
  },
}
