"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("autor", [
      { idautor: 1, nombre: "Danny" },
      { idautor: 2, nombre: "Johanna" },
      { idautor: 3, nombre: "Anna" },
      { idautor: 4, nombre: "LaRosa" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("autor", null, {});
  },
};

// await queryInterface.bulkInsert('autor',[{"idautor":1,"nombre":"Danny"},{"idautor":2,"nombre":"Johanna"}], {});
