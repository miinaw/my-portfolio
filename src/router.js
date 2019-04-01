import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/Index.vue'
import About from './pages/About.vue'
import GithubRepository from './pages/GithubRepository.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/github',
      component: GithubRepository
    },
  ]
})