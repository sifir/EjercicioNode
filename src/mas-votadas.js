let express = require('express');
let router = express.Router();
let masVotadasController = require('../controllers/mas-votadasControllers')

router.get('/', masVotadasController.listado)

module.exports = router;