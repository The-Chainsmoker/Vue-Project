import axios from 'axios'
const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=uft-8"
  }
})
//config发起请求的信息包括headers(请求头)
service.interceptors.request.use((config) => {
  //默认 config.headers 是个对象

  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
})
//响应拦截
service.interceptors.response.use((res) => {
  const code: number = res.data.code
  //请求状态不是200 (成功状态)
  if (code != 200) {
    return Promise.reject(res.data)
  }
  //过滤datad其他信息
  return res.data
}, (err) => {
  //err请求错误信息
  console.log(err)
})

export default service