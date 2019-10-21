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
            __html: `<p>有些人常误认为设计就等同于创造力。实际上，设计不仅仅是常被描述的创造力的唯一结果。优秀的用户体验设计师往往是解读人心的好手。他们能够洞察用户是如何看待一个设计并区分其优劣的。</p><p>加州大学(圣地亚哥分校)设计实验室负责人唐·诺曼（Don Norman），在其《设计心理学》一书中对这个类比做了如下描述：</p><p>我们必须以人们本来（自然）的方式而不是我们希望的方式进行设计。参见另外一个章节 “不要太讲逻辑”，毕竟世界上还有一半的人还未达到平均水平。</p>
            <img src=${companyNewsPic} />
            <p>用户的视线通常先在内容区域的顶部进行水平移动。这构成了F上面那一横。接下来，用户的视线会向下一些，移动到第二条水平线，通常这条线会比之前的水平线短些。这是F下面那条较短的横线。最后，用户的视线沿着左侧垂直向下浏览内容。在缓慢而有条理的浏览时，在眼动热力图上会出现一条实条纹，在快速浏览的时候会出现一些斑点。这就是F的最后一竖。</p>`
          }} />
        </div>
      </div>
    )
  }
}