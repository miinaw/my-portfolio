<template>
  <PageBase pagename="beauty">
    <template v-slot:logo>
      <Logo href="https://www.instagram.com/miina016/" target="_blank" :src="allPosts.data[0].user.profile_picture"/>
    </template>
    
    <template v-slot="title">
      <Title title="#minabeauty" description="My Favorites."/>
    </template>
    
    <template v-slot:content>
      <div class="instagram">
        <a 
        v-for="post in selectData" 
        v-bind:key="post.key" 
        v-bind:href="post.link"
        class="post"
        >
        <img v-bind:src="post.images.standard_resolution.url">
        </a>
      </div>
    </template>
  </PageBase>
</template>

<script>
import PageBase from '../components/PageBase.vue'
import Logo from '../components/Logo.vue'
import Title from '../components/Title.vue'
import axios from 'axios';

export default {
  name: 'beauty',
  components: {
    PageBase,
    Logo,
    Title,
  },
  data() {
    return {
      accountData: {},
      allPosts: {},
      selectPosts: []
    }
  },
  methods: {
    getPost() {
      const access_token = process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token + '&count=150')
      .then(response => (this.allPosts = response.data))
    }
  },
  created() {
    this.getPost()
  },
  computed: {
    selectData() {
      for (var i = 0; i < this.allPosts.data.length; i++) {
        for (var j = 0; j < this.allPosts.data[i].tags.length; j++) {
          if(this.allPosts.data[i].tags[j] === 'minabeauty') {
            this.selectPosts.push(this.allPosts.data[i])
          }
        }
      }
      return this.selectPosts
    }
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
.body {
  margin: 0 2rem;
  p {
    text-align: left;
    font-size: .9rem;
    line-height: 1.4em;
  }
  p + p {
    margin-top: .5rem;
  }
  + .heading {
    margin-top: 2rem;
  }
}
p + .heading {
  margin-top: 2rem;  
}
.instagram {
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(3,29vw);
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
@media screen and (min-width:781px) {
  .instagram {
    grid-template-columns: repeat(3,30%);
  }
}
</style>
