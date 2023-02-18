import Layout from '@/layout'

export default {
  path: '/approvals',
  component: Layout,
  children: [{
    name: 'approvals',
    path: '', // 默认展示
    component: () => import('@/views/approvals/approvals.vue'),
    meta: { title: 'approvals', icon: 'approvals' }
  }]
}
