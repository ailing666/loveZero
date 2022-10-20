import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('../views/favor/index.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/message/index.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/index.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('../views/city/index.vue')
    }
    ,
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/index.vue')
    }
  ]
})

export default router
