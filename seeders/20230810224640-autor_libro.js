'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('autor_libro', [{idautor_libro:1,autor_idautor:1,libro_idlibro:1},{idautor_libro:2,autor_idautor:2,libro_idlibro:2}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autor_libro', null, {});

  }
};

// await queryInterface.bulkInsert('autor_libro', [{"idautor_libro":1,"autor_idautor":1,"libro_idlibro":1},{"idautor_libro":2,"autor_idautor":2,"libro_idlibro":2}], {});
