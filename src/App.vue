<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[v-cloak] { 
  display: none; 
}
p {
  margin: 0;
}
ul, ol, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
dl {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  letter-spacing: 0;
}
input {
  border-radius: 0;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: .7;
  }
}
.content {
  margin: 0 4vw;
  min-height: calc(100vh - 7rem); /* minus header height */
}
@media screen and (min-width:781px) {
  .content {
    width: 60%;
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
