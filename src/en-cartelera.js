let express = require('express');
let router = express.Router();
let enCarteleraController = require('../controllers/en-carteleraControllers')

router.get('/', enCarteleraController.listado)

module.exports = router;