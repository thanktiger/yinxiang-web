import React, { Component } from 'react'
import Link from 'umi/link';
import styles from './index.less'

import productListCover from '../../assets/productList_cover.png'

const newsList = [
  {
    title: '设计心理学教我的五碗“真鸡汤”',
    abstract: '有些人常误认为设计就等同于创造力。实际上，设计不仅仅是有些人常误认为设计就等同于创造力。实际上，设计不仅仅是',
    type: '集团动态',
    date: '2019/08/21',
    cover: productListCover
  },
  {
    title: '设计心理学教我的五碗“真鸡汤”',
    abstract: '有些人常误认为设计就等同于创造力。实际上，设计不仅仅是有些人常误认为设计就等同于创造力。实际上，设计不仅仅是',
    type: '集团动态',
    date: '2019/08/21'
  },
  {
    title: '设计心理学教我的五碗“真鸡汤”',
    abstract: '有些人常误认为设计就等同于创造力。实际上，设计不仅仅是有些人常误认为设计就等同于创造力。实际上，设计不仅仅是',
    type: '集团动态',
    date: '2019/08/21',
    cover: productListCover
  },
  {
    title: '设计心理学教我的五碗“真鸡汤”',
    abstract: '有些人常误认为设计就等同于创造力。实际上，设计不仅仅是有些人常误认为设计就等同于创造力。实际上，设计不仅仅是',
    type: '集团动态',
    date: '2019/08/21',
    cover: productListCover
  }
]

export default class Product extends Component {
  render () {
    return (
      <div>
        <div className={styles.productListCover}>
          <h2>公司动态</h2>
          <p>深入学习理解众多行业，与品牌伙伴一起成长</p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.companyNewsTab}>
            <div className={styles.companyNewsTabHover}>全部动态</div>
            <div>集团动态</div>
            <div>业务动态</div>
            <div>通知公告</div>
          </div>
          <div className={styles.companyNewsList}>
            {
              newsList.map((item, index) => {
                return (
                  <div className={styles.companyNewsListItem} key={index}>
                    <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                      <Link to='./'>{item.title}</Link>
                      <p>{item.abstract}</p>
                      <div className={styles.companyNewsListItemLeftInfo}>
                        <span>{item.type}</span>
                        <time>{item.date}</time>
                      </div>
                    </div>
                    {item.cover && <img className={styles.companyNewsListItemRight} src={item.cover} alt='' />}
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