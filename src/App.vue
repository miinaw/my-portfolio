<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-link to="/"></router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}
.content {
  margin: 0 4vw;
}
.logo {
  width: 7rem;
  height: 7rem;
  margin-bottom: .3rem;
  border-radius: 50%;
  border: 1px solid #999;
}
</style>
