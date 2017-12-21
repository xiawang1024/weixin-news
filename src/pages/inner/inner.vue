<template>
    <div class="inner-wrap">
        <inner-header></inner-header>
        <section class="inner">
            <h3 class="title">{{newsData.title}}</h3>
            <p class="info">
                <span>{{newsData.time}}</span>
                <span>来源：{{newsData.channel}}</span>
            </p>
            <div class="text" v-html="newsData.body"></div>
        </section>
    </div>
</template>

<script>
import InnerHeader from 'components/innerHeader/innerHeader'
import { getNewsList, getNewsData } from "api/index.js"
export default {
    name:'inner',
    components:{
        InnerHeader
    },
    data() {
        return {
            newsData:{}
        }
    },
    created() {
        this._getNewsData(this._parseUrl())
    },
    methods:{
        _parseUrl() {
            return this.$route.query.id
        },
        _getNewsData(id) {
            return new Promise((resolve, reject) => {
                getNewsData(id).then((res) => {
                    let data = res.data;
                    this.newsData = data
                    console.log('------------------------------------');
                    console.log((data.body));
                    console.log('------------------------------------');
                })
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.inner
    margin-top 100px
    line-height 1.85
    font-size 28px
    text-indent 2em
    padding 20px
    box-sizing border-box
    overflow hidden
    padding-bottom 80px
    .title
        font-size 36px
        font-weight 700
        line-height 1.6
    .info
        color #999
        font-size 24px
        margin 30px 0 
        display flex
</style>

