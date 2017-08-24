<template>
  <header class="header">
      <span class="logo"></span>
  </header>
</template>

<script>
export default {
    name:'header',
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.header 
    display flex
    justify-content center
    align-items center
    width 100%
    height  100px
    line-height 100px
    text-align center
    color #ffffff
    font-size 40px
    background #1ba2ff
    .logo
        display inline-block
        height 70px
        width 100%
        background url('./logo.png') center center no-repeat
        background-size contain
</style>
