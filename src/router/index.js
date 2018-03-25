import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import home from '@/components/home/home'

import subPage from '@/components/subPage'
import contentDetail from '@/components/content/contentDetail'



Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'active', // 这是链接激活时的class
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path:'',
          name:'home',
          component:home

        }
      ]
    },
    {
      path:'/subPage',
      component:subPage,
      children:[
        {
          path:'contentDetail',
          name:'contentDetail',
          component:contentDetail,
          meta:{
            keepAlive:true
          }
        }
      ]
    }
  ]
})
