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
                    <li 
                        class="list-item border-bottom-1px" 
                        v-for="item in newsList"
                        @click="goToInner(item.id)">
                        <div class="cover-wrap">
                            <img v-lazy="item.src" alt="" class="img">
                        </div>
                        <div class="text-wrap">
                            <h3 class="title">
                                {{item.title}}
                            </h3>
                            <span class="time">
                                {{item.time}}
                            </span>
                        </div>                    
                    </li>
                </ul>
            </scroll>
        </section>
        <load class="loading" :width="60" :height="60" v-show="newsList.length == 0"></load>
    </section>
</template>

<script>
import HeaderHome from 'components/header/header'
import Scroll from 'base/scroll/scroll'
import Load from 'base/loading/loading'
import { getNewsList, getNewsData } from "api/index.js"
export default {
  name:'index',
  components:{
      HeaderHome,
      Scroll,
      Load
  },
  data() {
      return {
            pageIndex:1, //当前页数
            newsList:[], //新闻列表
            pullUpLoad:{
                txt:{
                    more:'玩命加载中',
                    nomore:'没有更多数据'
                },
                threshold:0
            },
            pullDownRefresh:{
                txt:'更新成功',
                stop:80,
                threshold:100
            }
      }
  },
  created() {
      this._getNewsList(this.pageIndex).then((newsList) => {
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
      _getNewsList(pageIndex) {
          return new Promise((resolve, reject) => {
              getNewsList(pageIndex).then((res) => {
                    let newsList = res.data.list
                    resolve(newsList)
              })
          })
      },
      onPullingDown() {
        this._getNewsList(1).then((newsList) => {
            setTimeout(() => {
                this.newsList = newsList
            },20)
        })
      },
      onPullingUp() {
          this.pageIndex ++ ;
          this._getNewsList(this.pageIndex).then((newsList) => {
             setTimeout(() => {
                 this.newsList = this.newsList.concat(newsList)
             },20)
          })
      },
      goToInner(id) {
          this.$router.push({path:'/inner',query:{id}})
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
.news-list
    position absolute
    top 100px
    bottom 0
    width 100%
    box-sizing border-box
    .list-content
        width 100%
        .list-item
            display flex
            height: 200px
            font-size: 32px
            padding 20px
            border-bottom-1px(#ccc)
            overflow hidden
            box-sizing border-box
            .cover-wrap
                align-self center
                width 200px
                max-height 160px
                overflow hidden
                font-size 0
                .img
                    display inline-block
                    width 200px
                    height auto
            .text-wrap
                position relative
                margin-left 20px
                flex-fix()
                line-height 1.4
                font-size 30px
                .time
                    position absolute
                    bottom 0
                    right 0
                    font-size 24px
                    color #999
.loading
    margin-top 200px
</style>

