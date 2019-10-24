import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import productListCover from '../assets/productList_cover.png'
import productCover1 from '../assets/productListItem1.png'
import productCover2 from '../assets/productListItem2.png'
import productCover3 from '../assets/productListItem3.png'
import productCover4 from '../assets/productListItem4.png'
import NewsCover from '../assets/newscover.png'
import businnesCover1 from '../assets/icon-index-01-light.png'
import businnesCover2 from '../assets/icon-index-02-light.png'
import businnesCover3 from '../assets/icon-index-03-light.png'
import businnesCover4 from '../assets/icon-index-04-light.png'
import businessActiveCover1 from '../assets/icon-index-01-dark.png'
import businessActiveCover2 from '../assets/icon-index-02-dark.png'
import businessActiveCover3 from '../assets/icon-index-03-dark.png'
import businessActiveCover4 from '../assets/icon-index-04-dark.png'

const productListItem = [
  {
    avatar: productCover1,
    title: '湖南省最高规格的金融盛会，荣获腾讯2017年度影响力传播奖',
  },
  {
    avatar: productCover2,
    title: '青少年“体育·新时代”冬夏令营系列活动',
  },
  {
    avatar: productCover3,
    title: '谱写新时代中国饭店业高质量发展新篇章',
  },
  {
    avatar: productCover4,
    title: '湘江西岸建设一座美好的“两型”新城',
  }
]

const BusinessItem = [
  {
    cover: businnesCover1,
    activeCover: businessActiveCover1,
    title: '品牌策划与活动执行',
    abstract:'根据市场目标做切实可行的产品方案，在激烈的市场竞争中获得优势。'
  },
  {
    cover: businnesCover2,
    activeCover: businessActiveCover2,
    title: '广告资源整合运营',
    abstract:'整体营销策略，线上广告创意策略、创意设计到广告投放策略、投放优化、效果分析等的新媒体全案服务'
  },
  {
    cover: businnesCover3,
    activeCover: businessActiveCover3,
    title: '广告制作工程',
    abstract:'企业广告、商业导视、门店招牌、灯箱发光字、围挡广告位、道旗桁架、亮化工程等报批、设计、制作、安装、售后等为一体的综合服务'
  },
  {
    cover: businnesCover4,
    activeCover: businessActiveCover4,
    title: '空间与线下',
    abstract:'将空间视为沟通场所，在意数据和信息如何在线上线下的流转，并与空间内的设施与服务发生互动。'
  }
]

const NewsItem = [
  {
    name: '中国空军八一发布超燃宣传片 这一画面首次公开',
    intro:'中国空军发布强军宣传片《初心伴我去战斗》，通过歼-20、轰-6K等新型…'
  },
  {
    name: '台风“韦帕”华南沿海掀狂风骤雨 风暴潮警报升级',
    intro:'台风“韦帕”1日先后在海南文昌和广东湛江沿海登陆后，2日继续向偏西方…'
  },
  {
    name: '苹果再回应Siri泄露隐私：暂停全球Siri评估计划',
    intro:'苹果进行彻底审查的同时已暂停全球的 Siri 评估计划。此外，用户将在未…'
  },
  {
    name: '竞选集会上特朗普正演讲 台下抗议者举横幅造混乱打断3分钟',
    intro:'8月1日，特朗普在俄亥俄州参加竞选集会时，现场发生了“尴尬一幕”：有…'
  },
  {
    name: '长沙持续高温 动物们花式解暑',
    intro:'酷热难耐的天气让长沙市生态动物园的动物们纷纷采用各种方式为自己解…'
  }
]

export default class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current: null
    }
  }

  hoverBussinessItem = (index) => {
    this.setState({
      current: index
    })
  }

  leaveBussinessItem = () => {
    this.setState({
      current: null
    })
  }

  render () {
    let { current } = this.state
    return (
      <div className={styles.homeContainer}>
        <Carousel autoplay>
          <Link to={'#'}><img src={productListCover} alt='' /></Link>
          <Link to={'#'}><img src={productListCover} alt='' /></Link>
          <Link to={'#'}><img src={productListCover} alt='' /></Link>
          <Link to={'#'}><img src={productListCover} alt='' /></Link>
        </Carousel>
        <div className={styles.ProductsCoreBg}>
          <div className={styles.productContainer}>
          
            <h3 className={styles.ProductsCore}>主营业务</h3>
            <p className={styles.ProductsCoreIntro}>品牌策划与活动执行、广告资源整合运营、广告制作工程等</p> 
            <div className={styles.business}>
              <Row gutter={30}>
                {
                  BusinessItem.map((item, index) => {
                    return (
                      <Col xs={24} sm={24} md={12} lg={12} key={index}>
                        <div
                          className={styles.businessBox}
                          onMouseEnter={() => this.hoverBussinessItem(index)}
                          onMouseLeave={() => this.leaveBussinessItem()}>
                          <img src={current === index ? item.cover : item.activeCover} alt=''/>
                          <span className={styles.businessBoxRight}>
                            <h3>{item.title}</h3>
                            <p>{item.abstract}</p>
                          </span>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>

            </div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <div>
            <h3 className={styles.ProductsCore}>优秀案例</h3>
            <p className={styles.ProductsCoreIntro}>精心打造各种品牌活动，为客户提供对外展示的窗口</p> 
            <Row>
              {
                productListItem.map((item, index) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={12} key={index}>
                      <div className={styles.productListItem}>
                        <img src={item.avatar} alt='' />
                        <Link to='./productDetail'>{item.title}</Link>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
            <Link className={styles.moreBtn} to='./productDetail'>查看更多案例</Link>
          </div>
          <h3 className={styles.ProductsCore}>公司动态</h3>
          <p className={styles.ProductsCoreIntro}>公司与集团动态，与集团发展共成长</p> 
          <div className={styles.News}>
          <Row type='flex'>
            <Col xs={24} sm={24} md={12} lg={12}>
            <Link to='./companyNews'>
              <div className={styles.NewsLeft}>
                <img src={NewsCover} alt=''/>
                <p>用更年轻更简短有力的语言传达品牌认知</p>
              </div>
            </Link>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className={styles.NewsRightList}>
                {
                  NewsItem.map((item, index) => {
                    return (
                      <div className={styles.NewsRightListItem} key={index}>
                        <Link to='./companyNewsDetail'><h4>{item.name}</h4></Link>
                        <p>{item.intro}</p>
                      </div>
                    )
                  })
                }
              </div>
            </Col>
            </Row>
          </div>
        </div>
        
      </div>
    )
  }
}