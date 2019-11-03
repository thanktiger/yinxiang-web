import React, { Component } from 'react'
import styles from './index.less'

export default class CompanyNewsDetail extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cover: '',
      title: '',
      tag: '',
      date: '',
      content: ''
    }
  }

  componentDidMount () {
    this.importJson();
  }

  importJson = async () => {
    let array = []
    let { title } = this.props.location.query
    const data = await import (`../../../public/json/${title}.json`)
    // 格式化数据
    data.default.map((item, index) => {
      if (item.type === 'cover') {
        this.setState({
          cover: item.value
        })
      } else if (item.type === 'title') {
        this.setState({
          title: item.value
        })
      } else if (item.type === 'tag') {
        this.setState({
          tag: item.value
        })
      } else if (item.type === 'date') {
        this.setState({
          date: item.value
        })
      } else {
        array.push(item)
        this.setState({
          content: array
        })
      }
      return ''
    })
  }

  render () {
    let { cover, title, tag, date, content } = this.state
    return (
      <div className={styles.newsDetail}>
        <div className={styles.newsDetailHeader}>
          <div className={styles.newsDetailHeaderTitle}>
            <p>{title}</p>
          </div>
        </div>
        <div className={styles.newsDetailContent}>
          <div className={styles.newsDetailContentInfo}>{tag} | {date}</div>
          <div className={styles.newsRichText}>
            {
              content && content.map((data, index) => {
                if (data.type === 'p') {
                  return (
                    <p key={index}>{data.value}</p>
                  )
                } else if (data.type === 'img') {
                  return (
                    <img key={index} src={`/json/${data.value}`} alt='' />
                  )
                } else {
                  return null
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}