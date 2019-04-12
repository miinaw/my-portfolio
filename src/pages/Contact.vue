<template>
  <div class="page contact">
    <Title title="Contact."/>
    <div class="page-content">
      <div v-if="errors.length" class="error-message">
        <p v-for="error in errors" :key="error.key">{{ error }}</p>
        <p><br>を入力してください</p>
      </div>
      <form 
        v-if="isSubmit === false" 
        @submit.prevent="checkForm" 
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
        <div class="message">
          <label>お問い合わせ内容
            <textarea v-model="message" name="message"></textarea>
          </label>
        </div>
        <button type="submit" class="submit-button">SEND</button>
      </form>
      <div v-if="isSubmit === true">
        <p>お問い合わせありがとうございます。</p>
        <a href="/" class="button">TOPページへ</a>
      </div>
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
      message: '',
      isSubmit: false,
      errors: [],
    }
  },
  methods: {
    checkForm() {
      if (this.name && this.email && this.message) {
        this.onSubmit();
        return true;
      }
      this.errors = [];
      
      if (!this.name) {
        this.errors.push('「お名前」');
      }
      if (!this.email) {
        this.errors.push('「メールアドレス」');
      }
      if (!this.message) {
        this.errors.push('「お問い合わせ内容」');
      }
    },
    onSubmit() {
      this.errors = [];
      const params = new URLSearchParams()

      params.append('form-name', 'contact') // Forms使うのに必要

      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)

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
  margin: 0 2rem;
  color:#2c3e50;
  div {
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: .5rem 0 1.8rem;
    width: 100%;
    line-height: 1.5rem;
    border: 1px solid #ccc;
  }
  textarea {
    height: auto;
    min-height: 10rem;
  }
}
.submit-button, .button {
  display: block;
  margin: 3rem auto;
  padding: .8rem;
  width: 60vw;
  border: solid 1px #aaa;
  background-color: #2c3e50;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.4);
  color: #fff;
}
.error-message {
  margin: 2rem 2rem;
  text-align: left;
  font-size: .8rem;
  font-weight: 600;
  color: #cc1426;
  p:first-child::before {
    content: '※';
  }
  p {
    display: inline;
  }
}
</style>