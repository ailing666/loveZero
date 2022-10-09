import { createApp } from 'vue';
import App from './02-路有嵌套/App.vue';
// 导入 router
import router from './02-路有嵌套/router';
// 使用 router
createApp(App).use(router).mount('#app');
