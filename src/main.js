// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/js/initRem"
import "./assets/scss/reset.scss"

// ajax请求
import httpService from './config/httpService'
// 将$httpService挂载到vue原型上
Vue.prototype.$httpService = httpService;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
