// import './assets/main.css'

import '@/styles/common.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const pinia = createPinia()

import { lazyPlugin } from '@/directive'

const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus).use(lazyPlugin)

app.mount('#app')
