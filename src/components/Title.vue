<template>
  <div class="title-block">
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
.title-block {
  margin-bottom: 1rem;
}
</style>
