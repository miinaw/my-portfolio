<template>
  <div class="page contact">
    <Title title="Contact."/>
    <div class="page-content">
      <form 
        v-if="isSubmit === false" 
        @submit.prevent="onSubmit" 
        name="contact" method="POST"
        data-netlify="true"
      >
        <div>
          <label>お名前
            <input v-model="name" name="name" type="text">
          </label>
        </div>
        <div>
          <label>メールアドレス
            <input v-model="email" name="email" type="email">
          </label>
        </div>
        <div>
          <label>お問い合わせ
            <textarea v-model="content" name="content"></textarea>
          </label>
        </div>
        <button type="submit" class="submit-button">送信</button>
      </form>
      <div v-if="isSubmit === true">
        <p>ありがとうございます。</p>
      </div>
      
      <form name="ask-question" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="radio" name="panelist" />
        <textarea name="question"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import axios from 'axios'

export default {
  name: 'about',
  components: {
    Title,
  },
  data() {
    return {
      name: '',
      email: '',
      content: '',
      isSubmit: false
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('form-name', 'contact') // Forms使うのに必要

      params.append('name', this.name)
      params.append('email', this.email)
      params.append('content', this.content)

      axios
        .post('/', params)
        .then(() => {
          this.isSubmit = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  text-align: left;
  div {
    min-height: 3rem;
  }
}
.submit-button {
  display: block;
  margin: 2rem auto;
  padding: 1rem;
  width: 60vw;
  background-color: #2c3e50;
  color: #fff;
}
</style>