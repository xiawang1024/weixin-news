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
const IMGURL = 'http://hndt.com/res/logo_300.png'

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
    beforeRouteEnter(to,from,next) {
		
		
		next( vm => {
			vm.href = window.location.href.split('#')[0] + '#' + to.fullPath
			console.log(vm.href)
		})
		
	},
    methods:{
        _share() { 
			wx.ready(() => {
				wx.onMenuShareTimeline({
					title: this.newsData.title, // 分享标题
					link: this.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: IMGURL, // 分享图标
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
					}
				});
				wx.onMenuShareAppMessage({
					title: this.newsData.title, // 分享标题
					desc: "听河南，览天下！", // 分享描述
					link: this.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: IMGURL, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
					}
				});
			})
		},
        _parseUrl() {
            return this.$route.query.id
        },
        _getNewsData(id) {
            return new Promise((resolve, reject) => {
                getNewsData(id).then((res) => {
                    let data = res.data;
                    this.newsData = data
                    setTimeout(() => {
                        this._share()
                    },20)
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

