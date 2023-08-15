import axios from 'axios'
//axios 继承了Promise的then,catch方法,axios.create创建,要调用axios实例才能用
/* 

*/
//模块封装四
export function request(config) {

  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //axios的拦截器
  //请求拦截(网络请求前执行)
  //请求拦截做的事:
  //1.不如config中的一些信息不符合服务器的要求
  //2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标(成功后到那里隐藏掉)
  //3.某些网络浦求(比如登录(token))必须携带一些特殊的信息
  instance.interceptors.request.use(
    config => {//confi是配网络置请求信息
      console.log(config);
      return config //放行返回config
    },
    err => {

    })

  //响应拦截(网络请求后执行)
  //响应拦截做的事:
  //过滤掉无用的信息如status,拿出数据重新返回

  instance.interceptors.response.use(
    res => {
      console.log(res)
      return res.data //放行返回res
    },
    err => {

    }
  )

  return instance(config)
}

//模块封装三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance1(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//模块封装二
// export function request(config) {
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance1(config.baseConfig)
//     .then(res => {
//       // console.log(res)
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       config.failure(err)
//     })
// }

//模块封装一
// export function request(config, success, failure) {
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance1(config)
//     .then(res => {
//       // console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       failure(err)
//     })
// }


//局部配置
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })



















// .then(axios.spread((res1, res2) => {//axios的spread进行分割
//     console.log(res1)
//     console.log(res2)
// }))
// .then(([res1, res2]) => {//es6解构把储存在数组进行分割
//   console.log(res1)
//   console.log(res2)
// })

// const url = 'http://123.207.32.32:8000/home/multidata'
//直接发送get和post的请求
// axios.get(url).then(res => {
//   console.log(res)
// })

// axios.post(url).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'//默认基地址
// axios.defaults.timeout = 5000 //默认的请求最长时间

// axios.all([
//   axios({//自带返回Promise
//     url: '/home/multidata',
//     method: 'get'
//   }),
//   axios({//http://123.207.32.32:8000/data?type=sell&page=4
//     url: '/data',
//     method: 'get',
//     params: {
//       type: 'sell',
//       page: 4
//     }
//   })])
//   .then(res => {
//     console.log(res)//储存在数组
//   })

//当访问的是不同服务器时如localhost:8080 / localhost:8081,
//使用axios全局配置基地址只是一个是不能满足的
//所以创建对应的axios实例,配置基地址,