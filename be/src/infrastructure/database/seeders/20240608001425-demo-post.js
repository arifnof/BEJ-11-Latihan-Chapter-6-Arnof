"use strict"
const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("posts", [
      {
        user_id: 1,
        description: "First post on instaglam",
      },
      {
        user_id: 1,
        description: "Second post on instaglam, this is awesome",
      },
      {
        user_id: 2,
        description: "This is my world",
      },
      {
        user_id: 2,
        description: "Update on my lucky day",
      },
      ], {})
    await queryInterface.bulkInsert("medias", [
      {
        post_id: 1,
        media_url: "https://picsum.photos/id/0/300/300",
        media_type: "image",
        caption: "Alejandro Escamilla",
      },
      {
        post_id: 2,
        media_url: "https://picsum.photos/id/1/300/300",
        media_type: "image",
        caption: "Computers",
      },
      {
        post_id: 3,
        media_url: "https://picsum.photos/id/2/300/300",
        media_type: "image",
        caption: "Auto caption",
      },
      {
        post_id: 4,
        media_url: "https://picsum.photos/id/237/300/300",
        media_type: "image",
        caption: "Pets",
      },
      ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {})
    await queryInterface.bulkDelete("medias", null, {})
  },
}
