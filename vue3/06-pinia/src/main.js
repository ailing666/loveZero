import { createApp } from 'vue'
import App from './02-state/App.vue'
import pinia from './02-state/stores'

createApp(App).use(pinia).mount('#app')
