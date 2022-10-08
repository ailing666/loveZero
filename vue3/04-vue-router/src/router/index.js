// 导入钩子函数
import { createRouter, createWebHashHistory } from 'vue-router';

// 导入子组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';

// 配置路由映射
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

// 调用 createRouter 函数，传入配置，并指定路由模式
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 导出
export default router