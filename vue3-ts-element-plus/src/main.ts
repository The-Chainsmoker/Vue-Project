import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    if (localStorage.getItem('token')) {
      next('/')
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }

})

const app= createApp(App).use(router).mount('#app')



