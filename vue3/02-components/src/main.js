import { createApp } from 'vue'
import mitt from "mitt"
import App from './09-生命周期/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')