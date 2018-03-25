<template>
  <div id="app">
    <public-header :title="title" :hideArrow="hideArrow" :hideHome="hideHome" :showTitle="showTitle"></public-header>
    <keep-alive>
        <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition :name="'translate-' + direction">
      <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div id="loading">
      <img src="./assets/images/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
import publicHeader from './components/common/public-header'
export default {
  name: 'App',
  data(){
    return{
      title:"首页推荐",
      hideArrow:false,
      hideHome:false,
      showTitle:true,
      direction:'forward'
    }
  },
  created(){
    console.time('test')
    this.$httpService.login({},function (res) {
      console.dir(document)
    })
    console.timeEnd('test');;
  },
  watch: {  //watch $route监听路由变化，改变头部title
    '$route' (to, from) {
      //内容详情页不需要title
      if(to.path == "/subPage/contentDetail"){
        this.showTitle = false;
      }else{
        this.showTitle = true;
      }
    }
  },
  components:{publicHeader},
}
</script>

<style lang="scss">
@import "./assets/scss/scssCalc.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F7F7F7;
  height: 100%;
  width: 100%;
  .sub-content{
    position: absolute;
    width: 100%;
    padding-top:44rem/$num;
    padding-bottom: 49rem/$num;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
}
</style>
