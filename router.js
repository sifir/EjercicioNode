let express = require ('express')
let router = express.Router()

let rutasMain = require ('./src/main.js')
router.use('/', rutasMain)

let rutasContacto = require ('./src/contacto.js')
router.use('/contacto', rutasContacto)

let rutasEnCartelera = require ('./src/en-cartelera.js')
router.use('/en-cartelera', rutasEnCartelera)

let rutasMasVotadas = require ('./src/mas-votadas.js')
router.use('/mas-votadas', rutasMasVotadas)

let rutasPreguntasFrecuentes = require ('./src/preguntas-frecuentes.js')
router.use('/preguntas-frecuentes', rutasPreguntasFrecuentes)

let rutasSucursales = require ('./src/sucursales')
router.use('/sucursales', rutasSucursales)

module.exports = router;