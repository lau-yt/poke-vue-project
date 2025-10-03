import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import './style.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

app.use(
  Vue3Toastify,
  {
    autoClose: 5000,
  } as ToastContainerOptions,
)