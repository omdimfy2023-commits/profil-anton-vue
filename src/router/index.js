import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HobbyView from '../views/HobbyView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/tentang',
    name: 'about',
    component: AboutView
  },

  {
    path: '/hobi',
    name: 'hobby',
    component: HobbyView
  },

  {
    path: '/kontak',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router