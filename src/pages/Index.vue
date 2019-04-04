<template>
  <div class="page index">
    <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    <Title title="My portfolio" description="My name is Minami Yokoyama."/>
    <MenuBox/>
    <router-view></router-view>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import MenuBox from '../components/MenuBox.vue'

export default {
  name: 'index',
  components: {
    Title,
    MenuBox
  },
}
</script>

<style lang="scss" scoped>
.index /deep/ .menu-box {
  margin: 2rem 0;
  .menu-list-item {
    color: #666;
  }
}
</style>



