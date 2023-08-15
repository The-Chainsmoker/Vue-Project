import axios  from "axios";

export function request(config){
    const instance=axios.create({
        baseURL:'http://localhost:3000',
        timeout:5000,
        //解决了跨域问题 这个设置网站可以带cookie请求
        withCredentials: true //关键
    })
    // instance.interceptors.request.use(config => {
    //     return config
    // }, err => {
    //     console.log(err);
    // })
    // instance.interceptors.response.use(res => {
    //     return res
    // }, err => {
    //     console.log(err);
    // })
    return instance(config)
    //拼接网络请求的对象参数
}


// 方法一
// axios.defaults.baseURL='http://localhost:3000'
// axios.defaults.timeout=5000
//设置全局地址请求和访问地址请求的毫秒

// axios({
//     url:'/search',
//     methods:'get',
//     params:{
//         keywords:'taylor',
//         type:1004
//     }
// }).then(res=>{
//     console.log(res);
// })

// 方法二
// 创建对应的axios的实例
// const  instance1=axios.create({
//     baseURL:'http://localhost:3000',
//     timeout:5000
// })
//
// instance1({
//     url:'/search',
//     methods:'get',
//     params:{
//         keywords:'taylor',
//         type:1004
//     }
// }).then(res=>{
//     console.log(res)
// })