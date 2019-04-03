<template>
  <div class="page qiita">
    <Title title="My Qiita items."/>
    <div class="page-content">
      <div>
        <a 
        v-for="post in posts" :key="post.key" 
        v-bind:href="post.url"
        target="_blank"
        class="post-list"
        >
          <div>{{ post.title }}</div>
          <div>{{ post.likes_count }}</div>
          <div li v-for="tag in post.tags" :key="tag.key">{{ tag.name }}</div>
        </a>
      </div>
   </div>
 </div>
</template>

<script>
import Title from '../components/Title.vue'
import axios from 'axios';

export default {
  name: 'qiita',
  components: {
    Title,
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    getPost() {
      axios.get('https://qiita.com/api/v2/users/miiina016/items')
      .then(response => (this.posts = response.data))
      console.logres(this.posts.length)
    },
  },
  created () {
    this.getPost()
  }
};
</script>

<style lang="scss" scoped>

.post-list {
  display: block;
  border: 1px solid #ddd;
  & + .post-list {
    margin-top: 1rem;
  }
}
</style>
