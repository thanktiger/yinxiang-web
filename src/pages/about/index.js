import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './index.less'

import aboutStar from '../../assets/about_star.png'
import aboutSpace from '../../assets/about_space.png'
import aboutLeader from '../../assets/about_leader.png'
import aboutContact from '../../assets/about_contact.png'

const leaderList = [
  {
    avatar: aboutLeader,
    name: '肖宇',
    position: '公司董事长、法定代表人',
    work: '领导公司全面工作'
  },
  {
    avatar: aboutLeader,
    name: '陈一琪',
    position: '公司常务副总经理',
    work: '协助负责公司日常经营管理工作，分管品牌策划部和广告投放部'
  },
  {
    avatar: aboutLeader,
    name: '陈文',
    position: '公司副总经理',
    work: '负责公司董事会办公室日常工作管理、行政管理、人力资源管理、成本合约管理、招投标管理、财务管理，分管综合管理部（董事会办公室）和财务管理部'
  },
  {
    avatar: aboutLeader,
    name: '刘颂',
    position: '公司副总经理',
    work: '负责媒介资源拓展与运维、工程管理、外部关系协调等方面的工作，分管工程媒介部。'
  }
]

const departmentList = [
  {
    name: '综合管理部',
    description: '工作主要分为四个板块，包括董办工作、行政管理工作、人力资源工作以及成本控制、招采合约工作。'
  },
  {
    name: '财务管理部',
    description: '主要负责会计核算、财务管理资产管理、资金管理、合约审定，税务申报等工作。'
  },
  {
    name: '品牌策划部',
    description: '由国际项目策展人、广电资深媒体人、全球快消品牌人、现象级活动导演、资深设计师等成员组成，打造活动策划执行、品牌设计推广、视频拍摄制作三箭齐发的市场格局，带来创意力、执行力、品质力俱佳的市场口碑。'
  },
  {
    name: '广告投放部',
    description: '致力于腾讯社交广告等其他主流线上媒体广告资源，通过打造品牌策略、社群策略、内容策略、到达策略四位一体的实效服务体系。'
  },
  {
    name: '工程媒介部',
    description: '以高效的现场施工管理，优质的媒介资源设计、开发及整合运营为一体的高效率团队。业务范围涵盖：项目工程资源、自有媒介资源创新开发新型媒介载体、整合及运营市内广告市场媒介资源。'
  }
]

export default class About extends Component {
  render () {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.globalContainer}>
          <Row>
            <Col span={24}>
              <div className={styles.introduction}>
                <img src={aboutStar} alt='' />
                <p>长沙先导银象文化传媒有限公司是一家集品牌运营、新媒体运营、IP产业运营、大型活动组织为一体的新锐文化传媒企业，依托雄厚且丰富的资源优势，开展文化传媒全产业链业务。公司拥有优秀的运营、策划、设计、媒介与执行人才团队，以专业的品牌策划与运作能力为支撑，向客户提供前期策划、中期执行、后期维护的一站式服务。主营业务包括品牌策划与活动执行、广告资源整合运营、广告制作工程等。长沙先导银象文化传媒有限公司是一家集品牌运营、新媒体运营、IP产业运营、大型活动组织为一体的新锐文化传媒企业，依托雄厚且丰富的资源优势，开展文化传媒全产业链业务。公司拥有优秀的运营、策划、设计、媒介与执行人才团队，以专业的品牌策划与运作能力为支撑，向客户提供前期策划、中期执行、后期维护的一站式服务。主营业务包括品牌策划与活动执行、广告资源整合运营、广告制作工程等。</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={styles.imageText}>
                <h3>灵感空间</h3>
                <p className={styles.imageTextIntro}>工作空间是我们工作方式的一部分。我们倡导自由，激发式的工作氛围，分享与汲取是其中的主题</p>
                <img src={aboutSpace} alt='' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={[`${styles.imageText}`, `${styles.bgc}`].join(' ')}>
                <h3>公司团队</h3>
                <p className={styles.imageTextIntro}>博学，深知，信任，积极，责任感，对细节的尊重，挑战权威是我们的关键词</p>
                <Row>
                  {
                    leaderList.map((item, index) => {
                      return (
                        <Col xs={24} sm={24} md={12} lg={6} key={index}>
                          <div className={styles.leaderInfo}>
                            <img src={item.avatar} alt='' />
                            <h4>{item.name}</h4>
                            <span>{item.position}</span>
                            <p>{item.work}</p>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>
            </Col>
          </Row>
          <Row type='flex'>
            {
              departmentList.map((item, index) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={12} key={index}>
                    <div className={styles.department}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <div className={styles.imageText}>
            <h3 id='contact'>联系我们</h3>
            <p className={styles.imageTextIntro}>一封邮件或许正是成就一个出色产品的开端</p>
            <div className={styles.contact}>
              <p>联系地址：长沙市岳麓区先导路179号湘江时代写字楼A1栋九楼</p>
              <p>联系电话：0731-88222599</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}