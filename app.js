let express = require ('express')
let router = require('./router')

let app = express()

const port = 3000

app.listen(port ,() => {
    console.log('Servidor corriendo en el puerto ' + port);
})

app.use('/', router)