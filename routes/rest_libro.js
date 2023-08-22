var express = require("express");
var router = express.Router();
const libro = require("../models").libro;
const autor_libro = require("../models").autor_libro;
const { Op } = require("sequelize");

router.get("/findAll/json", function (req, res, next) {
  libro
    .findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] },
    })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/findBookByAuthor/:id/json", function (req, res, next) {
  const autorId = parseInt(req.params.id);
  autor_libro
    .findAll({
      attributes: { exclude: ["idautor_libro", "updatedAt", "createdAt"] },
      where: {
        autor_idautor: autorId,
      },
    })
    .then((resultado) => {
      if (Object.keys(resultado).length != 0) {
        let keys = resultado.map((element) => element.libro_idlibro);
        libro
          .findAll({
            attributes: { exclude: ["updatedAt", "createdAt"] },
            where: {
              idlibro: {
                [Op.or]: keys,
              },
            },
          })
          .then((resultado) => {
            res.json(resultado);
          })
          .catch((error) => res.status(400).send(error));
      } else {
        res
          .status(404)
          .json({ error: "No existe registro con el identificador " + autorId });
      }
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
