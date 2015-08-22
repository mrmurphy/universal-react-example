import React from 'react/addons'
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { RouteHandler, State } from 'react-router'
import Color from 'color'
import Helmet from 'react-helmet'
import { find } from 'lodash'

import colors from '../../common/colors'
import Header from '../../common/header'
import images from '../grid/images'

var STYLES = {
  appWrapper: {
    background: colors.c4,
    height: '100%'
  }
}

var HandlerPositionWrapper = React.createClass({
  render() {
    return (
      <div style={{width: '100%', height: '100%', position: 'relative'}}>{this.props.children}</div>
    )
  }
})

var MainLayout = React.createClass({
  mixins: [State],

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    const title = 'Admirable ~ ＼(^o^)／ ~'
    const description = 'A place for sharing your admirable shots'
    const id = this.getParams().id
    const image = find(images, {id})
    const routeName = this.context.router.getCurrentPath()
    return (
      <div style={STYLES.appWrapper}>
        <Helmet
          title={title}
          meta={[
            {'property': 'og:type', 'content': 'website'},
            {'property': 'og:description', 'content': 'A place for photographers to invite admiration'},
            {'property': 'og:title', 'content': 'Admirable'}
          ]}
        />
        <Header text={image ? image.name : '~ Admirable ~'}/>
        <TransitionGroup component={HandlerPositionWrapper} transitionName="page">
          <RouteHandler routeParams={this.getParams()} key={routeName}/>
        </TransitionGroup>
      </div>
    )
  }
})

export default MainLayout
