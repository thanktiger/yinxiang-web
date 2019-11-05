import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import productListCover from '../assets/about_cover.png'
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

import firstDataCover from '../../public/json/img/20191025_1613_0_01.jpg'

const productListItem = [
  {
    index: '01_hnjrfh',
    avatar: productCover1,
    title: '湖南省最高规格的金融盛会，荣获腾讯2017年度影响力传播奖',
  },
  {
    index: '02_tyxsd',
    avatar: productCover2,
    title: '青少年“体育·新时代”冬夏令营系列活动',
  },
  {
    index: '03_zgfdfzdh',
    avatar: productCover3,
    title: '谱写新时代中国饭店业高质量发展新篇章',
  },
  {
    index: '04_csmxyyh',
    avatar: productCover4,
    title: '湘江西岸建设一座美好的“两型”新城',
  }
]

const BusinessItem = [
  {
    cover: businnesCover1,
    activeCover: businessActiveCover1,
    title: '品牌策划',
    abstract:'根据市场目标做切实可行的产品方案，在激烈的市场竞争中获得优势'
  },
  {
    cover: businnesCover2,
    activeCover: businessActiveCover2,
    title: '活动执行',
    abstract:'活动策划执行、 品牌设计推广、视频拍摄制作三箭齐发，带来创意力、执行力、品质力俱佳的市场口碑'
  },
  {
    cover: businnesCover3,
    activeCover: businessActiveCover3,
    title: '广告整合运营',
    abstract:'整体营销策略，线上广告创意策略、创意设计到广告投放策略、投放优化、效果分析等的新媒体全案服务'
  },
  {
    cover: businnesCover4,
    activeCover: businessActiveCover4,
    title: '广告制作',
    abstract:'企业广告、商业导视、门店招牌、灯箱发光字、围挡广告位、道旗桁架、亮化工程等报批、设计、制作、安装、售后等为一体的综合服务'
  }
]

const NewsList = [
  {index: "20191025_1613_0", title: "银象传媒党支部开展“不忘初心、牢记使命”主题教育心得交流座谈会", img: firstDataCover},
  {index: "20191017_1547_0", title: "银象传媒支部开展支部书记讲专题党课活动", abstract: "根据“三会一课”制度和 “不忘初心、牢记使命”主题教育工作部署，10月17日上午，银象传媒支部在公司…支部书记讲专题党课活动，并组织观看了《初心与使命》廉政警示教育片，支部全体党员和入党积极分子参加。"},
  {index: "20191012_1639_0", title: "银象传媒支部开展“不忘初心、牢记使命”主题教育集中学习杜家豪书记专题党课相关精神", abstract: "根据市委主题办的通知和集团党委要求，10月12日上午，银象传媒支部在公司919会议室集中学习了省委书…重自觉的共产党员》专题党课的相关精神。本次活动由支部书记肖宇同志主持，支部党员和入党积极分子参加。"},
  {index: "20191012_1616_0", title: "不忘初心学党史 牢记使命扬传统————银象传媒党支部开展10月主题党日活动", abstract: "为牢记党的光荣历史，继承发扬党的优良传统。根据“不忘初心、牢记使命”主题教育的工作安排与部署，10月…30余人前往中国共产党长沙历陈列馆参观学习，缅怀毛泽东、杨开慧等革命先辈，重温共产党员的初心使命。"},
  {index: "20190911_1514_0", title: "加强思想教育 引领党性升华————先导银象传媒党支部组织开展第三季度集中学习", abstract: "按照集团党委的统一部署，9月10日下午，先导银象传媒支部在公司919会议室开展第三季度集中学习，本次活动由支部书记肖宇同志主持，支部全体党员参加。"},
  {index: "20190830_1901_0", title: "以制为尺、规范管理————银象传媒公司开展招采合约类制度培训", abstract: "为切实落实市委巡察组和集团巡察整改办的工作要求，严格规范内部管理流程，8月30日上午，银象传媒公司组织了招采合约相关制度培训。此次培训由副总经理陈文主持，全体员工参加。"}
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
        <Carousel autoplay={false}>
          <Link to={'#'}><img src={productListCover} alt='' style={{ width: '100%' }} /></Link>
          <Link to={'#'}><img src={productListCover} alt='' style={{ width: '100%' }} /></Link>
          <Link to={'#'}><img src={productListCover} alt='' style={{ width: '100%' }} /></Link>
          <Link to={'#'}><img src={productListCover} alt='' style={{ width: '100%' }} /></Link>
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
            <h3 className={styles.ProductsCore}>项目案例</h3>
            <p className={styles.ProductsCoreIntro}>精心打造各种品牌活动，为客户提供对外展示的窗口</p> 
            <Row>
              {
                productListItem.map((item, index) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={12} key={index}>
                      <Link to={`./productDetail?title=${item.index}`} target='_blank' className={styles.productListItem}>
                        <img src={item.avatar} alt='' />
                        <span>{item.title}</span>
                      </Link>
                    </Col>
                  )
                })
              }
            </Row>
            <Link className={styles.moreBtn} to='./productList'>查看更多案例</Link>
          </div>
          <h3 className={styles.ProductsCore}>公司动态</h3>
          <p className={styles.ProductsCoreIntro}>公司与集团动态，与集团发展共成长</p> 
          <div className={styles.News}>
          <Row type='flex'>
            <Col xs={24} sm={24} md={12} lg={12}>
            <Link to={`./companyNewsDetail?title=${NewsList[0].index}`} target='_blank'>
              <div className={styles.NewsLeft}>
                <img src={NewsList[0].img} alt=''/>
                <p>{NewsList[0].title}</p>
              </div>
            </Link>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className={styles.NewsRightList}>
                {
                  NewsList.map((item, index) => {
                    if (index > 0) {
                      return (
                        <div className={styles.NewsRightListItem} key={index}>
                          <Link to={`./companyNewsDetail?title=${item.index}`} target='_blank'><h4>{item.title}</h4></Link>
                          <p>{item.abstract}</p>
                        </div>
                      )
                    }
                    return null
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