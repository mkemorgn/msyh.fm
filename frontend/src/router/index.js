import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPageView
    },
    {
      path: '/experience',
      name: 'experience',
      // Lazy loaded when this route is visited.
      component: () => import('../views/ExperienceView.vue')
    }
  ]
})

export default router
