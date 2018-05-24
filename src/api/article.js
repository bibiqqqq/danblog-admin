import axios from '../config/axios'

export default class Article {
  static async getArticleList (query={}) {
    const req = await axios.get('/article/list', { params: query })
    return req
  }
  static async removeArticle (data={}) {
    const req = await axios.post(`/article/${data._id}/remove`)
    return req
  }
  static async createArticle (data={}) {
    const req = await axios.post(`/article/create`, data)
    return req
  }
  static async updateArticle (data={}) {
    const req = await axios.post(`/article/${data._id}/create`, data)
    return req
  }
}