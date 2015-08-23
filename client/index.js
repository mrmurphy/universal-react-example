import React, { Component } from 'react'
import Router from 'react-router'

import routes from './routes'

var locationType = Router.HistoryLocation
if (location.host.indexOf('non-universal') != -1) {
  locationType = Router.HashLocation
}
Router.run(routes, locationType, Root => {
  React.render(<Root />, document.getElementById('app'))
})
