<template>
  <div class="page index">
    <a href="/">
      <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    </a>
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
    margin-right: auto;
    margin-left: auto;
    padding: .5rem;
    width: 60vw;
    border: 1px solid #ccc;
    color: #fff;
    background-color: #516274;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
  }
}
</style>



