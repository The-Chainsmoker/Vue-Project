import VueRouter from "vue-router";
import Vue from "vue";
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

const routes = [
  //配置一个url对应一个组件
  {
    // path: '*',
    path: "/",
    //重定向
    redirect: "/home" //参数可以字符串或对象 { name: 'About' }
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home"),
    meta: {
      title: "首页"
    },
    children: [
      // {
      //     path: '',
      //     redirect: 'user',
      //     //如果是默认子路径不要加'/',跟父同级路径则加'/'
      // },
      {
        path: "user",
        name: "User",
        component: () => import("../view/User"),
        meta: {
          title: "用户"
        }
      },
      {
        path: "news",
        name: "News",
        component: () => import("../view/News"),
        meta: {
          title: "新闻"
        }
      }
    ]
  },
  {
    path: "/about/:useId",
    // path: '/about',
    name: "About",
    component: () => import("../components/About"),
    meta: {
      title: "关于"
    },
    beforeEnter: (to, from, next) => {
      // console.log(to);
      next();
    }
  }
];

//2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: "history", //has的url带有#
  linkActiveClass: "name" //把全局的router-link-active替换成name
});

router.beforeEach((to, from, next) => {
  //从from(跳转后的$router对象)到to(跳转前的$router对象)
  // document.title=to.meta.title
  document.title = to.matched[0].meta.title;
  next(); //是路由的跳转功能不能省
});

// router.afterEach((to, from) => {
//     console.log(to)

// })

//导出路由
export default router;
