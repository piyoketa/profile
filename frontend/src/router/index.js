import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MentalHealth from '../pages/MentalHealth.vue'
import IT from '../pages/IT.vue'
import GameDev from '../pages/GameDev.vue'
import Interview from '../pages/Interview.vue'

const routes = [
  { path: '/',          name: 'Home',     component: Home },
  { path: '/mental-health', name: 'MentalHealth', component: MentalHealth },
  { path: '/it',         name: 'IT',       component: IT },
  { path: '/game-dev',   name: 'GameDev',  component: GameDev },
  { path: '/interview',  name: 'Interview', component: Interview },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
