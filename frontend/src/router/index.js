import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/',          name: 'Home',     component: Home },
  { path: '/career',    name: 'Career',   component: Career },
  { path: '/products',  name: 'Products', component: Products },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
