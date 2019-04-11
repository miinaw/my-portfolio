<template>
  <div class="footer">
    <small class="copyright">© 2019 Minami Yokoyama.</small>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
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
</style>
