import React, { Component } from 'react'
import Color from 'color'
import Helmet from 'react-helmet'
import { find } from 'lodash'

import images from '../grid/images'
import colors from '../../common/colors'

var STYLES = {
  imgWrapper: {
    margin: '0 auto',
    marginBottom: '1em',
    textAlign: 'center'
  },
  img: {
    borderRadius: '.4em',
    boxShadow: '0 0 2em rgba(0,0,0,.2)',
    width: '100%',
    marginTop: '5vh'
  },
  contentWrapper: {
    padding: '0 1em',
    maxWidth: '900px',
    margin: '0 auto'
  },
  text: {
    fontSize: '2.5em',
    color: Color(colors.c4).blacken(.20).rgbString(),
    textShadow: '1px 1px 0px rgba(255,255,255,.07), -1px -1px 0px rgba(0,0,0,.19)',
    fontWeight: 900,
    textAlign: 'center',
    marginTop: '5vh'
  }
}

export default class ImageDetail extends Component {
  render() {
    const p = this.props
    const id = p.routeParams.id
    const image = find(images, {id: id})
    return (
      <div>
        <Helmet
          title={`${image.name} on Admirable ~ ＼(^o^)／ ~`}
          meta={[
            {'property': 'og:image', 'content': image.url},
            {'property': 'og:type', 'content': 'website'},
            {'property': 'og:description', 'content': image.capt},
            {'property': 'og:title', 'content': image.name}
          ]}
        />
        <div style={STYLES.contentWrapper}>
          <div style={STYLES.imgWrapper}>
            <img src={image.url} style={STYLES.img} alt={image.name + " " + image.capt}/>
          </div>
          <p style={STYLES.text}>{image.capt}</p>
        </div>
      </div>
    )
  }
}
