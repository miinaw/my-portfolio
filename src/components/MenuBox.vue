<template>
  <div class="menu-box">
    <ul class="menu-list">
      <li v-for="menu in menulist" :key="menu.id" class="menu-list-item"><a v-bind:href="menu.path">{{ menu.name }}</a></li>
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
          path: ""
         },
        { 
          id: 1,
          name: "github",
          path: ""
         },
        { 
          id: 2,
          name: "contact",
          path: ""
         },
      ]
    }
  },
}
</script>

<style scoped>
.menu-box {
  margin: 2rem 0;
}
li {
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 500;
  color: #666;
}
a {
  text-decoration: none;
  color: #666;
}
</style>
