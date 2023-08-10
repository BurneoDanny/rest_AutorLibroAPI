'use strict';
const autor_libro = require('../models').autor_libro;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await autor_libro.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('autor_libro');
  }
};