import React, { Component } from 'react'
import styles from './index.less'

export default class Movie extends Component {
  render () {
    return (
      <div className={styles.content}>
        <div className={styles.productListCover}>
          <h2>先导影业</h2>
        </div>
        <div className={styles.main}>内容建设中...</div>
      </div>
    
    )
  }
}