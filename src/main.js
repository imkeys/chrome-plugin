// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from './App'

import '@/skins/common.css'
import '@/skins/animate.css'

Vue.prototype.$axios = axios

let vm = new Vue({
  router,
  el: '#popup',
  render: h => h(App)
})

Vue.use({ vm })
