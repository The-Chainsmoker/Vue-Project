

export default {
  getStu(state) {
    return state.student.filter(item => item.age >= 20)
  },
  getStuAge(state) {
    return (res) => {//返回函数
      return state.student.filter(item => item.age >= res)//返回值
    }
  },
  getStuLength(state, getters) {//第二个参数是store的getters对象
    return getters.getStu.length
  }
}
