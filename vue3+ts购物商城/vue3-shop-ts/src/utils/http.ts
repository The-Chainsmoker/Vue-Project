import axios,{ type AxiosProxyConfig,type AxiosResponse } from "axios"

const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
    /* 在跨域请求中携带凭据信息 */
    // withCredentials:true

    /* 
      如果客户端配置了withCredentials: true，
      服务器端也需要相应地配置以允许携带凭证。
      通常，服务器需要在响应头中设置Access- Control - Allow - Credentials: true，
      并且Access - Control - Allow - Origin不能使用通配符 *，而必须明确指定允许的源‌1。
      如果服务器端没有正确配置，客户端将无法携带凭证进行跨域请求。
    */
})
// axios请求拦截器
instance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => {
    if (res.data) {
        
    }
    return res.data
}, e => {
    return Promise.reject(e)
})


export default instance