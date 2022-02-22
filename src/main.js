// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from './App'

import '@/styles/common.css'
import '@/styles/animate.css'

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock').default
  mockXHR()
}

Vue.prototype.$axios = axios

let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({ vm })
