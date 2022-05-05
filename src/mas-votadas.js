let express = require('express');
let moviesJS = require('../data/movies.json')
let router = express.Router();

let pelisMasVotadasString = ''
let pelisPuntaje = []
let i = 0

moviesJS.movies.forEach(function(element){
    if (element.vote_average >= 7.0) {
        pelisMasVotadasString += 'Titulo: ' + element.title + '<br>' + 'Rating: ' + element.vote_average + '<br>' + 'Rese;a: ' + element.overview + '<br><br>';
        pelisPuntaje[i] = element.vote_average
        i++
    }
})

let sumaPuntaje = 0
for (let index = 0; index < pelisPuntaje.length; index++) {
    sumaPuntaje += pelisPuntaje[index]    
}
let pelisAverage = sumaPuntaje / pelisPuntaje.length

router.get('/',(req, res) =>{
    res.send(
        '<h1> Mas votadas </h1>' +
        'Total de peliculas: ' + pelisPuntaje.length + '<br>' +
        'Raiting promedio :' + pelisAverage + '<br>' +
        '<h3>Listado de Peliculas: </h3>' + pelisMasVotadasString        
    )
})

module.exports = router;