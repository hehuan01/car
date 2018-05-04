import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import home from '@/components/home/home'
import goodsList from '@/components/goods/goodsList'
import help from '@/components/help/help'
import my from '@/components/My/my'

import subPage from '@/components/subPage'
import contentDetail from '@/components/content/contentDetail'
import allComments from '@/components/content/allComments'
import result from '@/components/select/result'
import goodsDetail from '@/components/goods/goodsDetail'
import goodsHome from '@/components/goods/goodsHome'
import search from '@/components/home/search'
import helpRule from '@/components/help/rule'
import personHomePage from '@/components/My/homePage'
import myStore from '@/components/My/myStore'
import myInterest from '@/components/My/myInterest'
import setUp from '@/components/My/setUp'
import myInfo from '@/components/My/myInfo'
import address from '@/components/My/address'
import myOrder from '@/components/order/myOrder'
import expressInfo from '@/components/order/expressInfo'
import orderDetail from '@/components/order/orderDetail'

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
        },
        {
          path:'help',
          name:'help',
          component:help,
          meta:{
            title:"问题"
          }
        },
        {
          path:'my',
          name:'my',
          component:my,
          meta:{
            title:""
          }
        }
      ]
    },
    {
      path:'/subPage',
      component:subPage,
      children:[
        {
          path:'search',
          name:'search',
          component:search,
          meta:{
            keepAlive: true
          }
        },
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
        },
        {
          path:'goodsHome',
          name:'goodsHome',
          component:goodsHome,
          meta:{
            title:'品牌专区',
            keepAlive:true
          }
        },
        {
          path:'helpRule',
          name:'helpRule',
          component:helpRule,
          meta:{
            title:'车源',
            keepAlive:true
          }
        },
        {
          path:'personHomePage',
          name:'personHomePage',
          component:personHomePage,
          meta:{
            keepAlive:true
          }
        },
        {
          path:'myStore',
          name:'myStore',
          component:myStore,
          meta:{
            title:'我的收藏',
            keepAlive:true
          }
        },
        {
          path:'myInterest',
          name:'myInterest',
          component:myInterest,
          meta:{
            title:'我的关注',
            keepAlive:true
          }
        },
        {
          path:'setUp',
          name:'setUp',
          component:setUp,
          meta:{
            title:'设置',
          }
        },
        {
          path:'myOrder',
          name:'myOrder',
          component:myOrder,
          meta:{
            title:'我的订单',
            keepAlive:true
          }
        },
        {
          path:'myInfo',
          name:'myInfo',
          component:myInfo,
          meta:{
            title:'个人资料',
          }
        },
        {
          path:'expressInfo',
          name:'expressInfo',
          component:expressInfo,
          meta:{
            title:'物流信息',
            keepAlive:true
          }
        },
        {
          path:'address',
          name:'address',
          component:address,
          meta:{
            title:'收货地址',
            keepAlive:true
          }
        },
        {
          path:'orderDetail',
          name:'orderDetail',
          component:orderDetail,
          meta:{
            title:'我的订单',
            keepAlive:true
          }
        },
      ]
    }
  ]
})
