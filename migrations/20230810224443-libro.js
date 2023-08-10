'use strict';
const libro = require('../models').libro;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await libro.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('libro');
  }
};
