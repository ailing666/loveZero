import Layout from '@/layout'

export default {
  path: '/settings',
  component: Layout,
  children: [{
    name: 'settings',
    path: '', // 默认展示
    component: () => import('@/views/settings/settings.vue'),
    meta: { title: 'settings', icon: 'settings' }
  }]
}
