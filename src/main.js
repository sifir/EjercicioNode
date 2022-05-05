const e = require('express');
let moviesJS = require('../data/movies.json')
let express = require('express');
let router = express.Router();

let listadoPelis = ''

moviesJS.movies.forEach(function(element, index){
    listadoPelis += element.title + '<br>'
})

router.get('/', (req, res) =>{
    res.send(
        '<h1> Bienvenidos a DH Movies </h1>'+
        '<h2> El mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. </h2>' +
        '<p> Total de peliculas en cartelera: ' + moviesJS.total_movies + '</p>' +
        'Listado de peliculas: <br>' + listadoPelis + '<br><br>' +
        'Recorda que podes visitar las secciones: <br>' +
        '<a href="/en-cartelera"> En cartelera </a><br>' +
        '<a href="/mas-votadas">Mas votadas </a><br>' +
        '<a href="/sucursales">Sucursales </a><br>' +
        '<a href="/contacto">Contacto </a><br>' +
        '<a href="/preguntas-frecuentes">Preguntas frecuentes</a>'
    )
})

module.exports = router;