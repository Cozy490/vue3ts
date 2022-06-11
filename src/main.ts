import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/es/button/style'
import { Toast } from 'vant'
import '@/assets/font/font.css'

const app = createApp(App)
app.use(Toast).use(store).use(router).mount('#app')
