import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('@/view/cart/Cart')
const Category = () => import('@/view/category/Category')
const Home = () => import('@/view/home/Home')
const Profile = () => import('@/view/profile/Profile')

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: { name: 'Home' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }


];



const router = new VueRouter({
    routes,// route:router->[]的缩写
    mode: 'history'
})

// console.log(router)

// Vue.prototype.smokers = '我是原型'

export default router