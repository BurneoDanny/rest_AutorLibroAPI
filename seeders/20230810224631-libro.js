"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("libro", [
      {
        idlibro: 1,
        nombre: "Express Sequelize",
        editorial: "oNet",
        anio: 2017,
      },
      { idlibro: 2, nombre: "Just Angular", editorial: "oNet", anio: 2016 },

      { idlibro: 3, nombre: "Html", editorial: "oNet", anio: 2011 },
      {
        idlibro: 4,
        nombre: "Css,Scss and Sass",
        editorial: "oNet",
        anio: 2012,
      },
      {
        idlibro: 5,
        nombre: "Javascript and the browser",
        editorial: "oNet",
        anio: 2013,
      },
      { idlibro: 6, nombre: "The NodeJS Book", editorial: "oNet", anio: 2018 },
      { idlibro: 7, nombre: "Just React", editorial: "oNet", anio: 2023 },
      { idlibro: 8, nombre: "MySQL", editorial: "oNet", anio: 2014 },
      { idlibro: 9, nombre: "Hack Security", editorial: "oNet", anio: 2015 },
      { idlibro: 10, nombre: "Deployment", editorial: "oNet", anio: 2016 },
      { idlibro: 11, nombre: "Github", editorial: "oNet", anio: 2017 },
      { idlibro: 12, nombre: "Deployment", editorial: "oNet", anio: 2018 },
      {
        idlibro: 13,
        nombre: "Sequelize vs Mysql2",
        editorial: "oNet",
        anio: 2019,
      },
      { idlibro: 14, nombre: "APIs", editorial: "oNet", anio: 2020 },
      { idlibro: 15, nombre: "Firebase", editorial: "oNet", anio: 2021 },
      { idlibro: 16, nombre: "Ionic", editorial: "oNet", anio: 2022 },
      { idlibro: 17, nombre: "IA", editorial: "oNet", anio: 2023 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("libro", null, {});
  },
};

// await queryInterface.bulkInsert('libro', [{"idlibro":1,"nombre":"Express Sequelize","editorial":"oNet","anio":2020},{"idlibro":2,"nombre":"Just Angular","editorial":"oNet","anio":2023}], {});
