let express = require('express')
let app = express()

let bodyParser = require('body-parser')

app.use(bodyParser.json())

let router = require('./router')

app.get('/', function (req, res) {
    res.send('api')
})

app.get('/notes', router.getAllNotes)

app.post('/notes', router.addNote)

app.get('/note/:id', router.getById)

app.delete('/note/:id', router.deleteById)

app.listen(5000, function () {
    console.log('http://localhost:5000')
})