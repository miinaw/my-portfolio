<template>
  <div class="sns-list">
    <ul>
      <li v-for="sns in snslist" :key="sns.key"><a :href="sns.url" :class="sns.name" target="_blank"></a></li>
    </ul>
  </div>
</template>

<script>
import { SNS_LINK_LIST } from '../utils/constants/sns.js'

export default {
  name: 'SnsList',
  data() {
    return {
      snslist: SNS_LINK_LIST
    }
  }
}
</script>

<style lang="scss" scoped>
.sns-list {
  ul {
    display: flex;
    justify-content: space-between;
  }
  a::before {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
  }
  .twitter::before {
    background-image: url("../assets/images/icons/twitter-square.svg");
  }
  .instagram::before {
    background-image: url("../assets/images/icons/instagram.svg");
  }
  .facebook::before {
    background-image: url("../assets/images/icons/facebook-square.svg");
  }
}
</style>
