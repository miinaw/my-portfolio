<template>
 <div class="page qiita">
   <Title title="My Qiita items."/>
   <div>{{ posts }}</div>
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
    },
  },
  created () {
    this.getPost()
  }
};
</script>

<style>
</style>
