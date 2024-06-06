"use strict"
const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("m_users", [
      {
        username: "admintest",
        email: "admintest@bingle.com",
        password: await bcrypt.hash("bingle@24", 10),
        roleId: "admin",
        fullName: "User Admin Testing",
        address: "Dummy Address Admin",
        phoneNumber: "+6281345678910",
      },
      {
        username: "usertest",
        email: "usertest@email.com",
        password: await bcrypt.hash("jakarta@24", 10),
        roleId: "user",
        fullName: "User Customer Testing",
        address: "Dummy Address Customer",
        phoneNumber: "+6281390909090",
      },
      ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("m_users", null, {})
  },
}
