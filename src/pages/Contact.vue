<template>
  <div class="page contact">
    <Title title="Contact."/>
    <div class="page-content">
      <form action="https://" method="post">
        <div>
          <label>お名前
            <input name="お名前" type="text">
          </label>
        </div>
        <div>
          <label>メールアドレス
            <input name="メールアドレス" type="email">
          </label>
        </div>
        <div>
          <label>お問い合わせ
            <textarea name="お問い合わせ"></textarea>
          </label>
        </div>
        <button type="submit" class="submit-button">送信</button>
      </form>
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