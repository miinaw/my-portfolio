<template>
  <div class="page index">
    <Logo/>
    <Title title="My portfolio" description="My name is Minami Yokoyama."/>
    <MenuBox/>
    <router-view></router-view>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Title from '../components/Title.vue'
import MenuBox from '../components/MenuBox.vue'

export default {
  name: 'index',
  components: {
    Logo,
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
    border: 1px solid #aaa;
    border-radius: 2px;
    color: #fff;
    background-color: #2c3e50;
    opacity: .9;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
  }
}
</style>



