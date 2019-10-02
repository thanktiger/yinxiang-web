import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.nav}>这是导航</div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
