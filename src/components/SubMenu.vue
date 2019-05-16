<template>
  <div class="submenu">
    <ul class="submenu-list">
      <li v-for="submenu in submenulist" :key="submenu.id" class="submenu-list-item"><a :href="submenu.url" target="_blank">{{ submenu.name }}</a></li>
    </ul>
  </div>
</template>

<script>
import { SUB_MENU_LIST } from '../utils/constants/menu.js'

export default {
  name: 'SubMenu',
    data() {
    return {
      submenulist: SUB_MENU_LIST,
    }
  },
}
</script>

<style lang="scss" scoped>
.submenu-list {
  display: flex;
}
.submenu-list-item {
  &::after {
    content: "　/　"
  }
  &:last-child::after {
    content: "";
  }
}
</style>