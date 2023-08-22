"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "autor_libro",
      [
        { idautor_libro: 1, autor_idautor: 1, libro_idlibro: 1 },
        { idautor_libro: 2, autor_idautor: 1, libro_idlibro: 2 },
        { idautor_libro: 3, autor_idautor: 1, libro_idlibro: 3 },
        { idautor_libro: 4, autor_idautor: 1, libro_idlibro: 4 },

        { idautor_libro: 5, autor_idautor: 2, libro_idlibro: 5 },
        { idautor_libro: 6, autor_idautor: 2, libro_idlibro: 6 },
        { idautor_libro: 7, autor_idautor: 2, libro_idlibro: 7 },
        { idautor_libro: 8, autor_idautor: 2, libro_idlibro: 8 },

        { idautor_libro: 9, autor_idautor: 3, libro_idlibro: 9 },
        { idautor_libro: 10, autor_idautor: 3, libro_idlibro: 10 },
        { idautor_libro: 11, autor_idautor: 3, libro_idlibro: 11 },
        { idautor_libro: 12, autor_idautor: 3, libro_idlibro: 12 },

        { idautor_libro: 13, autor_idautor: 4, libro_idlibro: 13},
        { idautor_libro: 14, autor_idautor: 4, libro_idlibro: 14 },
        { idautor_libro: 15, autor_idautor: 4, libro_idlibro: 15 },

        { idautor_libro: 16, autor_idautor: 1, libro_idlibro: 16 },
        { idautor_libro: 17, autor_idautor: 1, libro_idlibro: 17 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("autor_libro", null, {});
  },
};

// await queryInterface.bulkInsert('autor_libro', [{"idautor_libro":1,"autor_idautor":1,"libro_idlibro":1},{"idautor_libro":2,"autor_idautor":2,"libro_idlibro":2}], {});
