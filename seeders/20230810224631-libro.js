'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('libro', [{idlibro:1,nombre:"Express Sequelize",editorial:"oNet",anio:2020},{idlibro:2,nombre:"Just Angular",editorial:"oNet",anio:2023}], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('libro', null, {});

  }
};

// await queryInterface.bulkInsert('libro', [{"idlibro":1,"nombre":"Express Sequelize","editorial":"oNet","anio":2020},{"idlibro":2,"nombre":"Just Angular","editorial":"oNet","anio":2023}], {});
