import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  meta: {
    title: '媒体'
  },
  component: () => import('@/views/media/index.vue')
}
export default routes
