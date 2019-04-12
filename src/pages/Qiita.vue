<template>
  <div class="page qiita">
    <a v-show="!loading" href="https://qiita.com/miiina016" target="_blank">
      <img class="logo" alt="logo" src="https://qiita-image-store.s3.amazonaws.com/0/263845/profile-images/1543141905">
    </a>
    <Title title="My Qiita posts." description=""/>
    <breeding-rhombus-spinner
      v-show="loading"
      :animation-duration="2000"
      :size="30"
      color="#ccc"
      class="loading"
    />
    <div v-show="!loading" class="page-content">
      <div>
        <a 
        v-for="post in posts" :key="post.key" 
        v-bind:href="post.url"
        target="_blank"
        class="post-list"
        >
          <div class="title">{{ post.title }}</div>
          <div class="info">
            <div class="likes">{{ post.likes_count }}</div>
            <div class="tags">
              <div v-for="tag in post.tags" :key="tag.key" class="tag">{{ tag.name }}</div>
            </div>
          </div>
        </a>
      </div>
   </div>
 </div>
</template>

<script>
import Title from '../components/Title.vue'
import axios from 'axios';
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: 'qiita',
  components: {
    Title,
    BreedingRhombusSpinner,
  },
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  methods: {
    getPost() {
      axios.get('https://qiita.com/api/v2/users/miiina016/items')
      .then(response => (this.posts = response.data),this.loading = false)
    }
  },
  created () {
    this.getPost()
  }
};
</script>

<style lang="scss" scoped>

.post-list {
  display: block;
  padding: 1.2rem 1rem;
  border: 1px solid #ddd;
  background-color: #f6f6f6;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.04);
  & + .post-list {
    margin-top: 1rem;
  }
}
.title {
  margin-bottom: 1.4rem;
  text-align: left;
  font-size: 1.1rem; 
  font-weight: bold;
  color: #55c500
}
.info {
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  .likes::before {
    display: inline-block;
    width: .8rem;
    height: .8rem;
    margin-right: .3rem;
    background-image: url('../assets/images/icons/good.svg');
    content: '';
  }
  .tags {
    display: flex;
    .tag::before {
      content: '#';
    }
    .tag + .tag {
      margin-left: .3rem;
    }
  }
}
.loading {
  margin: 2rem auto;
}
</style>
