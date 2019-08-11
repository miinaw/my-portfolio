import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/Index.vue'
import About from './pages/About.vue'
import GithubRepository from './pages/GithubRepository.vue'
import Qiita from './pages/Qiita.vue'
import Rakugaki from './pages/Rakugaki.vue'
import Beauty from './pages/Beauty.vue'
import Contact from './pages/Contact.vue'

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
    {
      path: '/qiita',
      component: Qiita
    },
    {
      path: '/rakugaki',
      component: Rakugaki
    },
    {
      path: '/beauty',
      component: Beauty
    },
    {
      path: '/contact',
      component: Contact
    },
  ]
})