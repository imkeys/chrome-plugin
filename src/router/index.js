import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// BASIC_ROUTES
export const BASIC_ROUTES = [
  {
    path: '/(index)?',
    redirect: '/popup'
  },
  {
    path: '/popup',
    component: () => import(/* webpackChunkName: "popup" */ '@/views/popup/')
  }
]

// ASYNC_ROUTES
export const ASYNC_ROUTES = [
  {
    noAuth: true,
    path: '*',
    redirect: '/404'
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-active',
  routes: BASIC_ROUTES
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
