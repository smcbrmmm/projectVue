import Vue from 'vue'
import VueRouter from 'vue-router' //
import router from './routes'      //
Vue.use(VueRouter)                 //

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router                           //
})
