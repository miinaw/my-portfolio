<template>
  <PageBase pagename="rakugaki">
    <template v-slot:logo><Logo/></template>
    
    <template v-slot="title">
      <Title title="My pictures" description="I draw sometimes."/>
    </template>
    
    <template v-slot:content>
      <ul class="picture-list">
        <li v-for="picture in pictures" :key="picture.key" class="picture-list-item"><img :src="picture.url"></li>
      </ul>
    </template>
  </PageBase>
</template>

<script>
import PageBase from '../components/PageBase.vue'
import Logo from '../components/Logo.vue'
import Title from '../components/Title.vue'
import { PICTURE_LIST } from '../utils/constants/pictures.js'

export default {
  name: 'Rakugaki',
  components: {
    PageBase,
    Logo,
    Title
  },
  data() {
    return {
      pictures: PICTURE_LIST
    }
  }
}
</script>

<style lang="scss" scoped>
.picture-list {
  display: grid;
    grid-gap: 3vw;
    grid-template-columns: repeat(3, 28.5vw);
    grid-template-rows: repeat(4, 28.5vw);
    justify-content: space-around;
}
.picture-list-item {
  grid-column-start: span 2;
  grid-row-start: span 2;
  &:nth-child(2) {
    grid-column-start: 3;
    grid-row-start: 1;
  }
  &:nth-child(3) {
    grid-column-start: 3;
    grid-row-start: 2;
  }
  &:nth-child(4) {
    grid-column-start: 1;
    grid-row-start: 3;
  }
  &:nth-child(5) {
    grid-column-start: 1;
    grid-row-start: 4;
  }
  &:nth-child(8) {
    grid-column-start: 3;
    grid-row-start: 5;
    background: #dedede;
  }
  &:nth-child(9) {
    grid-column-start: 3;
    grid-row-start: 6;
    background: #dedede;
  }
}
img {
  object-fit: contain;
  display: block;
  width: 100%;
  height: 100%;
}
</style>