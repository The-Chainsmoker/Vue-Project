import Vue from 'vue'
import Vuex from 'vuex'

//使用插件
Vue.use(Vuex)

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './module/moduleA'
import { moduleB } from './module/moduleB'

// VueX中的核心内容
// state 存放Vue对象的状态
// mutations state成员操作(本能同步操作)
// getters 加工state成员给外界
// actions 异步操作
// modules 模块化状态管理






const store = new Vuex.Store({//Store要大写
  state: {
    count: 100,
    student: [
      {
        name: '小明', age: 23, work: '教师'
      },
      {
        name: '小狗', age: 25, work: '工人'
      },
      {
        name: '小东', age: 20, work: '学生'
      }
    ]
  },
  mutations,
  getters,
  actions,

  modules: {
    moduleA,
    moduleB
  }
})


export default store

