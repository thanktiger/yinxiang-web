import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './index.less'

import productCover from '../../assets/product_cover.png'
import productParkBox from '../../assets/product_parkBox.png'
import productPic from '../../assets/product_pic.png'
import productPicOne from '../../assets/product_picOne.png'

export default class Product extends Component {
  render () {
    return (
      <div>
        <img className={styles.productCover} src={productCover} alt='' />
        <div className={styles.productContainer}>
          <div className={styles.productParkBox}>Parkbox公园盒子：0到1打造社区5分钟智能健身舱</div>
          <div className={styles.productRichText} dangerouslySetInnerHTML={{
            __html: `<p>项目背景</p>
            <p>近两年健身行业在中国逐渐火热，在朋友圈晒健身餐的人越发增多。然而年卡消费机制、昂贵的私教课价、较高的入门心理成本等都让健身小白继续成为庞大的“心理健身”群体。ParkBox公园盒子力图解决这一痛点，以“让健身走入社区”为战略，10元/小时的亲民价，力图实现用户下楼就能够健身的体验。我们与公园盒子团队深度参与品牌设计和产品设计，打响新品牌新业务新模式的第一枪。</p>
            <img className={styles.productPicOne} src=${productPicOne} alt='' />
            <p className={styles.productContext_list}>几千甚至上万的年卡费用、无休止的推销、人群恐惧症…让健身 — 这个本应轻松、愉悦的事，变得难开始、更难坚持。有别于传统健身房，公园盒子（PARKBOX）智能健身舱布局社区，他们希望社区居民下个楼就能轻松健身，按次付费、全程自助；盒子内多样的器械满足有氧、无氧锻炼需求，还配有智能教练；健身舱最多容纳 2~6 人，不拥挤、不尴尬。公园盒子的全新商业模式，解决了传统健身房带给用户的诸多痛点，让健身回归轻松、愉悦。</p>
            <img className={styles.productPic} src=${productPic} alt='' />
            <img className={styles.productParkBox} src=${productParkBox} alt='' /><img src=${productPic} />`
          }} />
        </div>
      </div>
    )
  }
}