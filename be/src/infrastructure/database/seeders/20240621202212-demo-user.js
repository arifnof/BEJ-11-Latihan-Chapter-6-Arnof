"use strict"
const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
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
        bio: "standard account",
        full_name: "Standard Account Testing",
        is_verified: true,
        is_premium: false,
        phone_number: "+6281390909090",
      },
      ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
  },
}
