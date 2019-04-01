<template>
  <div class="page github">
    <Title title="My github Repositories."/>
    <div class="page-content">
      <ul>
        <li  v-for="item in repositoriesCount" :key="item.key" class="repository-list">
           <h3><a v-bind:href="item.git_url">{{ item.name }}</a></h3>
           <p>{{ item.description }}</p>
           <p>{{ item.language }}</p>
           <p>{{ item.stargazers_count }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

Vue.use(VueResource)
Vue.use(GitHubAPI, { token: '' })

export default {
  name: 'Github',
  components: {
    Title,
  },
  data() {
     return {
      GithubData: {},
     }
  },
  mounted: function () {
    this.GitHubAPI.get('/user/repos', {}, [this.GithubData, 'repositories'])
  },
  computed: {
    repositoriesCount: function () {
     if(this.GithubData.repositories) {
      var repo_count = this.GithubData.repositories.length
        for( var i=0; i<=repo_count; i++ ) {
         return this.GithubData.repositories
        }
     }
      return 'none yet...'
    }
  },
};
</script>

<style lang="scss" scoped>

.page-content {
   margin: 1rem 0;
}
.repository-list {
   border: 1px solid #ddd;
   & + li {
      margin-top: 1rem;
   }
}
</style>
