import React, { Component } from 'react'
import Link from 'umi/link';
import styles from './index.less'

import productListCover from '../../assets/productList_cover.png'

const tabList = ['全部动态', '集团动态', '业务动态', '通知公告']

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

  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  onChangeTab = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render () {
    let { tabIndex } = this.state
    return (
      <div>
        <div className={styles.productListCover}>
          <h2>公司动态</h2>
          <p>深入学习理解众多行业，与品牌伙伴一起成长</p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.companyNewsTab}>
            {
              tabList.map((item, index) => {
                return (
                  <div
                    className={tabIndex === index ? styles.companyNewsTabHover : ''}
                    key={index}
                    onClick={() => { this.onChangeTab(index) }}>{item}</div>
                )
              })
            }
          </div>
          {
            tabIndex === 0 && <div className={styles.companyNewsList}>
              {
                newsList.map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to='./companyNewsDetail'>{item.title + tabIndex}</Link>
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
          }
          {
            tabIndex === 1 && <div className={styles.companyNewsList}>
              {
                newsList.map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to='./'>{item.title + tabIndex}</Link>
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
          }
          {
            tabIndex === 2 && <div className={styles.companyNewsList}>
              {
                newsList.map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to='./'>{item.title + tabIndex}</Link>
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
          }
          {
            tabIndex === 3 && <div className={styles.companyNewsList}>
              {
                newsList.map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to='./'>{item.title + tabIndex}</Link>
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
          }
        </div>
      </div>
    )
  }
}