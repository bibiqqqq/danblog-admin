import React from 'react'
import "./index.css"
import axios from 'axios'
import url from '../../config'
import { Button, Input } from 'antd'
const { TextArea } = Input
export default class AddArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      tag: '',
      content: ''
    }
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleChangeInput (key, e) {
    this.setState({
      [key]: e.target.value
    })
  }
  async handleConfirm () {
    await axios.post(`${url}/article/create`, {...this.state})
    this.setState({content: ''})
  }

  render () {
    const { title, tag, content } = this.state
    return (
      <div className="add-article">
        <div className="title">
          <span>title</span>
          <Input value={title} onChange={this.handleChangeInput.bind(this, 'title')} className="input" placeholder="title"/>
        </div>
        <div className="tag">
          <span>tag</span>
          <Input value={tag} onChange={this.handleChangeInput.bind(this, 'tag')} className="input" placeholder="tag"/>
        </div>
        <div className="content">
          <span>content</span>
          <TextArea value={content} onChange={this.handleChangeInput.bind(this, 'content')} rows={10} className="input" placeholder="content"/>
        </div>
        <Button onClick={this.handleConfirm} type="primary" className="button">保存</Button>
      </div>
    )
  }
}