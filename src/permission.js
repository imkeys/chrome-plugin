import Vue from 'vue'
import router from './router'

const routeInstance = new Vue({
  data () {
    return {
      currentRoute: []
    }
  }
})

Vue.prototype.$matchedRoutes = routeInstance

// NProgress.configure({
//   showSpinner: false
// })

router.beforeEach(async (to, from, next) => {
  // NProgress.start()
  next()
})

router.afterEach(res => {
  // NProgress.done()
})
