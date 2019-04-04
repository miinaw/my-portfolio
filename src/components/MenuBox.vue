<template>
  <div class="menu-box">
    <ul class="menu-list">
      <li v-for="menu in menulist" :key="menu.id" :class="menu.name" class="menu-list-item"><router-link v-bind:to="'/' +  menu.name">{{ menu.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuBox',
  data() {
    return {
      menulist: [
        { 
          id: 0,
          name: "about",
         },
        { 
          id: 1,
          name: "github",
         },
         {
           id: 2,
           name: "qiita"
         },
        { 
          id: 3,
          name: "contact",
         },
      ]
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
