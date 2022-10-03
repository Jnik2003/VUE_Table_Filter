// import { createApp } from 'vue'
import App from './App.vue'
import * as Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

const app = Vue.createApp(App)
// app.use(store).use(router).use(VueAxios, axios).mount('#app')
app.use(store).use(router).mount('#app')
