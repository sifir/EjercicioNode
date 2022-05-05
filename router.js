let express = require ('express')
let rutasMain = require ('./src/main.js')
let rutasContacto = require ('./src/contacto.js')
let rutasEnCartelera = require ('./src/en-cartelera.js')
let rutasMasVotadas = require ('./src/mas-votadas.js')
let rutasPreguntasFrecuentes = require ('./src/preguntas-frecuentes.js')
let rutasSucursales = require ('./src/sucursales')

let router = express.Router()

router.use('/', rutasMain)

router.use('/contacto', rutasContacto)

router.use('/en-cartelera', rutasEnCartelera)

router.use('/mas-votadas', rutasMasVotadas)

router.use('/preguntas-frecuentes', rutasPreguntasFrecuentes)

router.use('/sucursales', rutasSucursales)

module.exports = router;