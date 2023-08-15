import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../views/Home"
const routes = [
  // 重定向 当我访问 / 的时候 就跳到home页面
  // * 除了上面已经定义的路径
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login'),
    meta: {
      title:'登录'
    }
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../components/Main'),
    children: [{
        path: '/Home', //和父路径同级路径的孩子
        name: 'Home',
      component: Home,
      meta: {
        title:'首页'
      },
      },
      {
        path: '/My', //和父路径同级路径的孩子
        name: 'My',
        component: () => import('../views/My'),
        meta: {
          title:'我的'
        },
      },
      {
        path: '/Order',
        name: 'Order',
        component: () => import('@/views/Content/Order'),
        meta: {
          title:'订单'
        },
      },
      {
        path: '/Search',
        name: 'Search',
        component: () => import('@/views/Search'),
        meta: {
          title:'搜索'
        },
      }
    ],
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Content/Detail'),
    meta: {
      title:'商品详情'
    },
  },
  {
    path: '/Car',
    name: 'Car',
    component: () => import('@/views/Content/Car'),
    meta: {
      title:'购物车'
    },
  },
  {
    path: '/Pay',
    name: 'Pay',
    component: () => import('@/views/Content/Pay'),
    meta: {
      title:'支付'
    },
  },
  {
    path: '/NewAddress',
    name: 'NewAddress',
    component: () => import('@/views/Content/NewAddress'),
    meta: {
      title:'新地址'
    },
  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import('@/views/Content/Address'),
    meta: {
      title:'地址列表'
    },
  }

]



const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  document.title=to.meta.title
  next()
})

export default router