import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //ruter和store都是vue实例的属性
  router,//rputer:router
  store,//store:store
  render: h => h(App)
})


