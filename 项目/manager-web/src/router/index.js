import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: 'Vue3+koa2全栈项目'
        },
        component: () => import('../views/Welcome.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
