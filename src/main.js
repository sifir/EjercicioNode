let express = require('express');
let mainController = require('../controllers/mainControllers.js')
let router = express.Router();

router.get('/', mainController.listado)

module.exports = router;