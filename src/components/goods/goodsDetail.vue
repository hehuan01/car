<template>
  <div class="goods-detail sub-content">
    <div class="branch-banner">
      <img src="../../assets/images/goods/branch-banner.png"/>
    </div>
    <div class="branch-info">
      <div class="ubox">
        <p><img src="../../assets/images/goods/branch-logo.png"/></p>
        <p><span>来自<br><i>中国</i></span><span>关注<br><i>12300</i></span></p>
        <p class="rgt-btn">关注</p>
      </div>
    </div>
    <div class="about-goods">
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .goods-detail{
    .branch-banner{
      img{
        width:100%;
        height:150rem/$num;
        vertical-align: top;
      }
    }
    .branch-info{
      background:#fff;
      padding:13rem/$num 10rem/$num;
      img{
        width:85rem/$num;
        height:60rem/$num;
      }
      p{
        font-size:12rem/$num;
        color: #999;
        span{
          display: inline-block;
          padding:0 10rem/$num;
          text-align: center;
        }
        i{
          display:inline-block;
          padding-top: 10rem/$num;
          font-size:14rem/$num;
          color: #666;
        }
      }
      .rgt-btn{
        width:54rem/$num;
        height:24rem/$num;
        border: 1px solid #B9A468;
        border-radius: 4rem/$num;
        font-size: 14rem/$num;
        color: #B9A468;
        line-height: 24rem/$num;
        text-align: center;
      }
    }
    .about-goods{
      margin-top:10rem/$num;
    }
  }
</style>
