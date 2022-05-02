import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// vuex
import store from './store'
// elementPlus
import ElementPlus from 'element-plus'
// elementPlus 样式
import 'element-plus/dist/index.css'
// element图标
import * as icons from '@element-plus/icons'
// 自定义样式
import './styles/index.scss'

const app = createApp(App)

// 注册所有图标
Object.keys(icons).forEach((key) => {
	app.component(key, icons[key])
})

app.use(store).use(ElementPlus).use(router).mount('#app')
