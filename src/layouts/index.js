import React, { Component } from 'react'
import Link from 'umi/link'
import { Icon } from 'antd'
import styles from './index.less'
import logo from '../assets/logo.png'
import qrcode from '../assets/qrcode.png'

const navList = [
  {
    name: '关于银象',
    url: './',
    subNavList: [
      {
        name: '公司概述',
        url: './about'
      },
      {
        name: '灵感空间',
        url: './about'
      },
      {
        name: '公司团队',
        url: './about'
      },
      {
        name: '联系我们',
        url: './about#contact'
      },
      {
        name: '先导影业',
        url: './'
      }
    ]
  },
  {
    name: '新闻动态',
    url: './companyNews',
    subNavList: [
      {
        name: '公司概述',
        url: './about'
      }
    ]
  },
  { name: '主营业务', url: './products' },
  { name: '项目案例', url: './productList' },
  { name: '党建活动', url: './partyBuilding' },
  { name: '加入我们', url: '././about#Join' }
]

export default class BasicLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navIndex: -1,
      showMobileNav: false,
      current: 'mail',
    }
  }

  showSubNavList = (index) => {
    console.log(index)
    clearTimeout(this.timer)
    this.setState({
      navIndex: index
    })
  }

  hideSubNavList = () => {
    this.timer = setTimeout(() => {
      this.setState({
        navIndex: -1
      })
    }, 300)
  }

  showMobileNavList = () => {
    this.setState({
      showMobileNav: !this.state.showMobileNav
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.navBar}>
            <a className={styles.navLogo} href='./'><img src={logo} alt='' /></a>
            <div className={styles.navList}>
              {
                navList.map((item, index) => {
                  return (
                    <Link
                      className={styles.navListItem}
                      key={index}
                      to={item.url}
                      onMouseEnter={() => {this.showSubNavList(index)}}
                      onMouseLeave={() => {this.hideSubNavList()}}>
                      {item.name}
                      {
                        (item.subNavList && this.state.navIndex === index) &&
                        <div className={styles.subNavList} onMouseEnter={() => {this.showSubNavList(index)}}>
                          {
                            item.subNavList.map((subItem, subIndex) => {
                              return (
                                <Link to={subItem.url} key={subIndex}>{subItem.name}</Link>
                              )
                            })
                          }
                        </div>
                      }
                    </Link>
                  )
                })
              }
            </div>
            <div className={styles.mobileNavList}>
              <Icon type="menu" style={{ color: '#FFFFFF', fontSize: 22 }} onClick={() => {this.showMobileNavList()}} />
              {
                this.state.showMobileNav && <div className={styles.subNavList}>
                  {
                    navList.map((item, index) => {
                      return (
                        <Link to={item.url} key={index}>{item.name}</Link>
                      )
                    })
                  }
                </div>
              }
            </div>
          </div>
        </div>
        {this.props.children}
        <div className={styles.footer}>
          <div className={styles.footerMain}>
            <div className={styles.footerLeft}>
              <div className={styles.footerLink}>
                <Link to={'./about'}>关于我们</Link>
                <span>|</span>
                <Link to={'/'}>加入我们</Link>
                <span>|</span>
                长沙先导投资控股集团有限公司
              </div>
              <div className={styles.copyRight}>
                <span>Copyright © Changsha Pilot Enshine culture media CO.,Ltd.</span>
                <span>湘ICP备12009333号-1</span>
              </div>
            </div>
            <div className={styles.footerRight}>
              <img src={qrcode} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
