<template>
  <div class="common-tab">
    <div class="tabs ubox">
      <div :class="['sub-tab',activeIndex==index?'active':'']" v-for="(item,index) in tab" :key="index" @click="showTab(index)"><span>{{item.tabName}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    props:["tab"],
    data() {
      return {
        activeIndex:0
      }
    },
    methods:{
      showTab(index){
        this.activeIndex = index
        this.$emit('showList',index)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .common-tab{
    .tabs{
      background:#fff;
      height: 44rem/$num;
      line-height: 44rem/$num;
      border-bottom: 1px solid #eee;
      .sub-tab{
        width:50%;
        font-size: 14rem/$num;
        color: #666;
        text-align: center;
      }
      .active{
        color: #B9A468;
        span{
          display: inline-block;
          height:44rem/$num;
          padding:0 9.5rem/$num;
          border-bottom: 2px solid #B9A468;
          box-sizing:border-box;
          -webkit-box-sizing:border-box;
        }
      }
    }
  }
</style>
