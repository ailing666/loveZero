import { createApp } from 'vue'
import App from './01-基本使用/App.vue'
import pinia from './01-基本使用/stores'

createApp(App).use(pinia).mount('#app')
