import { RouteRecordRaw, RouterView } from 'vue-router'
const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  meta: {
    title: '订单'
  },
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      meta: {
        title: '订单列表'
      },
      component: () => import('@/views/order/list/index.vue')
    },
    {
      path: 'offline',
      name: 'order-offline',
      meta: {
        title: '订单详情'
      },
      component: () => import('@/views/order/offline/index.vue')
    }
  ]
}

export default routes
