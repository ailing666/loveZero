import { createApp } from 'vue'
import mitt from "mitt"
import App from './11-动态组件/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')