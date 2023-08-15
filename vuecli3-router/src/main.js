import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toast from './utils/toast'

Vue.use(toast)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app') //和el:'#App'一样的

router.afterEach((to, from) => {
  console.log(to, from)
})
