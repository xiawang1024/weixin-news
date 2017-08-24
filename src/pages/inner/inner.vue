<template>
    <section class="inner">
        <section ></section>
    </section>
</template>

<script>
import { getNewsList, getNewsData } from "api/index.js"
export default {
    name:'inner',
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
                    console.log(data.body);
                    console.log('------------------------------------');
                })
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

