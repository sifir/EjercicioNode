let express = require('express');
let theatersJS = require('../data/theaters.json')
let router = express.Router();

let listadoString = ''
theatersJS.theaters.forEach(function(element, index) {
    listadoString += '<br> Nombre: ' + element.name + '<br> Direccion: ' + element.address + '<br> Descripcion: ' + element.description + '<br><br>'
});

router.get('/',(req, res) =>{
    res.send(
        '<h1>Nuestras Salas</h1>' +
        '<h3>Total de Salas: ' + theatersJS.total_theaters + '</h3>' +
        '<h2>Listado de Salas: </h2>' + listadoString    
    )
})

module.exports = router;