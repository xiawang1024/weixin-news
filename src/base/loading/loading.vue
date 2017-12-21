<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'
  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .mf-loading-container
    display flex
    justify-content center
    img
      width: 0.5rem
      height: 0.5rem
      display: block
</style>