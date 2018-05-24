import axios from 'axios'
const instance = axios.create({
  timeout: 5000, //超时时间
  baseURL: 'http://localhost:9093' 
})
// request拦截
instance.interceptors.request.use(
  req => {
    const token = sessionStorage.getItem('token')
    const url = req.url
    const publicUrl = ['/user/login']
    if (publicUrl.indexOf(url) === -1) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  },
  err => {
    throw new Error('发起请求出错')
  }
)
//response拦截
// instance.interceptors.response.use(
//   res => {
//     return res
//   },
//   err => {
//     // 本地环境错误
//     if (err.message === "Network Error") {
//       throw new Error( '网络出错，请稍后再试！')
//     } else if (err.message.indexOf('time')!==-1) {
//       throw new Error( '请求超时，请稍后再试！')
//     } else if (err.response.status===401) {
//       history.push('/login') // 当cookie中存储的token过期后自动跳转到登录页
//     } else if (err.response.status===500) {
//       throw new Error( '服务器出错！')
//     } else {
//       throw err   // 非本地环境错误
//     }
//   }
// )

export default instance