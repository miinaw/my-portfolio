<template>
  <div class="page about">
    <a href="/">
      <img class="logo" alt="logo" src="../assets/images/logo.jpg">
    </a>
    <Title title="About me." description="Hi."/>
    <div class="page-content">
      <div class="heading">Profile.</div>
        <p>横山美波 Minami Yokoyama</p>
        <p>1996.01.06</p>
        <p>宮崎大学工学部 情報システム工学科 2018卒</p>
        <p>好きなたべものはチョコレート</p>
      <div class="heading">Life so far.</div>
      <div class="heading">The me today.</div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'about',
  components: {
    Title,
  },
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 1.8rem;
  font-weight: bold;
}
p + .heading {
  margin-top: 2rem;  
}
</style>
