import axios from 'axios'
axios.defaults.baseURL = 'http://admin.hndt.com'
/**
 * 
 * @param {number} page 页数
 * @param {number} rows 单页数量 默认40条
 */
const getNewsList = (page, rows = 40) => axios.get('/api/page?channel_id=969&template_id=153&rows=' + rows + '&page=' + page)


export {
    getNewsList
}