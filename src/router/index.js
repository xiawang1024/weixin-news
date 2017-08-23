import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Inner from '@/pages/inner/inner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/inner',
      name: 'Inner',
      component: Inner
    }
  ]
})
