import { createApp } from 'vue'
import App from './App.vue'
import directives from "./01-自定义指令/directives/index"

createApp(App).use(directives).mount('#app')
