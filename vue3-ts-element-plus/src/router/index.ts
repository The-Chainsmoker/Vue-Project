import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    redirect: 'GoodsView',
    children: [
      {
        path: 'GoodsView',
        name: 'GoodsView',
        meta: {
          show: true,
          title: '商品列表'
        },
        component: () => import(/* webpackChunkName: "GoodsView" */ '../views/GoodsView.vue')
      },
      {
        path: 'UserView',
        name: 'UserView',
        meta: {
          show: true,
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "GoodsView" */ '../views/UserView.vue')
      },
      {
        path: 'RoleView',
        name: 'RoleView',
        meta: {
          show: true,
          title: '角色列表'
        },
        component: () => import(/* webpackChunkName: "GoodsView" */ '../views/RoleView.vue')
      },
      {
        path: 'AuthorityView',
        name: 'AuthorityView',
        meta: {
          show: false,
          title: '权限列表'
        },
        component: () => import(/* webpackChunkName: "GoodsView" */ '../views/AuthorityView.vue')
      }
    ]
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
