import Vue from 'vue'
import App from './App'
import router from './router'//自动去找index
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
let vm = new Vue({
  router,
  store,
  render: h => h(App)
})

vm.$mount('#app')