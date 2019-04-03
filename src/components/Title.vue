<template>
  <div class="firstview">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: {
    title: String,
    description: String,
  }
}
</script>

<style scoped>
h1 {
  margin: 1rem 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
