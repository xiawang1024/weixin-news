<template>
    <section class="inner">
        
    首页

    </section>
</template>

<script>
import { getNewsList } from "api/index.js"
export default {
  name:'inner',
  data() {
      return {

      }
  },
  created() {
      this.getNewsList()
  },
  methods:{
      getNewsList(){
          getNewsList(40).then((res) => {
              console.log('------------------------------------');
              console.log(res);
              console.log('------------------------------------');
          })
      }
  }
}
</script>

<style lang="stylus" scoped>

</style>

