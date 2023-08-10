'use strict';
const autor = require('../models').autor;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await autor.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('autor');
  }
};
