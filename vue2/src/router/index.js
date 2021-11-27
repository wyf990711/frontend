import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../views/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home
  }
]

const router = new VueRouter({
  routes
})

export default router
