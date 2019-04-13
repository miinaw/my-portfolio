<template>
  <div class="menu-box">
    <ul class="menu-list">
      <li v-cloak v-for="menu in menulist" :key="menu.id" :class="menu.name" class="menu-list-item"><router-link v-bind:to="'/' +  menu.name">{{ menu.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { MENU_LIST } from '../utils/constants/menu.js'

export default {
  name: 'MenuBox',
  data() {
    return {
      menulist: MENU_LIST,
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-box {
  margin: 2rem 0;
}
.menu-list-item {
  font-size: 1.5rem;
  font-weight: 500;
  & + .menu-list-item {
    margin-top: 1rem;
  }
}
a {
  text-decoration: none;
}

</style>
