let express = require('express');
let router = express.Router();

let moviesJS = require('../data/movies.json')

let pelisInfo = ''
moviesJS.movies.forEach(function(element) {
    pelisInfo = pelisInfo + '<br> Titulo : ' + element.title + ' <br> Reseña: ' + element.overview + '<br><br>'
})

router.get('/',(req, res) =>{
    res.send(
        '<h1>En cartelera</h1>' +
        'Total de peliculas: ' + moviesJS.total_movies + '<br></br>' +
        pelisInfo
    )
})

module.exports = router;