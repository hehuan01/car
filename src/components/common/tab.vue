<template>
  <div class="common-tab">
    <div class="tabs ubox">
      <div class="sub-tab active"><span>动态</span></div>
      <div class="sub-tab">商品</div>
    </div>
  </div>
</template>

<script></script>

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
