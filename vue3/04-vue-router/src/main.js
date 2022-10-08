import { createApp } from 'vue';
import App from './App.vue';
// 导入 router
import router from './router';
// 使用 router
createApp(App).use(router).mount('#app');
