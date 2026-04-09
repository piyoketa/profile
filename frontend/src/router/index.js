import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MentalHealth from '../pages/MentalHealth.vue'
import IT from '../pages/IT.vue'
import GameDev from '../pages/GameDev.vue'
import Interview from '../pages/Interview.vue'
import MasochisticSister from '../pages/MasochisticSister.vue'

const routes = [
  { path: '/',          name: 'Home',     component: Home },
  { path: '/mental-health', name: 'MentalHealth', component: MentalHealth },
  { path: '/it',         name: 'IT',       component: IT },
  { path: '/game-dev',   name: 'GameDev',  component: GameDev },
  {
    path: '/game-dev/masochistic-sister',
    name: 'MasochisticSister',
    component: MasochisticSister,
    meta: {
      title: '被虐のシスター',
      description: '敵から受けた攻撃を記憶して戦う、デッキ構築ローグライク「被虐のシスター」。',
      ogImage: '/ogp/masochistic-sister.png',
      twitterCard: 'summary_large_image',
    },
  },
  { path: '/interview',  name: 'Interview', component: Interview },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
