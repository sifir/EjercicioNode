let preguntasFrecuentesController = {

    listado: (req, res) => {

        let preguntasJS = require('../data/faqs.json')
        let preguntasString = ''

        preguntasJS.faqs.forEach(function(element, index){
            preguntasString = preguntasString + 'Pregunta: ' + element.faq_title + '<br> Respuesta: ' + element.faq_answer + '<br><br>'
        })

        res.send(
            '<h1>Preguntas Frecuentes</h1>' + 'Total de preguntas: ' + preguntasJS.total_faqs + '<br><br>' + preguntasString
        )

    }

}

module.exports = preguntasFrecuentesController