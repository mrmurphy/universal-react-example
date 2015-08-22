import React, { Component } from 'react'

import colors from './colors'

var STYLES = {
  navBar: {
    textAlign: 'center',
    background: colors.c1,
    fontFamily: 'Raleway',
    textShadow: '1px 1px 0px rgba(0,0,0,.1)',
    boxShadow: '0 1em 2em rgba(0,0,0,.4)',
    position: 'relative',
    zIndex: 10000
  },
  headerWrapper: {
    color: colors.c4,
    padding: '2rem'
  },
  headerBorder1: {
    height: '.5em',
    background: colors.c2
  },
  headerBorder2: {
    height: '.5em',
    background: colors.c3
  },
  title: {
    fontWeight: '300',
    margin: '0'
  },
}

export default class Header extends Component {
  render() {
    return (
      <div style={STYLES.navBar}>
        <div style={STYLES.headerWrapper}>
          <h1 style={STYLES.title}>{this.props.text}</h1>
        </div>
        <div style={STYLES.headerBorder1}></div>
        <div style={STYLES.headerBorder2}></div>
      </div>
    )
  }
}

Header.displayName = 'Header'
