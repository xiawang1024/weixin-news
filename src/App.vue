<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive include="index">        
          <router-view></router-view>              
      </keep-alive>
    </transition> 
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: 'app'
}
</script>

<style>
body{
  background:#fff
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
