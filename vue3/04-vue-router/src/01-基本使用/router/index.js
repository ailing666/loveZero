// 导入钩子函数
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';

// 导入子组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import User from '../components/User.vue';


// 配置路由映射
const routes = [
  // 默认路径
  { path: '/', redirect: '/about' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/user', component: User },
];

// 调用 createRouter 函数，传入配置，并指定路由模式
const router = createRouter({
  routes,
  // history: createWebHashHistory(), // http://localhost:8080/#/about
  history: createWebHistory(), // http://localhost:8080/about
});

// 导出
export default router