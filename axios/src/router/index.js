import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/components/Home')

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router