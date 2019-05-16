<template>
  <div class="footer">
    <Sns/>
    <small class="copyright">© 2019 Minami Yokoyama.</small>
  </div>
</template>

<script>
import Sns from './SnsList.vue'

export default {
  name: 'Footer',
  components: {
    Sns,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;
  .copyright {
    display: block;
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: #2c3e50;
    opacity: .9;
    color: #ddd; 
  }
}

// Sns
.footer /deep/ .sns-list {
  ul {
    width: 30%;
    margin: 0 auto 1rem;
  }
}
</style>
