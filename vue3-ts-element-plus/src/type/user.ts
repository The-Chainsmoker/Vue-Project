export interface ListInt {
  id: number,
  nickName: string,
  userName: string,
  role: roleInt[]
}

export interface roleInt {
  role: number,
  roleName: string
}

export interface SelevtDataInt {
  role: number,
  nickName: string
}

export interface RoleInt {
  authority: number[]
  roleId: number
  roleName: string
}

//用户数组中活跃的信息
export interface activeInt {
  id: number,
  nickName: string,
  userName: string,
  role: number[]
}

//显示数据
export class dataInt {
  //查询列表
  selectData: SelevtDataInt = {
    role: 0,
    nickName: ''
  }
  //用户信息数据
  list: ListInt[] = []
  //角色信息数据
  roleList: RoleInt[] = []
  isShow = false
  activeUser: activeInt = {
    id: 0,
    nickName: '',
    userName: '',
    role: []
  }
}