import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import pageRouter from './modules/page'
Vue.use(Router)

// BASIC_ROUTES
export const BASIC_ROUTES = [
  {
    path: '/(index)?',
    redirect: '/bd-map'
  },
  ...pageRouter,
  {
    path: '/404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/500',
    component: () => import('@/views/error-page/500')
  }
]

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
