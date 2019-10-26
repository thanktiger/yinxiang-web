import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './index.less'

import aboutStar from '../../assets/about_star.png'
import aboutSpace from '../../assets/about_space.png'
import aboutLeader from '../../assets/about_leader.png'
import aboutStaff1 from '../../assets/aboutStaff1.png'
import aboutStaff2 from '../../assets/aboutStaff2.png'
import aboutMap from '../../assets/contact_map.png'
import joinUs_btn1 from '../../assets/joinUs_btn1.png'
import joinUs_btn2 from '../../assets/joinUs_btn2.png'
import joinUs_btn3 from '../../assets/joinUs_btn3.png'


export default class About extends Component {

  render () {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.globalContainer}>
          <Row>
            <Col span={24}>
              <div id='company' className={styles.introduction}>
                <img src={aboutStar} alt='' />
                <p>长沙先导银象文化传媒有限公司是一家集品牌运营、新媒体运营、IP产业运营、大型活动组织为一体的新锐文化传媒企业，依托雄厚且丰富的资源优势，开展文化传媒全产业链业务。公司拥有优秀的运营、策划、设计、媒介与执行人才团队，以专业的品牌策划与运作能力为支撑，向客户提供前期策划、中期执行、后期维护的一站式服务。主营业务包括品牌策划与活动执行、广告资源整合运营、广告制作工程等。长沙先导银象文化传媒有限公司是一家集品牌运营、新媒体运营、IP产业运营、大型活动组织为一体的新锐文化传媒企业，依托雄厚且丰富的资源优势，开展文化传媒全产业链业务。公司拥有优秀的运营、策划、设计、媒介与执行人才团队，以专业的品牌策划与运作能力为支撑，向客户提供前期策划、中期执行、后期维护的一站式服务。主营业务包括品牌策划与活动执行、广告资源整合运营、广告制作工程等。</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div id='spacing' className={styles.imageText}>
                <h3>灵感空间</h3>
                <p className={styles.imageTextIntro}>工作空间是我们工作方式的一部分。我们倡导自由，激发式的工作氛围</p>
                <img src={aboutSpace} alt='' />
              </div>
            </Col>
          </Row>
        </div>
        <div id='team' className={styles.imageText_bgc}>  
          <Row>
            <Col span={24}>
              <div className={[`${styles.imageText_box}`].join(' ')}>
                <h3>公司团队</h3>
                <div className={styles._boxIntro}>
                  <p>公司拥有一支行业经验丰富、专业职能完整的品牌运营服务精英团队</p>
                  <p>团队成员均来自于国内知名广告机构和大型企业</p>
                  <p>优秀运营、策划、设计、媒介与执行人才云集于此</p>
                </div>
                <img src={aboutLeader} alt='' />
                <p className={styles.aboutLeader_b}>年轻化创意足</p>
                <p className={styles.aboutLeader_t}>35岁以下人员达75.00%</p>
                <p className={styles.aboutLeader_b}>高学历知识广</p>
                <p className={styles.aboutLeader_t}>本科及以上员工达71.88%，其中硕士以上员工达12.50%</p>
                <p className={styles.aboutLeader_b}>专业化程度高</p>
                <p className={styles.aboutLeader_t}>专业执行团队占比65.63%</p>
                <p className={styles.aboutLeader_b}>实施项目案例多</p>
                <p className={styles.aboutLeader_t}>湖南金融峰会（2017-2018）、先导能源加油站VI形象改造、贺龙生活广场及先导童心MALL商场导视系统设计制作、洋湖湿地公园三期导视系统设计制作、中国（长沙）装配式建筑与工程技术博览会展位设计制作、湘江财富金融中心凯德壹中心广告位制作安装及户外广告发布、步步高集团腾讯朋友圈广告投放等</p>
                <div className={styles.aboutStaff}><img src={aboutStaff1} alt='' /></div>
                <div><img src={aboutStaff2} alt='' /></div>
                
              </div>
            </Col>
          </Row>
        </div>  
        <div id='contact' className={styles.globalContainer}>  
          <div className={styles.imageText}>
            <h3>联系我们</h3>
            <p className={styles.imageTextIntro}>一封邮件或许正是成就一个出色产品的开端</p>
            <img src={aboutMap} alt='' />
            <div className={styles.contact}>
              <p>联系地址：长沙市岳麓区先导路179号湘江时代写字楼A1栋九楼</p>
              <p>联系电话：0731-88222599</p>
            </div>
          </div>
        </div>
        <div id='join' className={styles.joinUsText}>
          <h3>加入我们</h3>
          <p className={styles.joinUsTextIntro}>欢迎成为我们大家庭的一员</p>
          <div className={styles.joinUs}>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8}>
              <a
                href='https://company.zhaopin.com/cz536843830.htm'
                target='_blank'
                rel='noopener noreferrer'>
                  <img src={joinUs_btn1} alt='' />
              </a>
            </Col> 
            <Col xs={24} sm={24} md={8} lg={8}>
              <a
                href='https://jobs.51job.com/all/co4533946.html'
                target='_blank'
                rel='noopener noreferrer'>
                  <img src={joinUs_btn2} alt='' />
              </a>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <a
                href='http://www.hnrcsc.com/web/view/view-company/id/CAC538976E5D929E.html?r=1'
                target='_blank'
                rel='noopener noreferrer'>
                  <img src={joinUs_btn3} alt='' />
              </a> 
            </Col>
             
          </Row>
          </div>
          <div className={styles.mailbox}>
            <p>点击按钮直接访问简历投递网站，或直接投递到以下邮箱</p>
            <p>554973700@qq.com</p>
          </div>
        </div>

      </div>
    )
  }
}