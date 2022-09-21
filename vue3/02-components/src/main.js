import { createApp } from 'vue'
import mitt from "mitt"
import App from './13-组件v-model/App.vue'

const app = createApp(App)
app.config.globalProperties.$mybus = mitt()
app.mount('#app')