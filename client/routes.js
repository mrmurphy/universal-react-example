import React from 'react'
import Router, { Route } from 'react-router'

import MainLayout from './pieces/layouts/main'
import Grid from './pieces/grid/index'
import ImageDetail from './pieces/image-detail/index'

var routes = (
  <Route handler={MainLayout}>
    <Route name="grid" path='/' handler={Grid}/>
    <Route name="admire" path='/admire/:id' handler={ImageDetail}/>
  </Route>
)

export default routes
