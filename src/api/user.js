import axios from '../config/axios'

export default class User {
  static async login (data={}) {
    const req = await axios.post('user/login', data)
    return req
  } 
}