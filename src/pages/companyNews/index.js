import React, { Component } from 'react'
import Link from 'umi/link';
import styles from './index.less'

const tabList = ['全部动态', '集团动态', '业务动态', '通知公告']

const newsList = [
  {index: "20191025_1613_0", title: "银象传媒党支部开展“不忘初心、牢记使命”主题教育心得交流座谈会", abstract: "根据支部“不忘初心、牢记使命”主题教育工作部署安排，10月24日下午，银象传媒党支部在公司919会议…一步规范党员徽章管理的工作提示》，会议由组织委员陈文同志主持，支部党员和入党积极分子参加了座谈会。", tag: "集团动态", date: "2019/10/25 16:13"},
  {index: "20191017_1547_0", title: "银象传媒支部开展支部书记讲专题党课活动", abstract: "根据“三会一课”制度和 “不忘初心、牢记使命”主题教育工作部署，10月17日上午，银象传媒支部在公司…支部书记讲专题党课活动，并组织观看了《初心与使命》廉政警示教育片，支部全体党员和入党积极分子参加。", tag: "集团动态", date: "2019/10/17 15:47"},
  {index: "20191012_1639_0", title: "银象传媒支部开展“不忘初心、牢记使命”主题教育集中学习杜家豪书记专题党课相关精神", abstract: "根据市委主题办的通知和集团党委要求，10月12日上午，银象传媒支部在公司919会议室集中学习了省委书…重自觉的共产党员》专题党课的相关精神。本次活动由支部书记肖宇同志主持，支部党员和入党积极分子参加。", tag: "集团动态", date: "2019/10/12 16:39"},
  {index: "20191012_1616_0", title: "不忘初心学党史 牢记使命扬传统————银象传媒党支部开展10月主题党日活动", abstract: "为牢记党的光荣历史，继承发扬党的优良传统。根据“不忘初心、牢记使命”主题教育的工作安排与部署，10月…30余人前往中国共产党长沙历陈列馆参观学习，缅怀毛泽东、杨开慧等革命先辈，重温共产党员的初心使命。", tag: "集团动态", date: "2019/10/12 16:16"},
  {index: "20190911_1514_0", title: "加强思想教育 引领党性升华————先导银象传媒党支部组织开展第三季度集中学习", abstract: "按照集团党委的统一部署，9月10日下午，先导银象传媒支部在公司919会议室开展第三季度集中学习，本次活动由支部书记肖宇同志主持，支部全体党员参加。", tag: "集团动态", date: "2019/09/11 15:14"},
  {index: "20190830_1901_0", title: "以制为尺、规范管理————银象传媒公司开展招采合约类制度培训", abstract: "为切实落实市委巡察组和集团巡察整改办的工作要求，严格规范内部管理流程，8月30日上午，银象传媒公司组织了招采合约相关制度培训。此次培训由副总经理陈文主持，全体员工参加。", tag: "集团动态", date: "2019/08/30 19:01"},
  {index: "20190820_1719_0", title: "党徽闪耀 信仰发光——银象传媒公司党支部第一次全体党员大会顺利召开", abstract: "8月20日上午，长沙先导银象文化传媒有限公司党支部（以下简称“银象传媒公司党支部”）第一次全体党员大…、常务副总经理危建新，集团党群工作部部长易晓姝应邀出席，银象公司全体党员及员工共32人参加了会议。", tag: "集团动态", date: "2019/08/20 17:19"},
  {index: "20190724_1926_0", title: "银象公司召开半年度经营分析会", abstract: "7月24日上午，银象公司召开半年度经营分析会，全面总结上半年的成绩和问题，为下半年的工作理方向、找重点。会议由常务副总经理陈一琪主持，公司高管和全体员工参加。", tag: "集团动态", date: "2019/07/24 19:26"},
  {index: "20190510_1630_0", title: "银象公司召开2019年一季度经营分析会", abstract: "5月10日上午，长沙先导银象文化传媒有限公司召开2019年一季度经营分析会，公司高管、各部门正副职及项目负责人参加会议。会议对公司一季度经营情况进行了通报，并提出了下一步的工作思路与计划。", tag: "集团动态", date: "2019/05/10 16:30"},
  {index: "20190313_1754_0", title: "银象传媒全员学习先导控股集团2019年度党风廉政建设和反腐败工作会议精神", abstract: "3月13日下午，银象传媒组织专题会议传达并学习集团2019年党风廉政建设和反腐败工作会议精神。会议由公司总经理吴铮主持，公司全体员工参加。", tag: "集团动态", date: "2019/03/13 17:54"},
  {index: "20190311_0859_0", title: "不负春光好 花香竞芳菲——先导银象传媒“三八”妇女节花艺沙龙活动温馨举办", abstract: "若有百花香，当歌三月春。不负春光好，花香竞芳菲。", tag: "集团动态", date: "2019-03-11 08:59"},
  {index: "20190306_1639_0", title: "筑梦新征程 谱写新篇章————集团党委委员、常务副总经理危建新送干部到银象传媒就职", abstract: "2019年3月6日上午，集团党委委员、常务副总经理危建新送银象传媒董事长肖宇同志到公司就职。会议由集团党委委员、工会主席张奋主持，人力资源部总经理文烽、银象传媒股东单位代表及公司全体员工参加。", tag: "集团动态", date: "2019/03/06 16:39"},
  {index: "20190301_0927_0", title: "银象传媒荣获腾讯广告2018年度突破服务商称号", abstract: "2月26日，腾讯广告“合力增长”2019区域及中长尾渠道服务商大会在广东珠海隆重召开，银象传媒作为湖南省内腾讯区域及行业授权服务代理商单位参加此次大会，并荣获腾讯广告2018年度突破服务商的称号。", tag: "业务动态", date: "2019/03/01 09:27"},
  {index: "20190116_1631_0", title: "凝心聚力点燃激情铸团队 信心满怀撸起袖子加油干————银象传媒开展全员知识竞赛", abstract: "为丰富公司文化活动，加强团队文化建设，促进部门、同事之间的认识与交流，增强公司凝聚力，1月15日下午…19会议室开展了员工知识竞赛，公司全员由高管带队分成五组参与比赛，现场气氛紧张热烈，欢声笑语不断。", tag: "业务动态", date: "2019/01/16 16:31"},
  {index: "20180727_1723_0", title: "银象传媒携手腾讯参加2018腾讯社交广告区域营销峰会", abstract: "7月26日下午14:00，2018腾讯社交广告区域营销峰会在湖南凯宾斯基酒店隆重举行，长沙先导银象文…授权服务代理商单位参加此次峰会，作为核心代理商，先导银象传媒携手腾讯将创建社交广告业务发展新时代。", tag: "业务动态", date: "2018/07/27 17:23"},
  {index: "20180629_1223_0", title: "集团党委书记、董事长刘继雄一行调研先导银象传媒公司", abstract: "6月28日上午，集团党委书记、董事长刘继雄一行莅临先导银象传媒公司调研。集团党委委员、工会主席张奋，集团办公室（董事会办公室）总经理杨剑锋，先导银象传媒公司董事长刘训富及班子成员参加调研。", tag: "业务动态", date: "2018/06/29 12:23"},
  {index: "20180625_1408_0", title: "体育新时代 银象新速度", abstract: "6月23日上午9点，由银象传媒策划执行的2018年全国青少年体育冬夏令营（湖南站）暨湖南省青少年“体…那，长沙市学生代表，全省14个市州近1200人到现场共同见证了今夏最阳光、热情、青春的夏令营活动。", tag: "业务动态", date: "2018/06/25 14:08"},
  {index: "20180612_0945_0", title: "银象传媒“走出去”战略初见成效", abstract: "2017年5月，先导控股集团联合优质社会企业共同成立了银象传媒。一直以来，银象传媒以“城市形象顶层设…量地完成了多项大型活动执行及形象设计，发展与锻炼了全新的团队，为实施“走出去”战略打下了品牌基础。", tag: "业务动态", date: "2018/06/12 09:45"},
  {index: "20180608_0947_0", title: "正青春，创芳华”——银象传媒开展中层岗位内部竞聘", abstract: "为优化公司内部人才配置，满足公司发展对人才的需求，同时为各岗位员工提供广阔的职业发展空间，6月6日下午，银象传媒组织开展部分中层岗位内部公开竞聘活动。", tag: "集团动态", date: "2018/06/08 09:47"},
  {index: "20180503_1604_0", title: "同心并力，银象传媒牵手腾讯进军社交广告领域", abstract: "近日，长沙先导银象文化传媒有限公司（以下简称公司）正式获得腾讯社交广告核心服务商的授权，开拓公司营销新领域，实现了新媒体线上的重大突破。", tag: "业务动态", date: "2018/05/03 16:04"},
  {index: "20180314_1626_0", title: "立于市场新风口，异形创意让视界更精彩——银象传媒开展LED贴膜屏业务培训", abstract: "2018年3月12日，长沙先导银象文化传媒有限公司在湘江时代919会议室开展了LED贴膜屏专业培训，邀请国内一流专家进行业务技术讲解，银象传媒全体员工积极参与了此次培训。", tag: "集团动态", date: "2018/03/14 16:26"},
  {index: "20180312_1504_0", title: "争当新女性 打造新形象 再展新作为——2018年长沙先导银象文化传媒公司分工会委员会“三八”妇女节活动小记", abstract: "3月8日上午，长沙市先导控股集团第一次全体妇女大会暨先进个人表彰会议于湘江时代308会议室隆重召开，…集团党委书记兼董事长刘继雄等集团领导及集团全体女职工参会。银象传媒13名女职工积极参加了此次会议。", tag: "集团动态", date: "2018/03/12 15:04"},
  {index: "20180212_1407_0", title: "先导银象公司召开2017年度工作总结表彰大会——银象征途 星辰大海", abstract: "2018年2月11日上午，先导银象公司召开2017年度工作总结表彰大会。先导控股集团党委委员、工会主席张奋出席会议，先导银象公司领导班子及全体员工共计31人参加会议。", tag: "集团动态", date: "2018/02/12 14:07"},
  {index: "20180201_1405_0", title: "刘继雄董事长调研先导银象传媒公司——创新创造发展，打响银象品牌", abstract: "1月31日下午，先导控股集团党委书记、董事长刘继雄一行莅临先导银象传媒公司"},
]
export default class Product extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  onChangeTab = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render () {
    let { tabIndex } = this.state
    return (
      <div>
        <div className={styles.productListCover}>
          <h2>公司动态</h2>
          <p>深入学习理解众多行业，与品牌伙伴一起成长</p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.companyNewsTab}>
            {
              tabList.map((item, index) => {
                return (
                  <div
                    className={tabIndex === index ? styles.companyNewsTabHover : ''}
                    key={index}
                    onClick={() => { this.onChangeTab(index) }}>{item}</div>
                )
              })
            }
          </div>
          {
            tabIndex === 0 && <div className={styles.companyNewsList}>
              {
                newsList.map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to={`./companyNewsDetail?title=${item.index}`} target='_blank'>{item.title}</Link>
                        <p>{item.abstract}</p>
                        <div className={styles.companyNewsListItemLeftInfo}>
                          <span>{item.tag}</span>
                          <time>{item.date}</time>
                        </div>
                      </div>
                      {item.cover && <img className={styles.companyNewsListItemRight} src={item.cover} alt='' />}
                    </div>
                  )
                })
              }
            </div>
          }
          {
            tabIndex === 1 && <div className={styles.companyNewsList}>
              {
                newsList.filter((data) => {
                  return data.tag === '集团动态'
                }).map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to={`./companyNewsDetail?title=${item.index}`} target='_blank'>{item.title}</Link>
                        <p>{item.abstract}</p>
                        <div className={styles.companyNewsListItemLeftInfo}>
                          <span>{item.tag}</span>
                          <time>{item.date}</time>
                        </div>
                      </div>
                      {item.cover && <img className={styles.companyNewsListItemRight} src={item.cover} alt='' />}
                    </div>
                  )
                })
              }
            </div>
          }
          {
            tabIndex === 2 && <div className={styles.companyNewsList}>
              {
                newsList.filter((data) => {
                  return data.tag === '业务动态'
                }).map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to={`./companyNewsDetail?title=${item.index}`} target='_blank'>{item.title}</Link>
                        <p>{item.abstract}</p>
                        <div className={styles.companyNewsListItemLeftInfo}>
                          <span>{item.tag}</span>
                          <time>{item.date}</time>
                        </div>
                      </div>
                      {item.cover && <img className={styles.companyNewsListItemRight} src={item.cover} alt='' />}
                    </div>
                  )
                })
              }
            </div>
          }
          {
            tabIndex === 3 && <div className={styles.companyNewsList}>
              {
                newsList.filter((data) => {
                  return data.tag === '通知公告'
                }).map((item, index) => {
                  return (
                    <div className={styles.companyNewsListItem} key={index}>
                      <div className={[`${styles.companyNewsListItemLeft}`, item.cover ? `${styles.calcWidth}` : ''].join(' ')}>
                        <Link to={`./companyNewsDetail?title=${item.index}`} target='_blank'>{item.title}</Link>
                        <p>{item.abstract}</p>
                        <div className={styles.companyNewsListItemLeftInfo}>
                          <span>{item.tag}</span>
                          <time>{item.date}</time>
                        </div>
                      </div>
                      {item.cover && <img className={styles.companyNewsListItemRight} src={item.cover} alt='' />}
                    </div>
                  )
                })
              }
            </div>
          }
        </div>
      </div>
    )
  }
}