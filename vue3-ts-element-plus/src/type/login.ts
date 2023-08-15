export interface LoginFormInt {
  username: string,
  password: string
}

export class LoginData {
  //实现接口要实现接口的属性方法
  ruleForm: LoginFormInt = {
    username: '',
    password: ''
  }
}