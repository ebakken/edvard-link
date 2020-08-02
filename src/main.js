import './assets/styles/index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Redirect from './Redirect.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: App },
    { name: 'redirect', path: '/:key', component: Redirect },
  ]
})

new Vue({
  router,
}).$mount('#app')
