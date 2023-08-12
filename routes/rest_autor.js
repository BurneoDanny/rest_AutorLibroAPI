var express = require('express');
var router = express.Router();
const autor = require('../models').autor;

router.get('/findAll/json', function(req, res, next) { 
  autor.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
      // The createdAt field will contain the timestamp representing the moment of creation, and the updatedAt will contain the timestamp of the latest update. Cada model/clase tiene estas propiedades por lo que aqui las quitamos.
  })  
  .then(resultado => {  
      res.json(resultado);  
      
  })  
  .catch(error => res.status(400).send(error)) 

});
  
module.exports = router;
