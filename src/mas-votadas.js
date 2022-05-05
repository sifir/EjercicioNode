let express = require('express');
let router = express.Router();

let moviesJS = require('../data/movies.json')

let pelisMasVotadasString = ''
let pelisPuntaje = []
let i = 0

moviesJS.movies.forEach(function(element, index){
    if (element.vote_average >= 7.0) {
        pelisMasVotadasString = pelisMasVotadasString + 'Titulo: ' + element.title + '<br>' + 'Rating: ' + element.vote_average + '<br>' + 'Rese;a: ' + element.overview + '<br><br>';
        pelisPuntaje[i] = element.vote_average
        i++
    }
})

function Average(array) {
    var i = 0, sum = 0, cantidad = array.length
    while (i < cantidad){
        sum = sum + array[i++]
    }
    return sum / cantidad;
}
var pelisAverage = Average(pelisPuntaje)

router.get('/',(req, res) =>{
    res.send(
        '<h1> Mas votadas </h1>' +
        'Total de peliculas: ' + pelisPuntaje.length + '<br>' +
        'Raiting promedio :' + pelisAverage + '<br>' +
        '<h3>Listado de Peliculas: </h3>' + pelisMasVotadasString        
    )
})

module.exports = router;