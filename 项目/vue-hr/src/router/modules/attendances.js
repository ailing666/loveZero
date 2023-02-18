import Layout from '@/layout'

export default {
  path: '/attendances',
  component: Layout,
  children: [{
    name: 'attendances',
    path: '', // 默认展示
    component: () => import('@/views/attendances/attendances.vue'),
    meta: { title: 'attendances', icon: 'skill' }
  }]
}
