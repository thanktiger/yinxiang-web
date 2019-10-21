import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Link from 'umi/link';
import styles from './index.less'

import productCover1 from '../../assets/productListItem1.png'
import productCover2 from '../../assets/productListItem2.png'
import productCover3 from '../../assets/productListItem3.png'
import productCover4 from '../../assets/productListItem4.png'
import productCover5 from '../../assets/productListItem5.png'
import productCover6 from '../../assets/productListItem6.png'
import productCover7 from '../../assets/productListItem7.png'
import productCover8 from '../../assets/productListItem8.png'
import productCover9 from '../../assets/productListItem9.png'

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
  },
  {
    avatar: productCover5,
    title: '湘江新区庆“七一”支部党建成果汇报会圆满落地',
  },
  {
    avatar: productCover6,
    title: '湖南金融中心首次向全省全市人民亮出了金质名片',
  },
  {
    avatar: productCover7,
    title: '凯德壹中心商业综合体外立面广告位',
  },
  {
    avatar: productCover8,
    title: '洋湖体育公园导视系统工程',
  },
  {
    avatar: productCover9,
    title: '先导展厅施工管理',
  }
]

export default class Product extends Component {
  render () {
    return (
      <div>
        <div className={styles.productListCover}>
          <h2>优秀案例</h2>
          <p>精心打造各种品牌活动，为客户提供对外展示的窗口</p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productListTop}>
          <Row>
            {
              productListItem.map((item, index) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <div className={styles.productListItem}>
                      <img src={item.avatar} alt='' />
                      <Link to='./productDetail'>{item.title}</Link>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          </div>

        </div>
      </div>
    )
  }
}