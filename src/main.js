import './firebase'
import Vue from 'vue'
import VueRouter from 'vue-router' //
import router from './routes'      //
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'


Vue.use(VueRouter)                 //
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firestorePlugin)


import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router                           //
})
