import React from 'react'
import getArticle from '../../api/article'
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
  async handleDeleteArticle (id) {
    await getArticle.removeArticle({_id: id})
    this.getArticleList()
  }
  handleUpdateArticle (id) {
    
  }
  async getArticleList () {
    const res = await getArticle.getArticleList({ pageSize: 100 })
    this.setState({ articles: res.data.data.list })
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