import React from 'react'
import { Icon, Input, Button } from 'antd'
import './login.css'
import axios from 'axios'
import url from '../../config'
// import { Redirect } from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      auth: false,
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  handleChangeUsername(e) {
    this.setState({ username: e.target.value })
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }
  handleConfirm() {
    const data = { username: this.state.username, password: this.state.password }
    console.log(url)
    const posturl = `${url}/user/login`
    axios.post(posturl, data)
      .then(res => {
        if (res.data.code === 0) {
          this.setState({ auth: true })
        } 
      })
  }
  render() {
    return(
      <div className="login">
        {/* {this.state.auth ? (<Redirect to="/" />) : null} */}
        <Input value={this.state.username} onChange={this.handleChangeUsername} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        <Input className="login-input" value={this.state.password} onChange={this.handleChangePassword} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        <Button onClick={this.handleConfirm} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </div>
    )
  }
}
export default Login