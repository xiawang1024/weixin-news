<template>
    <section class="index">
        <header-home></header-home>
        <section class="news-list" v-show="newsList.length > 0">
            <scroll
                :data="newsList"
                :pullDownRefresh="pullDownRefresh"
                :pullUpLoad="pullUpLoad"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp"
            >                
                <ul class="list-content">
                    <li  class="list-item border-bottom-1px" v-for="item in newsList">
                        <div class="cover-wrap">
                            <img v-lazy="item.src" alt="" class="img">
                        </div>
                        <div class="text-wrap">
                            {{item.title}}
                        </div>
                    </li>
                </ul>
            </scroll>
        </section>
    </section>
</template>

<script>
import HeaderHome from 'components/header/header'
import Scroll from 'components/scroll/scroll'
import { getNewsList } from "api/index.js"
export default {
  name:'index',
  components:{
      HeaderHome,
      Scroll
  },
  data() {
      return {
            pageIndex:1, //当前页数
            newsList:[], //新闻列表
            pullUpLoad:true,
            pullDownRefresh:true
      }
  },
  created() {
      this.getNewsList(this.pageIndex).then((newsList) => {
          setTimeout(() => {
              this.newsList = newsList
          },20)
      })
  },
  mounted() {
     
  },
  activated() {

  },
  methods:{
      getNewsList(pageIndex) {
          return new Promise((resolve, reject) => {
              getNewsList(pageIndex).then((res) => {
                    let newsList = res.data.list
                    resolve(newsList)
              })
          })
      },
      onPullingDown() {
        this.getNewsList(1).then((newsList) => {
            setTimeout(() => {
                this.newsList = newsList
            },20)
        })
      },
      onPullingUp() {
          this.pageIndex ++ ;
          this.getNewsList(this.pageIndex).then((newsList) => {
             setTimeout(() => {
                 this.newsList = this.newsList.concat(newsList)
             },20)
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.news-list
    position absolute
    top 120px
    bottom 0
    width 100%
    box-sizing border-box
    .list-content
        width 100%
        .list-item
            display flex
            align-items center
            height: 200px
            font-size: 32px
            padding 20px
            border-bottom-1px(#ccc)
            overflow hidden
            box-sizing border-box
            .cover-wrap
                width 200px
                max-height 160px
                overflow hidden
                font-size 0
                .img
                    display inline-block
                    width 200px
                    height auto
            .text-wrap
                margin-left 20px
                flex-fix()
                line-height 1.4
                font-size 30px
                align-self start
</style>

