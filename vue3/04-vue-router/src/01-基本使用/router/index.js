// 导入钩子函数
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// 配置路由映射
const routes = [
  // 默认路径
  { path: '/', redirect: '/about' },
  // 路由懒加载
  {
    path: '/home',
    // webpack打包注释
    component: () => import(/* webpackChunkName: 'home'*/ '../components/About.vue'),
  },
  {
    name: "about",
    path: '/about',
    component: () => import(/* webpackChunkName: 'about'*/ '../components/Home.vue'),
    meta: {
      title: "about",
    },
  },
  {
    path: '/user/:id',
    component: () => import(/* webpackChunkName: 'user'*/ '../components/User.vue'),
  },
];

// 调用 createRouter 函数，传入配置，并指定路由模式
const router = createRouter({
  routes,
  // history: createWebHashHistory(), // http://localhost:8080/#/about
  history: createWebHistory(), // http://localhost:8080/about
});

// 导出
export default router;
