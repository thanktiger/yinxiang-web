import styles from './index.less';
import logo from '../assets/logo.png'

const navList = [
  '关于银象',
  '新闻动态',
  '主营业务',
  '项目案例',
  '党建活动',
  '加入我们',
]

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navBar}>
          <a className={styles.navLogo} href='./home'><img src={logo} alt='' /></a>
          <div className={styles.navList}>
            {
              navList.map((item, index) => {
                return (
                  <div className={styles.navListItem} key={index}>{item}</div>
                )
              })
            }
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
