<template>
  <div class="page contact">
    <Title title="Contact."/>
    <div class="page-content">
      <form ref="form" lazy-validation>
        <div>
          <label>お名前
            <input 
              v-model="contactForm.name"
              name="お名前" type="text"
              required
            >
          </label>
        </div>
        <div>
          <label>メールアドレス
            <input
              v-model="contactForm.email"
              name="メールアドレス" type="email"
              required
              >
          </label>
        </div>
        <div>
          <label>お問い合わせ
            <textarea 
              v-model="contactForm.contents"
              name="お問い合わせ"
              required
            ></textarea>
          </label>
        </div>
        <button
          @click="sendMail()"
          block
          large
          color="info"
          type="submit" class="submit-button"
        >送信</button>
      </form>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import { functions } from '../plugins/firebase'

export default {
  name: 'about',
  components: {
    Title,
  },
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: '',
      loading: false
    },
  }),
  methods: {
    sendMail: function () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        const mailer = functions.httpsCallable('sendMail')

        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            console.log("お問い合わせありがとうございました")
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            this.contactForm.loading = false
          })
        }
      },
      formReset: function () {
        this.$refs.form.reset()
      },
  },
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