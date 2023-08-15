import Vue from 'vue'
export const SHOW = "show"

export default {//定义的都是void函数没有返回值
  add(state) {
    state.count++//通过函数改变state,不用return
  },
  reduce(state) {
    state.count--
  },
  mulAdd(state, payload) {
    state.count += payload
  },
  mulStu(state, payload) {
    state.student.push(payload)
  },
  [SHOW](state) {
    // state.student[0].hello = '你好'
    // Vue.set(state.student[0], 'hello', '你好')

    //每个模块化都有自己的作用域,外部index.js的vue依赖无法访问,重新引入vue依赖
    Vue.delete(state.student[0], 'work')
  },
  change(state) {
    state.student.splice(0, 1)
  }

}