import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './index.less'

import ProductsBoxIcon1 from '../../assets/icon-index-01-dark.png'
import ProductsBoxIcon2 from '../../assets/icon-index-02-dark.png'
import ProductsBoxIcon3 from '../../assets/icon-index-03-dark.png'
import ProductsBoxIcon4 from '../../assets/icon-index-04-dark.png'
import ProductsCorePic01 from '../../assets/productsPic01.png'
import ProductsCorePic02 from '../../assets/productsPic02.png'
import ProductsCorePic03 from '../../assets/productsPic03.png'
import ProductsCorePic05 from '../../assets/productsPic05.png'
import ProductsServicePic from '../../assets/ProductsService.png'

const ProductsBox = [
  {
    avatar: ProductsBoxIcon1,
    name: '品牌策划'
  },
  {
    avatar: ProductsBoxIcon2,
    name: '活动执行'
  },
  {
    avatar: ProductsBoxIcon3,
    name: '广告整合运营'
  },
  {
    avatar: ProductsBoxIcon4,
    name: '广告制作'
  }
]

const ProductsPlanItem = [
  {
    pic: ProductsCorePic01,
    title: '品牌策划',
    intro: '以品牌策划、品牌设计，活动策划执行、品牌推广四位一体的新业态，涵盖品牌整体策划与设计。'
  },
  {
    pic: ProductsCorePic02,
    title: '活动执行',
    intro: '品牌推广、活动策划执行、大型会议策划执行、视频拍摄制作等。'
  },
  {
    pic: ProductsCorePic03,
    title: '广告资源整合运营',
    intro: '为客户提供整体营销策略，线上广告创意策略、创意设计到广告投放策略、投放优化、效果分析等的新媒体全案服务。'
  },
  {
    pic: ProductsCorePic05,
    title: '广告制作工程',
    intro: '为客户提供企业广告、商业导视、门店招牌、灯箱发光字、围挡广告位、道旗桁架、亮化工程等报批、设计、制作、安装、售后等为一体的综合服务。'
  }
]


export default class Products extends Component {
  render () {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.productContainer}>
          <div className={styles.introduction}>
            <p>我们善于深入业务</p>
            <p>利用丰富的行业通理与产品经验打造落地的产品</p>
            <div className={styles.ProductsIcons}>
              <Row>
                {
                  ProductsBox.map((item, index) => {
                    return (
                      <Col xs={24} sm={24} md={12} lg={6} key={index}>
                        <div className={styles.ProductsBox}>
                          <img src={item.avatar} alt='' />
                          <p>{item.name}</p>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div> 
          <h3 className={styles.ProductsCore}>坚实的产品核心论者</h3>
          <p className={styles.ProductsCoreIntro}>深入学习理解众多行业，与品牌伙伴一起成长</p> 
          <div>
            <Row type='flex'>
              {
                ProductsPlanItem.map((item, index) => {
                  if (index % 2 === 0) {
                    return (
                      <>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <div className={styles.ProductsItemPic}><img src={item.pic} alt='' /></div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <div className={styles.ProductsPlan}>
                            <div>{item.title}</div>
                            <p>{item.intro}</p>
                          </div>
                        </Col>
                      </>
                    )
                  } else {
                    return (
                      <>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <div className={styles.ProductsPlan}>
                            <div>{item.title}</div>
                            <p>{item.intro}</p>
                          </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <div className={styles.ProductsItemPic}><img src={item.pic} alt='' /></div>
                        </Col>
                      </>
                    )
                  }
                })
              }
            </Row>
          </div> 
          <div className={styles.ProductsService}>
            <h3 className={styles.ProductsCore}>服务流程</h3>
            <p className={styles.ProductsCoreIntro}>我们转着圈的将产品做好</p>
            <img src={ProductsServicePic} alt='' />
          </div>
        </div>
      </div>
    )
  }
}