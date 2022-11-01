import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/favor',
      component: () => import('../views/favor/index.vue')
    },
    {
      path: '/message',
      component: () => import('../views/message/index.vue')
    },
    {
      path: '/order',
      component: () => import('../views/order/index.vue')
    },
    {
      path: '/city',
      component: () => import('../views/city/index.vue')
    }
    ,
    {
      path: '/detail/:id',
      component: () => import('../views/detail/index.vue'),
      meta: {
        hideTabBar: true
      }
    }
  ]
})

export default router
