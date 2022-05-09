let express = require('express');
let router = express.Router();
let sucursalesController = require('../controllers/sucursalesControllers')

router.get('/', sucursalesController.listado)

module.exports = router;