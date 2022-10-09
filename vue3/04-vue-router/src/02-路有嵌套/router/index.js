import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/about',
      },
      {
        path: 'about',
        component: () => import('../components/About.vue'),
      },
      {
        path: 'user', 
        component: () => import('../components/User.vue'),
      },
    ],
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
