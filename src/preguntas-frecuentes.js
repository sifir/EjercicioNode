let express = require('express');
let preguntasFrecuentesController = require('../controllers/preguntas-frecuentesControllers')
let router = express.Router();

router.get('/', preguntasFrecuentesController.listado)

module.exports = router;