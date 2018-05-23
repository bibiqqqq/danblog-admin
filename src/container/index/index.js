import React from 'react'
import "./index.css"
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import article from '../article/index'
import addArticle from '../addArticle/index'

class Index extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <div className="index">
        <div className="slider">
          <Link to='/article/list' className="text">
            文章管理
          </Link>
          <Link to="/article/add" className="text">
            添加文章
          </Link>
        </div>
        <div className="content">
          <Switch>
            <Route path="/article/list" component={article}></Route>
            <Route path="/article/add" component={addArticle}></Route>
            <Redirect to="/article/list"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Index