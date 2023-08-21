var express = require('express');
var router = express.Router();
const autor = require('../models').autor;


router.get('/findAll/json', (req, res) => {
  autor.findAll({attributes: { exclude: ["updatedAt", "createdAt"] } ,})
    .then(autores => {
      res.status(200).json(autores);
    })
    .catch(error => {
      res.status(400).json({ error: 'Error al obtener los autores' });
    });
});

// Obtener un autor por ID
router.get('/findById/:id/json', (req, res) => {
  const autorId = req.params.id;

  autor.findByPk(autorId)
    .then(autor => {
      if (autor) {
        res.status(200).json(autor);
      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al obtener el autor' });
    });
});

// Crear un nuevo autor
router.post('/save', (req, res) => {
  const { nombre } = req.body;
  if(nombre != null){
    autor.create({ nombre })
    .then(autor => {
      res.status(201).json(autor);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear el autor' });
    });
  }
});

// Actualizar un autor por ID
router.put('/update/:id', (req, res) => {
  const autorId = req.params.id;
  const { nombre } = req.body;

  autor.findByPk(autorId)
    .then(autor => {
      if (autor) {
        autor.update({ nombre })
        .then(updatedAutor => {
          res.status(201).json(updatedAutor);
        })
        .catch(error => {
          res.status(500).json({ error: 'Error al actualizar el autor' });
        });
      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => {
      res.status(400).json({ error: 'Error al obtener el autor' });
    });
});

// Eliminar un autor por ID
router.delete('/delete/:id', (req, res) => {
  const autorId = req.params.id;

  autor.findByPk(autorId)
    .then(autor => {
      if (autor) {
        autor.destroy()
        .then(() => {
          res.status(204).send();
        })
        .catch(error => {
          res.status(500).json({ error: 'Error al eliminar el autor' });
        });
      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => {
      res.status(400).json({ error: 'Error al obtener el autor' });
    });
});
  
module.exports = router;
