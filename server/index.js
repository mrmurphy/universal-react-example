var path = require('path')
var express = require('express')

var app = express()

var staticDirectory = path.join(path.dirname(__dirname), 'client')
app.use(express.static(staticDirectory))

var PORT = 4040
app.listen(PORT, function() {
  console.log('Listening on port: ', PORT)
})
