import React, { Component } from 'react'
import Color from 'color'

var colors = {
  c1: '#f9ed69',
  c2: '#f08a5d',
  c3: '#b83b5e',
  c4: '#6a2c70'
}

var STYLES = {
  navBar: {
    textAlign: 'center',
    background: colors.c1,
    marginBottom: '5vh',
    fontFamily: 'Raleway',
    textShadow: '1px 1px 0px rgba(0,0,0,.3)',
    boxShadow: '0 1em 2em rgba(0,0,0,.1)'
  },
  headerWrapper: {
    color: colors.c4,
    padding: '2rem'
  },
  headerBorder1: {
    height: '1em',
    background: colors.c2
  },
  headerBorder2: {
    height: '1em',
    background: colors.c3
  },
  title: {
    fontWeight: '300',
    margin: '0'
  },
  imgWrapper: {
    margin: '0 auto',
    marginBottom: '1em',
    textAlign: 'center'
  },
  img: {
    borderRadius: '.4em',
    boxShadow: '0 0 2em rgba(0,0,0,.2)',
    width: '100%'
  },
  contentWrapper: {
    padding: '0 1em',
    maxWidth: '900px',
    margin: '0 auto'
  },
  text: {
    fontSize: '2.5em',
    color: Color(colors.c4).blacken(.15).rgbString(),
    textShadow: '1px 1px 0px rgba(255,255,255,.07), -1px -1px 0px rgba(0,0,0,.19)',
    fontWeight: 900,
    textAlign: 'center',
    marginTop: '5vh'
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <div style={STYLES.navBar}>
          <div style={STYLES.headerWrapper}>
            <h1 style={STYLES.title}>~ Buoyant Beauties ~</h1>
          </div>
          <div style={STYLES.headerBorder1}></div>
          <div style={STYLES.headerBorder2}></div>
        </div>
        <div style={STYLES.contentWrapper}>
          <div style={STYLES.imgWrapper}>
            <img src="img/balloons.jpeg" style={STYLES.img} alt="Hot Air Balloons"/>
          </div>
          <p style={STYLES.text}>A nice day for swimming through the air.</p>
        </div>
      </div>
    )
  }
}

function render() {
  document.title = "Buoyant Beauties on Admirable ~ ＼(^o^)／ ~"
  document.body.style.background = colors.c4
  React.render(<App />, document.getElementById('app'))
}
render()
