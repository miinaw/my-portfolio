<template>
  <div class="page" :class="pagename">
    <slot name="logo"></slot>
    
    <slot neme="title"></slot>
    
    <div class="page-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageBase',
  props: {
    pagename: String
  }
}
</script>

<style lang="scss">
.page-content {
   margin: 2rem 0 4rem;
}
@media screen and (min-width:781px) {
  .page-content {
    margin: 4rem 0 4rem;
  }
}
</style>