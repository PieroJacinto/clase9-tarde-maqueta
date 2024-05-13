var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController')

/* GET home page. */
router.get('/detail/:id', movieController.show);
router.get('/new', movieController.new);
router.get('/recomended', movieController.recomended);
router.get('/search', movieController.search);
router.get('/create', movieController.create);


// ACA ABAJO VAN LAS RUTAS PAR LOS FORMULARIOS


module.exports = router;
