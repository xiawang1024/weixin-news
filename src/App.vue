<template>
  <div id="app">
    <keep-alive include="index">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: 'app'
}
</script>

<style>

</style>
