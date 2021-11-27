import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../views/home.vue'
import table from '../views/table.vue'
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
  ,
  {
    path: '/table',
    component: table
  }
]

const router = new VueRouter({
  routes
})

export default router
