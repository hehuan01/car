<template>
  <div class="my-store sub-content">
    <div class="tabs ubox">
      <div class="sub-tab active"><span>动态</span></div>
      <div class="sub-tab">商品</div>
    </div>
    <div class="dynamic">
      <list></list>
    </div>
  </div>
</template>

<script>
  import list from "../common/list"
  export default {
    data() {
      return {

      }
    },
    components: {
      list
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-store{
    background: #fff;
    .tabs{
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
    .dynamic{
      padding:25rem/$num 0 0 25rem/$num;
    }
  }
</style>
