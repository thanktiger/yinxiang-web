import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import banner_img_01 from '../assets/banner_img_01.jpg'
import banner_img_02 from '../assets/banner_img_02.jpg'
import productListCover from '../assets/about_cover.png'
import productCover1 from '../assets/productListItem1.png'
import productCover2 from '../assets/productListItem2.png'
import productCover3 from '../assets/productListItem3.png'
import productCover4 from '../assets/productListItem4.png'
import businnesCover1 from '../assets/icon-index-01-light.png'
import businnesCover2 from '../assets/icon-index-02-light.png'
import businnesCover3 from '../assets/icon-index-03-light.png'
import businnesCover4 from '../assets/icon-index-04-light.png'
import businessActiveCover1 from '../assets/icon-index-01-dark.png'
import businessActiveCover2 from '../assets/icon-index-02-dark.png'
import businessActiveCover3 from '../assets/icon-index-03-dark.png'
import businessActiveCover4 from '../assets/icon-index-04-dark.png'

import firstDataCover from '../../public/json/img/20200312_1210_0_01.jpg'

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
  {index: "20200312_1210", title: "植种希望 祈福中国——先导城投支部、银象传媒支部联合白鹭府社区开展党建共建植树活动", img: firstDataCover},
  {index: "20200305_1451", title: "银象传媒公司苦练内功，深入开展全员业务培训", abstract: "为了提高市场拓展业务能力，精准抓住客户需求和行业发展脉搏，3月4日下午13:30，银象传媒公司继续采用“线上+线下”的模式进行全员业务培训，会议由常务副总经理陈一琪主持。", tag: "公司动态", date: "2020/03/05 14:51"},
  {index: "20200228_1354", title: "疫情防控不放松 规范要求抓落实——银象传媒支部召开党员大会传达重要文件精神", abstract: "2月27日上午10:00，银象传媒支部在湘江时代A1栋919会议室召开2020年第一次全体党员大会，学习传达重要文件精神。会议由支部书记肖宇主持，支部党员和入党积极分子参加会议。", tag: "公司动态", date: "2020/02/28 13:54"},
  {index: "20200227_1255", title: "银象传媒公司“线上+线下”进行全员业务培训", abstract: "在当前疫情防控的形势下，为最大限度降低疫情对经营发展的影响，提升市场拓展部业务能力，保障年度经营目标的顺利完成，2月26下午14:30，银象传媒公司采用“线上+线下”的特殊方式进行全员业务培训，会议由常务副总经理陈一琪主持。", tag: "公司动态", date: "2020/02/27 12:55"},
  {index: "20200217_1632", title: "银象传媒防疫在行动", abstract: "“疫情就是命令，防控就是责任!”自新型冠状病毒肺炎疫情蔓延以来，银象传媒公司主动作为，科学防控，积极制定有力措施，在疫情防控压力陡增的关键时期，做到守土尽责、守土负责，全力打好“抗击新型冠状病毒”阻击战。", tag: "公司动态", date: "2020/02/17 16:32"},
  {index: "20200120_1430", title: "回头总结积经验  砥砺前行再起航——银象传媒公司召开2019年度年终总结表彰大会", abstract: "为总结经验，表彰先进。1月20日下午，银象传媒公司在湘江时代A306会议室召开2019年度年终总结表彰大会。公司高管及全体员工参加会议。", tag: "公司动态", date: "2020/01/20 14:30"},

  // {index: "20191105_1038_0", title: "百里毅行做服务，志愿禁毒普知识——银象传媒支部开展百公里毅行志愿服务普及禁毒知识", img: firstDataCover},
  // {index: "20191030_1716_0", title: "银象传媒支部参加集团领导专题辅导党课并召开对照检查专题会议", abstract: "为进一步提升党员的党性意识、责任意识、担当意识和大局意识，激发党员有效发挥先锋模范作用。10月29日上午，长沙城发集团副总经理、先导控股集团党委委员、常务副总经理危建新同志以《守纪律"},
  // {index: "20191025_1613_0", title: "银象传媒党支部开展“不忘初心、牢记使命”主题教育心得交流座谈会", abstract: "根据支部“不忘初心、牢记使命”主题教育工作部署安排，10月24日下午，银象传媒党支部在公司919会议…一步规范党员徽章管理的工作提示》，会议由组织委员陈文同志主持，支部党员和入党积极分子参加了座谈会。"},
  // {index: "20191017_1547_0", title: "银象传媒支部开展支部书记讲专题党课活动", abstract: "根据“三会一课”制度和 “不忘初心、牢记使命”主题教育工作部署，10月17日上午，银象传媒支部在公司…支部书记讲专题党课活动，并组织观看了《初心与使命》廉政警示教育片，支部全体党员和入党积极分子参加。"},
  // {index: "20191015_1722_0", title: "2019中国（长沙）装配式建筑与工程技术博览会隆重启幕", abstract: "2019年10月15日，由银象传媒公司承接部分展位制作的2019年湖南（长沙）装配式建筑与工程技术博览会在长沙国际会展中心隆重开幕。"},
  // {index: "20191012_1639_0", title: "银象传媒支部开展“不忘初心、牢记使命”主题教育集中学习杜家豪书记专题党课相关精神", abstract: "根据市委主题办的通知和集团党委要求，10月12日上午，银象传媒支部在公司919会议室集中学习了省委书…重自觉的共产党员》专题党课的相关精神。本次活动由支部书记肖宇同志主持，支部党员和入党积极分子参加。"},
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
          <Link to={'#'}><img src={productListCover} alt='' style={{ width: '100%' }} /></Link>
          <Link to={'#'}><img src={banner_img_01} alt='' style={{ width: '100%' }} /></Link>
          <Link to={'#'}><img src={banner_img_02} alt='' style={{ width: '100%' }} /></Link>
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
                        <div className={styles.productListItemShadow} />
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
          <h3 className={styles.ProductsCore}>新闻动态</h3>
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