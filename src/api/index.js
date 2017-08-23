import axios from 'axios'
axios.defaults.baseURL = 'http://admin.hndt.com'
/**
 * 
 * @param {number} rows 每页条数
 */ 
const getNewsList = (rows) => axios.get('/api/page?template_id=153&rows=' + rows)


export {
    getNewsList
}