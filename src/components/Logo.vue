<template>
  <div class="logo">
    <a :href="href" :target="target">
      <img :src="src" class="logo-img" alt="logo">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    href: {
      default: '/',
      type: [String, Function],
    },
    src: {
      default: 'logo.jpg',
      type: [String, Function],
    },
    target: String
  }
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 auto .3rem;
  a {
    display: inline-block;
  }
}
.logo-img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 1px solid #999;
}
</style>
