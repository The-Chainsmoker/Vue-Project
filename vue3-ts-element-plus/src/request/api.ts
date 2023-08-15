import service from "./";

interface loginData {
  username: string,
  password: string
}
//登录接口
export let login = (data: loginData) => {
  return service({
    url: "/login",
    method: "POST",
    data
  })
}
//商品列表接口
export function goodsList() {
  return service({
    url: '/getGoodsList',
    method: 'Get'
  })
}
//用户列表接口
export function getUserList() {
  return service({
    url: '/getUserList',
    method: 'Get'
  })
}
//角色列表接口
export function getRoleList() {
  return service({
    url: '/getRoleList',
    method: 'Get'
  })
}

//权限列表
export function getAuthorityList() {
  return service({
    url: '/getAuthorityList',
    method: 'get'
  })
}

export default {
  login,
  goodsList,
  getUserList,
  getRoleList,
  getAuthorityList
}