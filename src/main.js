// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/js/initRem"
import "./assets/scss/reset.scss"
import "./assets/scss/mint-ui-style.scss"
import "./assets/scss/scssCalc.scss"

// ajax请求
import httpService from './config/httpService'
// 将$httpService挂载到vue原型上
Vue.prototype.$httpService = httpService;

import {
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
