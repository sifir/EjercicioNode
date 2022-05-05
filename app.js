let express = require ('express')
let app = express()

app.listen(3000,() => {
    console.log('Servidor corriendo');
})

let router = require('./router')
app.use('/',router)