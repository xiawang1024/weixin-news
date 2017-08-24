<template>
  <div class="mf-loading-container">
    <img src="./loading.gif" :width="width" :height="height">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'

  export default {
    name: COMPONENT_NAME,
    props:{
      width:{
        type:Number,
        default:40
      },
      height:{
        type:Number,
        default:40
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .mf-loading-container
    text-align center
    img
      display: inline-block
</style>
