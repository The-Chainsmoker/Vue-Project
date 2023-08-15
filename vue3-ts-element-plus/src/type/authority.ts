export interface ListInt {
  name: string
  roleId: number
  roleList?: ListInt[]
  viewRole?: string
}

//接收其他的参数使用构造函数
export class InitData {
  id: number
  authority: number[]
  constructor(id: number, authority: number[]) {
    this.id = id
    this.authority = authority
  }
  list: ListInt[] = []
  treeRef: any
}