<template>
  <div class="header">
    <div class="header-column">
      <div class="OpenMenuButton humberger" :class="{ 'is-active': openMenu }" @click="openMenu = !openMenu">
        <span class="humberger-button"></span>
      </div>
      <div class="header-logo"><a href="/">Minami's portfolio</a></div>
      <div></div>
    </div>
    <transition name="menu">
    <div class="humberger-wrap" v-show="openMenu" @click="openMenu = !openMenu">
      <div class="humberger-menu">
        <div class="menu-wrap">
          <MenuBox/>
          <SubMenu/>
          <SnsList/>
        </div>
      </div>
    </div>
    </transition>
  </div>
  
</template>

<script>
import MenuBox from './MenuBox.vue'
import SubMenu from './SubMenu.vue'
import SnsList from './SnsList.vue'

export default {
  name: 'Header',
  components: {
    MenuBox,
    SubMenu,
    SnsList
  },
  data() {
    return { openMenu: false }
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 0;
  margin-bottom: 2rem;
  height: 4rem;
}
.header-logo {
  line-height: 4rem;
  font-size: 1.5rem;
  color: #ddd;
}
.header-column {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  opacity: .9;
}
.humberger {
  position: relative;
  display: block;
  left: 4vw;
  bottom: 0;
  height: 1.8rem;
  width: 1.8rem;
}
.humberger-button {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  width: 1.8rem;
  height: .2rem;
  margin: auto;
  background: #aaa;
  transform-origin: top right;
  &::before,&::after {
    position: absolute;
    right: 0;
    width: 1.8rem;
    height: .2rem;
    background: #aaa;
    transition: .2s;
    content: "";  
  }
  &::before {
    top: -0.5rem;
  }
  &::after {
    top: .5rem;
  }
}
.humberger.is-active {
  .humberger-button {
    background: transparent;
    &::before {
      top: 0;
      transform: translate(-.1rem,.15rem) rotate(-45deg);
    }
    &::after {
      top: 0;
      transform: translate(-.1rem, .1rem) rotate(45deg);
    }
  }
}
.humberger-wrap {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 4rem;
  left: 0;
  display: block;
  .humberger-menu {
    display: block;
    width: 88vw;
    height: 100vh;
    background-color: #ddd;
  }
}
.menu-wrap {
  padding: 2rem 1.4rem;
  text-align: left;
}
.menu-enter-active {
  animation-name: RightToLeft;
  animation-duration: .3s;
}
.menu-leave-active { 
  animation-name: LeftToRight;
  animation-duration: .3s;
}

// MenuBox
.header /deep/ .menu-box {
  margin: 0 0 4rem;
  .menu-list-item {
    display: flex;
    color: #2c3e50;    
    font-weight: normal;
    font-size: 1.6rem;
    & + li {
      margin-top: 1rem;
    }
    &::before {
      display: block;
      margin: auto .3rem auto 0;
      width: 1.4rem;
      height: 1.4rem;
      background-size: contain;
      background-repeat: no-repeat;
      content: '';
    }
    &.about::before {
      background-image: url('../assets/images/icons/face.svg');
    }
    &.github::before {
      background-image: url('../assets/images/icons/github.svg');
    }
    &.qiita::before {
      background-image: url('../assets/images/icons/qiita.svg');
    }
    &.rakugaki::before {
      background-image: url('../assets/images/icons/palette.svg');
    }
    &.beauty::before {
      background-image: url('../assets/images/icons/lipstick.svg');
    }
    &.contact::before {
      background-image: url('../assets/images/icons/mail.svg');
    }
  }
}

// SubMenu
.header /deep/ .submenu {
  .submenu-list-item {
    font-size: 1rem;
    color: #555;
  }
}

// SnsList
.header /deep/ .sns-list {
  margin: 1rem 0;
  ul {
    width: 40%;
  }
  a::before {
    width: 1.8rem;
    height: 1.8rem;
  }
}
@media screen and (min-width:781px) {
  .header /deep/ .sns-list {
    ul {
      width: 25%;
    }
  }
}

// animation
@keyframes RightToLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes LeftToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
