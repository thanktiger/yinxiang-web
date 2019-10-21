import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import partyBuilding_pic1 from '../../assets/partyBuilding1.png'
import partyBuilding_pic2 from '../../assets/partyBuilding2.png'


export default class Product extends Component {
  render () {
    return (
      <div>
        <div className={styles.productListCover}>
          <h2>党的建设</h2>
          <p>加强思想教育 引领党性升华</p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productListTop}>
            <div className={styles.branch}>支部建设</div>
            <p className={styles.branchIntro}>长沙先导银象文化传媒有限公司党支部成立于2019年8月，支部目前现有党员10人，平均年龄33.6岁，硕士研究生学历占30%，其中高管团队党员有4人。</p>
            <div className={styles.branchText} dangerouslySetInnerHTML={{
              __html: `
              <img className={styles.partyBuilding_pic1} src=${partyBuilding_pic1} alt='' />
              <img className={styles.partyBuilding_pic2} src=${partyBuilding_pic2} alt='' />
              `
            }} />
            <p className={styles.activity}>党建活动</p>
            <p className={styles.activity_list}>党徽闪耀 信仰发光——银象传媒公司党支部第一次全体党员大会顺利召开</p>
            <p className={styles.activity_list}>加强思想教育 引领党性升华——先导银象传媒党支部组织开展第三季度集中学习</p>
          </div>
        </div>

      </div>
    
    )
  }
}