import Vue  from 'vue'
import App from './App.vue'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import store from './store'
import router from './router'


new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");