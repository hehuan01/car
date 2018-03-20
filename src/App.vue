<template>
  <div id="app">
    <public-header :title="title" :hideHome="hideHome" :showTitle="showTitle">1111</public-header>
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
      hideHome:true,
      showTitle:true,
    }
  },
  created(){
    console.time('test')
    this.$httpService.login({},function (res) {
      console.dir(document)
    })
    console.timeEnd('test');;
  },
  components:{publicHeader},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F7F7F7;
  height: 100%;
  width: 100%;
}
</style>
