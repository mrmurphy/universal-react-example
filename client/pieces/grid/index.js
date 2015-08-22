import React, { Component } from 'react'
import { Link } from 'react-router'
import Color from 'color'
import Helmet from 'react-helmet'
import { chunk } from 'lodash'

const STYLES = {
  wrapper: {
    height: '100%'
  },
  gridWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flex: 1
  },
  cell: imgUrl => ({
    flex: 1,
    background: `url(${imgUrl})`,
    backgroundSize: 'cover',
  })
}
const images = require('./images')
const imagesByThree = chunk(images, 3)

export default class Grid extends Component {
  render() {
    return (
      <div style={STYLES.wrapper}>
        <div style={STYLES.gridWrapper}>
          {imagesByThree.map( (row, rowIdx) => {
            return (
              <div style={STYLES.row} key={rowIdx}>
                {row.map( (img, colIdx) => {
                  return (
                    <Link to="admire" params={{id: img.id}} key={`${rowIdx}${colIdx}`} style={STYLES.cell(img.url)} aria-label={`Image: ${img.name}`}></Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
