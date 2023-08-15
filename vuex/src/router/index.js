import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloVuex = () => import('@/components/HelloVuex')

const routes = [
  {
    path: '/HelloVuex',
    name: 'HelloVuex',
    component: HelloVuex
  }
]

export default new Router({
  routes,
  mode: 'history'
})
