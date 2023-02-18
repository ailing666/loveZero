import Layout from '@/layout'

export default {
  path: '/social_securitys',
  component: Layout,
  children: [{
    name: 'social_securitys',
    path: '', // 默认展示
    component: () => import('@/views/social_securitys/social_securitys.vue'),
    meta: { title: 'social_securitys', icon: 'social_securitys' }
  }]
}
