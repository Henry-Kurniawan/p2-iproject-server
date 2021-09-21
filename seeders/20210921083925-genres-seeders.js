'use strict';

const fs = require("fs")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data/genre.json", "utf-8"))
    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Genres", data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Genres", null, {});
  }
};
