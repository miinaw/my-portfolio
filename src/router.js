import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Index from './pages/Index.vue'
import GithubRepository from './pages/GithubRepository.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/git',
      component: GithubRepository,
    },
    // {
    //   path: '/git',
    //   component: GithubRepository
    // }
  ]
})