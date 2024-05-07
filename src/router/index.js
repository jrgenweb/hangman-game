import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/howtoplay',
      name: 'howtoplay',
      component: () => import('../views/HowToPlayView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/game/:category',
      name: 'game',
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
