import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/js/flexible.js'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/images/logo.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
