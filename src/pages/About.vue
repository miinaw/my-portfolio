<template>
  <div class="page about">
    <a href="/">
      <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    </a>
    <Title title="About me." description="Hi."/>
    <div class="page-content">
      <div class="heading">
        <h1 class="heading-title">Profile.</h1>
      </div>
        <p>横山美波 Minami Yokoyama</p>
        <p>1996.01.06</p>
        <p>宮崎大学工学部 情報システム工学科 2018卒</p>
        <p>好きなたべものはチョコレート</p>
      <div class="heading">
        <h1 class="heading-title">Life so far.</h1>
      </div>
      <p></p>
      <div class="heading">
        <h1 class="heading-title">The me today.</h1>
        <p>My instagram photos.</p>
      </div>
      <div class="instagram">
        <a 
        v-for="post in posts.data" 
        v-bind:key="post.key" 
        v-bind:href="post.link"
        class="post"
        >
        <img v-bind:src="post.images.standard_resolution.url">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import axios from 'axios';

export default {
  name: 'about',
  components: {
    Title,
  },
  data() {
    return {
      posts: {}
    }
  },
  methods: {
    getPost() {
      var access_token = process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token)
      .then(response => (this.posts = response.data))
    }
  },
  created() {
    this.getPost();
  }
}
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 1.5rem;
}
.heading-title {
  margin-bottom: .5rem;
  font-size: 1.8rem;
  font-weight: bold;
}
p + .heading {
  margin-top: 2rem;  
}
.instagram {
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(3,29vw);
  grid-template-rows: repeat(3,29vw);
  justify-content: space-around;
}
a.post {
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
