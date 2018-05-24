import React from 'react'
import { Icon, Input, Button } from 'antd'
import './login.css'
import User from '../../api/user'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  handleChangeInput (key, e) {
    this.setState({
      [key]: e.target.value
    })
  }
  async handleConfirm() {
    const { username, password } = this.state
    const res = await User.login({ username, password })
    sessionStorage.setItem('token', res.data.data.token)
    this.props.history.push('/article')
  }
  render() {
    const { username, password } = this.state
    return(
      <div className="login">
        <Input 
          value={username} 
          onChange={this.handleChangeInput.bind(this, 'username')} 
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          placeholder="Username" />
        <Input 
          className="login-input" 
          value={password} 
          onChange={this.handleChangeInput.bind(this, 'password')} 
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          type="password" 
          placeholder="Password" />
        <Button onClick={this.handleConfirm} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </div>
    )
  }
}
export default Login