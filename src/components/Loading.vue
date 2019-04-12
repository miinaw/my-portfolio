<template>
  <div class="loading">
    <breeding-rhombus-spinner
      v-show="loading"
      :animation-duration="2000"
      :size="30"
      color="#ccc"
      class="loading"
    />
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: 'Loading',
  components: {
    BreedingRhombusSpinner,
  },
  props: {
    loading: {
      default: true,
      type: Boolean
    }
  },
}
</script>

<style lang="scss" scoped>
.loading {
  margin: 2rem auto;
}
</style>
