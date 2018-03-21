import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'active', // 这是链接激活时的class
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
