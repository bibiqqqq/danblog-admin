import React from 'react'
import axios from 'axios'
import url from '../../config'
import "./index.css"
import { Button } from 'antd'
class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  componentWillMount () {
    this.getArticleList()
  }
  handleDeleteArticle (id) {
    axios.post(`${url}/article/${id}/remove`)
      .then(res => {
        this.getArticleList()
      })
  }
  handleUpdateArticle (id) {
    
  }
  getArticleList () {
    axios.get(`${url}/article/list`, { params: { pageSize: 100 } })
      .then(res => {
        this.setState({ articles: res.data.data.list })
      })
      .catch(e => console.log(e))
  }
  render() {
    const articles = this.state.articles
    return(
      <div className="article">
        {articles.map((item, i) => (
          <div className="article-item" key={i}>
            <span>{item.title}</span>
            <span>{item._id}</span>
            <span>{item.tag}</span>
            <span>{item.updateAt}</span>
            <Button className="update-btn" onClick={this.handleUpdateArticle.bind(this, item._id)}>修改文章</Button>
            <Button className="delete-btn" onClick={this.handleDeleteArticle.bind(this, item._id)}>删除</Button>
          </div>
        ))}
      </div>
    )
  }
}
export default Article