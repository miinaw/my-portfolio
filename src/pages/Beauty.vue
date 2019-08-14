<template>
  <PageBase pagename="beauty">
    <template v-slot:logo>
      <Logo href="https://www.instagram.com/miina016/" target="_blank" :src="setAccountData"/>
    </template>
    
    <template v-slot="title">
      <Title title="#minabeauty" description="My Favorites."/>
    </template>
    
    <template v-slot:content>
      <div class="instagram">
        <a 
        v-for="post in selectPost" 
        v-bind:key="post.key" 
        v-bind:href="post.permalink"
        class="post"
        >
        <img v-bind:src="post.media_url">
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
      accountData: { pictureUrl: ''},
      allPosts: {},
      selectPosts: []
    }
  },
  methods: {
    getPost() {
      const access_token = process.env.VUE_APP_INSTAGRAM_3RD_ACCESS_TOKEN
      const ig_id = process.env.VUE_APP_IG_ID
      axios.get('https://graph.facebook.com/v4.0/' + ig_id + '?fields=profile_picture_url,name%2Cmedia.limit(600)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=' + access_token)
      .then(response => (this.allPosts = response.data))
    }
  },
  created() {
    this.getPost()
  },
  computed: {
    setAccountData() {
      return this.accountData.pictureUrl = this.allPosts.profile_picture_url
    },
    selectPost() {
      console.log(this.allPosts.media.data.length)
      console.log(this.allPosts.profile_picture_url)
      for (var i = 0; i < this.allPosts.media.data.length; i++) {
        if(this.allPosts.media.data[i].caption.indexOf('minabeauty') != -1) {
          this.selectPosts.push(this.allPosts.media.data[i])
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
