<template>
  <div class="inner-header">
      <span class="back-icon" @click="goHome"></span>
      <span class="logo"></span>
      <span class="download-app">
          <a href="http://www.hndt.com/app/download/index.html">打开APP</a>
      </span>
  </div>
</template>
<script>
export default {
  name:'inner-header',
  methods:{
      goHome(){
          this.$router.push({
              path:'/index'
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.inner-header
    position fixed
    top 0
    left 0
    width 100%
    height 100px
    background #1ba2ff
    display flex
    align-items center
    justify-content space-between
    text-align center
    .back-icon
        display inline-block
        margin-left 30px
        width 80px
        height 50px
        background url('./back.png') left center no-repeat 
        background-size contain
    .logo
        display inline-block
        width 100%
        height 100px
        background url('./logo.png') center center no-repeat
        background-size auto 0.8rem
    .download-app
        display inline-block
        margin-right 15px
        width 160px
        height 60px
        line-height 60px
        background #ffffff
        border-radius 4px
        a
            display inline-block
            width 100%
            height 100%
            color #0081dc
</style>

