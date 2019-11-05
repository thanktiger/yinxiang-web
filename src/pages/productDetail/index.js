import React, { Component } from 'react'
import styles from './index.less'

export default class Product extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cover: '',
      title: '',
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
      } else {
        array.push(item)
        console.log('array is:', array)
        this.setState({
          content: array
        })
      }
      return ''
    })
  }

  render () {
    let { cover, title, content } = this.state
    return (
      <div>
        {
          cover
          ? <img className={styles.productCover} src={cover} alt='' />
          : <div className={styles.productHeader} />
        }
        <div className={styles.productContainer}>
          <div className={styles.productParkBox}>{title}</div>
          <div className={styles.productRichText}>
            {
              content && content.map((data, index) => {
                if (data.type === 'p') {
                  return (
                    <p>{data.value}</p>
                  )
                } else if (data.type === 'img') {
                  return (
                    <img className={styles.productPicOne} src={`/json/${data.value}`} alt='' />
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