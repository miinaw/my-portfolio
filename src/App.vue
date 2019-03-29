<template>
  <div id="app">
    <Header/>
    <div class="content">
      <img class="logo" alt="logo" src="./assets/images/logo.jpg">
      <Title title="My portfolio"/>
      <MenuBox/>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import MenuBox from './components/MenuBox.vue'


export default {
  name: 'app',
  components: {
    Header,
    Title,
    MenuBox
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

.logo {
  width: 7rem;
  height: 7rem;
  margin-bottom: .3rem;
  border-radius: 50%;
  border: 1px solid #999;
}
</style>
