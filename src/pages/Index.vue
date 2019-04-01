<template>
  <div class="content">
    <Title title="My portfolio"/>
    <MenuBox/>
    <!-- <router-link to="/git">github</router-link> -->
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

