import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import store from './store'



createApp(App).use(store).use(router).mount('#app')
