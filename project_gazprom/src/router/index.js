import Vue from 'vue'
import VueRouter from 'vue-router'
import Page404 from '@/views/404/404Page.vue'
import MainPage from '@/views/MainPage/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'MainPage',
    component: MainPage
  },
  {
    path:'*',
    name:'Page404',
    component: Page404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
