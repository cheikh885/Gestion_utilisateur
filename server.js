const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3008
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())

app.use('/api', api)
app.get('/', function(req, res) {
    res.send('bonjour server chico')
})

app.listen(PORT, function() {
    console.log('serveur fonctionnant sur localhost' + PORT)
})