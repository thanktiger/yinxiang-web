import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import productListCover from '../../assets/productList_cover.png'
import companyNewsPic from '../../assets/productListItem4.png'

export default class Product extends Component {
  render () {
    return (
      <div>
        <img className={styles.productListCover} src={productListCover} alt='' />
        <div className={styles.productContainer}>
          <div className={styles.productListShow}>
            <h2>公司动态</h2>
            <p>深入学习理解众多行业，与品牌伙伴一起成长</p>
          </div>
          <div className={styles.companyNewsTab}>
            <div className={styles.companyNewsTabHover}>全部动态</div>
            <div>集团动态</div>
            <div>业务动态</div>
            <div>通知公告</div>
          </div>
          <div className={styles.companyNewsList}>
            {
              [1,2,3,4,5].map((item, index) => {
                return (
                  <div className={styles.companyNewsListItem}>
                    <div className={styles.companyNewsListItemLeft}>
                      <Link to='./'>设计心理学教我的五碗“真鸡汤”</Link>
                      <p>有些人常误认为设计就等同于创造力。实际上，设计不仅仅是…</p>
                      <div className={styles.companyNewsListItemLeftInfo}>
                        <span>集团动态</span>
                        <time>2019/08/05</time>
                      </div>
                    </div>
                    <img className={styles.companyNewsListItemRight} src={companyNewsPic} alt='' />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}