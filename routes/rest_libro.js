var express = require('express');
var router = express.Router();
const libro = require('../models').libro;

router.get('/findAll/json', function(req, res, next) {  

  libro.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});
  
module.exports = router;