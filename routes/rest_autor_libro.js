var express = require('express');
var router = express.Router();
const autor_libro = require('../models').autor_libro;

router.get('/findAll/json', function(req, res, next) {  

  autor_libro.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});
  
module.exports = router;