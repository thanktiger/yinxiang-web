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
    title: '为什么KOL营销这么难做？',
    abstract: '如果想做一次刷屏级营销，你应该怎么办？显然投放电视、报纸等硬广渠道已经…',
    type: '业务动态',
    date: '2019/08/04'
  },
  {
    title: '想成功完成天使轮融资？创业者要做好这6件事',
    abstract: '怎么融资？这是绝大多数创业者都要面对的灵魂问题，对于想要融天使轮的创业…',
    type: '通知公告',
    date: '2019/08/02'
  },
  {
    title: '为什么说没有5G，苹果在中国就会很危险？',
    abstract: '一年一度的苹果秋季发布会结束了，“软硬兼施”，没有惊喜…',
    type: '业务动态',
    date: '2019/08/01',
    cover: productListCover
  },
  {
    title: '为什么BAT出身创业者纷纷涌入老年行业？',
    abstract: '过去三年，AgeClub在中老年大消费方向建立了全面的行业研…',
    type: '业务动态',
    date: '2019/08/01',
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