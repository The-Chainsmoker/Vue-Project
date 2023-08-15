import { createRouter, createWebHistory } from 'vue-router'
import my_mv from "@/components/my_mv/my_mv";
import mvdetail from "@/components/mvdetail/mvdetail";
const routes = [
  {
    path:'/',
    component:my_mv
  },
  {
    path: '/mvdetail/:id',
    component: mvdetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
