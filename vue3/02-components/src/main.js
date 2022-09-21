import { createApp } from 'vue'
import mitt from "mitt"
import App from './14-minix/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')