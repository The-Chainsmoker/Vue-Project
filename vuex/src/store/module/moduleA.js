export default {
  state: {
    name: '我是A模块',
    count: 999,
  },
  mutations: {
    aChange(state) {
      state.name = '哈哈哈'
    },
    aShow(state, playload) {
      state.name = playload
    }
  },
  getters: {
    aSum(state) {
      return state.count
    },
    aObject(state, getters) {
      return 1000 + getters.aSum
    },
    aRoot(state, getters, rootSate) {
      return 1000 + rootSate.count
    },
    aRootGetter(state, getters, rootSate, rootGetter) {
      return rootGetter.getStuAge(20)
    }

  },
  actions: {
    asyAmodule(context) {
      setTimeout(() => {
        context.commit('aShow', 'smoker')
      }, 1000)
    }
  },
}