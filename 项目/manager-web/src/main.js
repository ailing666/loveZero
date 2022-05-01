import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from './config'
console.log('环境变量', import.meta.env)

axios.get(config.mockApi + '/test').then(res => {
  console.log(res)
})
const app = createApp(App)
app
  .use(router)
  .use(ElementPlus)
  .mount('#app')
