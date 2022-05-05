let express = require('express');
let router = express.Router();

let preguntasJS = require('../data/faqs.json')

let preguntasString = ''

let preguntas = []
let respuestas = []

preguntasJS.faqs.forEach(function(element, index){

    preguntasString = preguntasString + 'Pregunta: ' + element.faq_title + '<br> Respuesta: ' + element.faq_answer + '<br><br>'

})

router.get('/', (req, res) => { res.send(
    '<h1>Preguntas Frecuentes</h1>' + 'Total de preguntas: ' + preguntasJS.total_faqs + '<br><br>' + preguntasString
)})

module.exports = router;