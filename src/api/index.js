import axios from 'axios'
axios.defaults.baseURL = 'http://api.hndt.com'
/**
 * 
 * @param {number} page 页数
 * @param {number} rows 单页数量 默认30条
 */
const getNewsList = (page, rows = 30) => axios.get('/api/page?template_id=93&rows=' + rows + '&page=' + page)
/**
 * 
 * @param {number} id 索引id
 */
const getNewsData = (id) => axios.get('/api/page?template_id=164&article_id=' + id)

export {
    getNewsList,
    getNewsData
}