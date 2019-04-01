<template>
  <div class="page index">
    <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    <Title title="My portfolio"/>
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
</style>

