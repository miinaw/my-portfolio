<template>
  <PageBase pagename="about">
    <template v-slot:logo><Logo/></template>
    
    <template v-slot="title">
      <Title title="About me." description="Hi. I'm a engineer."/>
    </template>
    
    <template v-slot:content>
      <div class="heading">
        <h1 class="heading-title">Profile.</h1>
      </div>
      <div class="body">
        <p>横山美波(Minami Yokoyama)</p>
        <p>1996年1月6日生まれ</p>
        <p>宮崎県出身</p>
        <p>宮崎大学工学部 情報システム工学科 2018年卒</p>
        <p>株式会社アラタナに新卒入社(フロントエンドエンジニア)</p>
        <p>使用しているエディターはVS Code</p>
        <p>使用しているメモアプリはBoostnote</p>
        <p>好きなたべものはチョコレート(よく食べるのはブラックサンダーゴールドとチロルチョコのミルク)</p>
        <p>好きな場所は海</p>
        <p>好きな動物は猫</p>
      </div>
      
      <div class="heading">
        <h1 class="heading-title">Life so far.</h1>
      </div>
      <div class="body">
        <p>小さい頃からも絵を描くことやものづくりが好きだったためデザイン専門の高校を受けようとしたが、兄の影響で情報システムの道に進む。</p>
        <p>高校、大学ではC・mySQL・PHP・Rなどを触る。</p>
        <p>高校の卒業研究ではkinectを用いた「仮想試着室」を実装。</p>
        <p>大学の卒業研究では筋電位や脳波を用いた生体認証の研究を行う。</p>
        <p>大学時代は経験のため、株式会社アダストリアのブランドでの販売や、地元テレビ局でFDをアルバイトとして3年ほど務める。</p>
        <p>IT業界やアパレル業界に興味をもっていたこともあり、株式会社アラタナに入社し、フロントエンドエンジニアに配属される。</p>
        <p>研修期間にwordpressで「アラタナ24h」という会社のブログをリニューアル。その後、ECサイトで扱うFAQサイトを実装。機能はwordpressプラグインとして導入。</p>
        <p>本配属後は主にZOZOTOWN取扱いブランドの自社ECサイトのフロント部分の実装を行う。</p>
        <p>プロダクト内でのCSS設計手法はITCSSで、SCSSを使用。ビルドツールはwebpack。</p>
        <p>現在はVueやNuxtを使った開発にも携わっている。</p>
      </div>
      
      <div class="heading">
        <h1 class="heading-title">The me today.</h1>
        <p>My instagram photos.</p>
      </div>
      <div class="instagram">
        <a 
        v-for="post in posts.data" 
        v-bind:key="post.key" 
        v-bind:href="post.link"
        class="post"
        >
        <img v-bind:src="post.images.standard_resolution.url">
        </a>
      </div>
    </template>
  </PageBase>
</template>

<script>
import PageBase from '../components/PageBase.vue'
import Logo from '../components/Logo.vue'
import Title from '../components/Title.vue'
import axios from 'axios';

export default {
  name: 'about',
  components: {
    PageBase,
    Logo,
    Title,
  },
  data() {
    return {
      posts: {}
    }
  },
  methods: {
    getPost() {
      var access_token = process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token + '&count=15')
      .then(response => (this.posts = response.data))
    }
  },
  created() {
    this.getPost();
  }
}
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 1.5rem;
}
.heading-title {
  margin-bottom: .5rem;
  font-size: 1.8rem;
  font-weight: bold;
}
.body {
  margin: 0 2rem;
  p {
    text-align: left;
    font-size: .9rem;
    line-height: 1.4em;
  }
  p + p {
    margin-top: .5rem;
  }
  + .heading {
    margin-top: 2rem;
  }
}
p + .heading {
  margin-top: 2rem;  
}
.instagram {
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(3,29vw);
  grid-template-rows: repeat(3,29vw);
  justify-content: space-around;
}
a.post {
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
