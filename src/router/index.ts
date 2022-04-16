import { createRouter, createWebHashHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'
import Applayout from '@/layout/Applayout.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: Applayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      orderRoutes,
      permissionRoutes,
      mediaRoutes
    ]
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

router.beforeEach((to, from) => {
  NProgress.start()
  if (to.meta.requiresAuth && !store.state.userInfo) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
