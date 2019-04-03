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

<style>
.page-content {
   margin: 1rem 0;
}
</style>

