let enCarteleraController = {

    listado: (req, res) => {

        let moviesJS = require('../data/movies.json')
        let pelisInfo = ''
        moviesJS.movies.forEach(function(element) {
        pelisInfo += '<br> Titulo : ' + element.title + ' <br> Reseña: ' + element.overview + '<br><br>'
        })

        res.send(
            '<h1>En cartelera</h1>' +
            'Total de peliculas: ' + moviesJS.total_movies + '<br></br>' +
            pelisInfo
        )
    }
}

module.exports = enCarteleraController