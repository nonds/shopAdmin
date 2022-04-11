import { createRouter, createWebHashHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'

const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const options:RouterOptions = {
  history: createWebHashHistory(),
  routes
}
const router:Router = createRouter(options)

export default router
