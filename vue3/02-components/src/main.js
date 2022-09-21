import { createApp } from 'vue'
import mitt from "mitt"
import App from './12-Keep-Alive/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')