import path from 'path'
import express from 'express'

var app = express()

const staticDirectory = path.join(path.dirname(__dirname), 'client')
app.get('/admire/:id', function(req, res) {
  res.sendfile(path.join(staticDirectory, 'index.html'))
})
app.use(express.static(staticDirectory))

var PORT = 4060

export default function Main() {
  app.listen(PORT, function() {
    console.log('Non-Universal listening on port: ', PORT)
  })
}
