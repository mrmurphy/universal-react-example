import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import Helmet from 'react-helmet'
import Router from 'react-router'

import routes from '../client/routes'

const staticDirectory = path.join(path.dirname(__dirname), 'client')
const template = fs.readFileSync(path.join(staticDirectory, 'index.html'), {encoding: 'utf-8'})
var app = express()

function renderApp(req, res) {
  Router.run(routes, req.path, Root => {
    var rendered = React.renderToString(<Root />)
    var head = Helmet.rewind()
    var interpolated = template.replace('{{ReplaceMe}}', rendered)
    interpolated = interpolated.replace('<title>Admirable ~ ＼(^o^)／ ~</title>', `<title>${head.title}</title>`)
    interpolated = interpolated.replace('</head>', head.meta + '\n</head>')
    res.send(interpolated)
  })
}

app.get('/', renderApp)
app.get('/admire/:image', renderApp)

app.use(express.static(staticDirectory))

var PORT = 4050

export default function Main() {
  app.listen(PORT, function() {
    console.log('Listening on port: ', PORT)
  })
}
