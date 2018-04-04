import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import home from '@/components/home/home'
import goodsList from '@/components/goods/goodsList'

import subPage from '@/components/subPage'
import contentDetail from '@/components/content/contentDetail'
import allComments from '@/components/content/allComments'
import result from '@/components/select/result'
import goodsDetail from '@/components/goods/goodsDetail'


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
          component:home,
          meta:{
            title:"首页推荐",
            keepAlive:true
          }
        },
        {
          path:'goodsList',
          name:'goodsList',
          component:goodsList,
          meta:{
            title:"车库",
            keepAlive: true
          }
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
        },
        {
          path:'allComments',
          name:'allComments',
          component:allComments,
          meta:{
            title:'所有评论',
            keepAlive:true
          }
        },
        {
          path:'result',
          name:'result',
          component:result,
          meta:{
            title:'立即定制',
            keepAlive:true
          }
        },
        {
          path:'goodsDetail',
          name:'goodsDetail',
          component:goodsDetail,
          meta:{
            title:'保时捷',
            keepAlive:true
          }
        }
      ]
    }
  ]
})
