import { createApp } from 'vue';
import App from './03-动态路由/App.vue';
// 导入 router
import router from './03-动态路由/router';
// 使用 router
createApp(App).use(router).mount('#app');
