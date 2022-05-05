let express = require('express')
let router = express.Router()

router.get('/', function (req, res){
    res.send(
        '<h1>Contactanos</h1>' +
        '<p> ¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes. </P>'
    );
})

module.exports = router;