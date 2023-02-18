import Layout from '@/layout'

export default {
  path: '/salarys',
  component: Layout,
  children: [{
    name: 'salarys',
    path: '', // 默认展示
    component: () => import('@/views/salarys/salarys.vue'),
    meta: { title: '工资管理', icon: 'money' }
  }]
}
