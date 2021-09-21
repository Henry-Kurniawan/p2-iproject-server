'use strict';
const { hashPassword } = require("../helpers/bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data= [
      {
        email: "henry@mail.com",
        password: hashPassword("11111"),
        trelloListId: "6149645c32aaeb8a80231b48",
        phoneNumber: "08189982727",
        address: "Jakarta"
      },
      {
        email: "kurni@mail.com",
        password: hashPassword("11111"),
        trelloListId: "614971e13da5d845b40014ad",
        phoneNumber: "08176659929",
        address: "Bandung"
      }
    ]

    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert("Users", data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
