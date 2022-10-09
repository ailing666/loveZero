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
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

let isAdmin = true;
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: '/admin',
    component: () => import('../components/Admin.vue'),
  });

  // 添加vip页面
  router.addRoute('home', {
    path: '/vip',
    component: () => import('../components/Vip.vue'),
  });
}
router.removeRoute('admin');
// 获取router中所有的映射路由对象
console.log(router.getRoutes());

// 路由守卫
router.beforeEach((to, from) => {
  // 进入到用户页面时, 判断用户是否登录
  const token = localStorage.getItem('token');
  if (to.path === '/home/user' && !token) {
    return '/login';
  }
});
export default router;
