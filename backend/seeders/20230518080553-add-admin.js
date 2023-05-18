"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Roman",
        last_name: "Romanov",
        email: "agentromanov@marvel.com",
        role: "admin",
        password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", {
      email: "agentromanov@marvel.com",
    });
  },
};