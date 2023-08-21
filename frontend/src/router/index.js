import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import EventsView from '../views/EventsView.vue'
import TestView from '../views/TestView.vue'
import BlogView from '../views/BlogView.vue'

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
      component: ExperienceView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
  ]
})

export default router
