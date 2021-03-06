import React, { Component } from 'react'
import Link from 'umi/link'
import { Icon } from 'antd'
import styles from './index.less'
import logo from '../assets/logo.png'
import qrcode from '../assets/qrcode.png'

const navList = [
  {
    name: '关于银象',
    url: './about',
    subNavList: [
      {
        name: '公司概述',
        url: './about',
        anchorName: 'company'
      },
      {
        name: '灵感空间',
        url: './about',
        anchorName: 'spacing'
      },
      {
        name: '公司团队',
        url: './about',
        anchorName: 'team'
      },
      {
        name: '联系我们',
        url: './about',
        anchorName: 'contact'
      },
      {
        name: '先导影业',
        url: './movie'
      }
    ]
  },
  { name: '新闻动态', url: './companyNews' },
  { name: '主营业务', url: './products' },
  { name: '项目案例', url: './productList' },
  { name: '党建活动', url: './partyBuilding' },
  { name: '加入我们', url: './about', anchorName: 'join' }
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

  scrollToAnchor = (anchorName) => {
    setTimeout(() => {
      if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
      }
    }, 100)
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
            <Link className={styles.navLogo} to='./'><img src={logo} alt='' /></Link>
            <div className={styles.navList}>
              {
                navList.map((item, index) => {
                  return (
                    <Link
                      className={styles.navListItem}
                      key={index}
                      to={item.url}
                      onClick={() => {this.scrollToAnchor(item.anchorName)}}
                      onMouseEnter={() => {this.showSubNavList(index)}}
                      onMouseLeave={() => {this.hideSubNavList()}}>
                      {item.name}
                      {
                        (item.subNavList && this.state.navIndex === index) &&
                        <div className={styles.subNavList} onMouseEnter={() => {this.showSubNavList(index)}}>
                          {
                            item.subNavList.map((subItem, subIndex) => {
                              return (
                                <Link
                                  to={subItem.url}
                                  key={subIndex}
                                  onClick={() => {this.scrollToAnchor(subItem.anchorName)}}>{subItem.name}</Link>
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
                <Link to={'/about'} onClick={() => {this.scrollToAnchor('join')}}>加入我们</Link>
                <span>|</span>
                <a href={'https://www.cpih.com/'}>长沙先导投资控股集团有限公司</a>
              </div>
              <div className={styles.copyRight}>
                <span>Copyright © Changsha Pilot Enshine culture media CO.,Ltd.</span>
                <a href='http://www.beian.miit.gov.cn/'>湘ICP备19021825号-1</a>
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
