import { createApp } from 'vue'
import mitt from "mitt"
import App from './08-兄弟通讯/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')