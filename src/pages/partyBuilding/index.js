import React, { Component } from 'react'
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
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20190820_1719_0`} target='_blank'>
              <p>党徽闪耀 信仰发光——银象传媒公司党支部第一次全体党员大会顺利召开</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20190911_1514_0`} target='_blank'>
              <p>加强思想教育 引领党性升华——先导银象传媒党支部组织开展第三季度集中学习</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191012_1616_0`} target='_blank'>
              <p>不忘初心学党史 牢记使命扬传统——银象传媒党支部开展10月主题党日活动</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191012_1639_0`} target='_blank'>
              <p>银象传媒支部开展“不忘初心、牢记使命”主题教育集中学习杜家豪书记专题党课相关精神</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191017_1547_0`} target='_blank'>
              <p>银象传媒支部开展支部书记讲专题党课活动</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191025_1613_0`} target='_blank'>
              <p>银象传媒党支部开展“不忘初心、牢记使命”主题教育心得交流座谈会</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191030_1716_0`} target='_blank'>
              <p>银象传媒支部参加集团领导专题辅导党课并召开对照检查专题会议</p>
            </Link>
            <Link className={styles.activity_list} to={`./companyNewsDetail?title=20191105_1038_0`} target='_blank'>
              <p>百里毅行做服务，志愿禁毒普知识——银象传媒支部开展百公里毅行志愿服务普及禁毒知识</p>
            </Link>
          </div>
        </div>

      </div>
    
    )
  }
}