// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // render: h => h(App)
  components: {
    App
  },
  template: '<app/>'//<组件名/>==>引入组件的内容

  /* 
  Vue程序运行过程: template解析->ast(抽象语法树)编译->render走向->virtual dom渲染 ->real dom

  components: { App },
  template: '<App/>',
  等效与 rende: h=>h(App);

  h 等于 createElement
  三个参数: createElement('标签'，{标签属性},[''])
  render: function(createElement) {
   return createElement(App)
  }

  render: h => h('h2',{class:'box'},['啊哈哈',//可以继续嵌套h()])
  render: h => h('h2',
    { class: 'box' },
    ['啊哈哈', h('button', { class: 'red' }, ['哈哈'])])//不能在runtimeOnly写,因为template去掉
  
   */
})
