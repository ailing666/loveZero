import Layout from '@/layout'

export default {
  path: '/employees',
  component: Layout,
  children: [
    {
      name: 'employees',
      path: '', // 默认展示
      component: () => import('@/views/employees/employees.vue'),
      meta: { title: '员工管理', icon: 'people' }
    }
  ]
}
