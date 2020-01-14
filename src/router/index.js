import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import App from "../App";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("../views/Login"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("../views/404"),
    hidden: true
  },
  {
    path: "/form",
    component: App,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import('../views/form/Index'),
        meta: {title: 'Form', icon: 'form'}
      }
    ]
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})


const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}


export default router

