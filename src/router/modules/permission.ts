import { RouteRecordRaw, RouterView } from 'vue-router'
const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  meta: {
    title: '权限'
  },
  component: RouterView,
  children: [
    {
      path: 'role',
      name: 'permission_role',
      meta: {
        title: '角色'
      },
      component: () => import('@/views/permission/role/index.vue')
    },
    {
      path: 'admin',
      name: 'permission_admin',
      meta: {
        title: '管理员'
      },
      component: () => import('@/views/permission/admin/index.vue')
    },
    {
      path: 'rule',
      name: 'permission_rule',
      meta: {
        title: '权限规则'
      },
      component: () => import('@/views/permission/rule/index.vue')
    }
  ]
}

export default routes
