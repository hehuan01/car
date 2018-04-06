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
      <div class="tabs ubox">
        <div class="sub-tab active"><span>产品系列</span></div>
        <div class="sub-tab">体验报告</div>
      </div>
      <div class="goods-intro">
        <div class="goods-list">
          <p class="title"><i></i><i></i><span>718 Cayman 车型</span></p>
          <div></div>
        </div>
      </div>
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
      background:#fff;
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
            border-bottom: 2px solid #B9A468;
            box-sizing:border-box;
            -webkit-box-sizing:border-box;
          }
        }
      }
      .goods-intro{
        padding:0 20rem/$num;
        .goods-list{
          padding:5.5rem/$num 0 30rem/$num;
          border-bottom: 1px solid #eee;
          .title{
            padding:20rem/$num 0;
            font-size: 14rem/$num;
            color: #333;
            i{
              content:'';
              display: inline-block;
              width:5rem/$num;
              height:5rem/$num;
              border-top: 1px solid #B9A468;
              border-right: 1px solid #B9A468;
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              vertical-align: middle;
            }
            span{
              display: inline-block;
              vertical-align: middle;
              margin-left: 8.8rem/$num;
            }
          }
        }
      }
    }
  }
</style>
