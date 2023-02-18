import Layout from '@/layout'

export default {
  path: '/departments',
  component: Layout,
  children: [{
    name: 'departments',
    path: '', // 默认展示
    component: () => import('@/views/departments/departments.vue'),
    meta: {
      title: '部门管理',
      icon: 'bank',
      name: '小王',
      age: 20
    }
  }]
}
