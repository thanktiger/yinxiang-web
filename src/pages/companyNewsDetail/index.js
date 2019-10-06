import React, { Component } from 'react'
import styles from './index.less'
import companyNewsPic from '../../assets/productListItem4.png'

export default class CompanyNewsDetail extends Component {

  html = () => (
    <div>123</div>
  )

  render () {
    return (
      <div className={styles.newsDetail}>
        <div className={styles.newsDetailHeader}>
          <div className={styles.newsDetailHeaderTitle}>
            <p>设计心理学教我的五碗“真鸡汤”</p>
          </div>
        </div>
        <div className={styles.newsDetailContent}>
          <div className={styles.newsDetailContentInfo}>集团动态 | 2019/08/05</div>
          <div className={styles.newsRichText} dangerouslySetInnerHTML={{
            __html: `<p>有些人常误认为设计就等同于创造力。实际上，设计不仅仅是常被描述的创造力的唯一结果。优秀的用户体验设计师往往是解读人心的好手。他们能够洞察用户是如何看待一个设计并区分其优劣的。</p><p>加州大学(圣地亚哥分校)设计实验室负责人唐·诺曼（Don Norman），在其《设计心理学》一书中对这个类比做了如下描述：</p><p>我们必须以人们本来（自然）的方式而不是我们希望的方式进行设计。参见另外一个章节 “不要太讲逻辑”，毕竟世界上还有一半的人还未达到平均水平。</p><img src=${companyNewsPic} />`
          }} />
        </div>
      </div>
    )
  }
}