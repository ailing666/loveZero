import { createApp } from 'vue';
import App from './01-基本使用/App.vue';
// 导入 router
import router from './01-基本使用/router';
// 使用 router
createApp(App).use(router).mount('#app');
