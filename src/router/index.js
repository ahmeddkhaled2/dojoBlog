import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/aboutView.vue'
import Details from '@/views/details.vue'
import aboutProMax from '@/views/aboutProMax.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  }, 
  {
    path: '/details/:id',
    name: 'details',
    component:Details,
    props:true
  },
  {
    path: '/aboutProMax',
    name:'aboutProMax',
    component: aboutProMax
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
