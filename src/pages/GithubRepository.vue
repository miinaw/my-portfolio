<template>
  <PageBase pagename="github">
    <template v-slot:logo>
      <Logo v-show="!loading" :href="MyPageData.html_url" target="_blank" :src="MyPageData.avatar_url"/>
    </template>
    
    <template v-slot="title">
      <Title title="My github Repositories"/>
    </template>

    <template v-slot:content>
      <loading v-show="loading"/>
      <div v-show="!loading">
        <a :href="MyPageData.html_url" target="_blank" class="visit-button">Visit</a>
        <div v-for="item in repositoriesCount" :key="item.key" class="repository-list">
          <a v-if="item.private===false"
          v-bind:href="item.html_url"
          target="_blank"
          class="repository-item"
          >
            <div class="title">{{ item.name }}</div>
            <div class="description">{{ item.description }}</div>
            <div class="info">
              <div class="stars">{{ item.stargazers_count }}</div>
              <div v-if="item.language !== null" class="langages">{{ item.language }}</div>
            </div>
          </a>
        </div>
        <div class="grass">
          <img src="https://grass-graph.moshimo.works/images/miinaw.png">
        </div>
      </div>
    </template>
  </PageBase>
</template>

<script>
import PageBase from '../components/PageBase.vue'
import Logo from '../components/Logo.vue'
import Title from '../components/Title.vue'
import Loading from '../components/Loading.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

Vue.use(VueResource)
Vue.use(GitHubAPI, { token: process.env.VUE_APP_GIT_ACCESS_TOKEN })

export default {
  name: 'Github',
  components: {
    PageBase,
    Logo,
    Title,
    Loading,
  },
  data() {
     return {
      GithubData: {},
      AccountData: {},
      loading: true,
     }
  },
  created: function () {
    this.GitHubAPI.get('/user/repos', {}, [this.GithubData, 'repositories'])
    this.GitHubAPI.get('/user', {}, [this.AccountData, 'mypage'])
  },
  computed: {
    repositoriesCount: function () {
     if(this.GithubData.repositories) {
        return this.GithubData.repositories
      }
      return 'none yet...'
    },
    MyPageData: function () {
      if(this.AccountData.mypage) {
        if(this.loading) {
          this.loading = false;
        }
        return this.AccountData.mypage
      }
      return "logo.jpg"
    },
  },
};
</script>

<style lang="scss" scoped>
.repository-list + .repository-list {
  margin-top: 1rem;
}
.repository-item {
  display: block;
  padding: 1.2rem 1rem;
  border: 1px solid #ddd;
  background-color: #f6f6f6;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.04);
}
.title {
  margin-bottom: 1.4rem;
  font-size: 1.1rem; 
  font-weight: bold;
  color: #0366d6
}
.description {
  font-size: .9rem;
}
.title,.description {
  margin-bottom: 1rem;
  text-align: left;
}
.info {
  display: flex;
  justify-content: space-between;
  height: 1.4rem;
  line-height: 1.4rem;
  margin: auto 0;
  font-size: .8rem;
  .stars {
    display: flex;
  }
  .stars::before {
    display: block;
    width: .8rem;
    height: .8rem;
    line-height: 1.4rem;
    margin: auto .3rem auto 0;
    background-image: url('../assets/images/icons/star.svg');
    background-repeat: no-repeat;
    content: '';
  }
  .langages {
    display: flex;
    height: 1rem;
    align-items: center;
    padding: .2rem .5rem;
    background-color: #eff3f6;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 1rem;
    font-size: .7rem;
  }
}
.visit-button {
  display: block;
  margin: .5rem .1rem .5rem auto;
  padding: .3rem .5rem;
  width: fit-content;
  background-color: #28a745;
  background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
  border: 1px solid rgba(27,31,35,.2);
  border-radius: .25em;
  font-size: .9rem;
  font-weight: 600;
  color: #fff;
}
.grass {
  img {
    width: calc(100vw - 8vw);
    margin: 1rem auto;
  }
}
</style>
