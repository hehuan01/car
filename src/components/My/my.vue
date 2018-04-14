<template>
  <div class="my sub-content">
    <div class="top">
      <div class="my-info">
        <img src="../../assets/images/my/head.png"/>
        <p>大脸猫</p>
      </div>
      <div class="my-do">
        <div class="do-item">
          <p class="do-num">188</p>
          <p class="do-name">粉丝</p>
        </div>
        <div class="line"></div>
        <div class="do-item">
          <p class="do-num">16</p>
          <p class="do-name">关注</p>
        </div>
        <div class="line"></div>
        <div class="do-item">
          <p class="do-num">2990</p>
          <p class="do-name">获赞与收藏</p>
        </div>
      </div>
    </div>
    <div class="my-list">
      <div class="sub-list ubox">
        <p class="lft">
          <span class="icon icon1">
          </span><span>个人主页</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
    </div>
    <div class="my-list">
      <div class="sub-list border-bottom ubox">
        <p class="lft">
          <span class="icon icon2"></span>
          <span>我的订单</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
      <div class="sub-list border-bottom ubox">
        <p class="lft">
          <span class="icon icon3"></span>
          <span>我的收藏</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
      <div class="sub-list ubox">
        <p class="lft">
          <span class="icon icon4"></span>
          <span>我的关注</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
    </div>
    <div class="my-list">
      <div class="sub-list border-bottom ubox">
        <p class="lft">
          <span class="icon icon5"></span>
          <span>联系客服</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
      <div class="sub-list ubox">
        <p class="lft">
          <span class="icon icon6"></span>
          <span>设置</span>
        </p>
        <p class="rgt-arrow"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my{
    .top{
      background:#fff;
      .my-info{
        padding-top:5rem/$num;
        text-align: center;
        img{
          width:60rem/$num;
          height:60rem/$num;
          vertical-align: top;
        }
        p{
          padding-top:15rem/$num;
          font-size: 14rem/$num;
          color: #333;
        }
      }
      .my-do{
        padding:30rem/$num;
        display: box;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        -webkit-justify-content:space-around;
        .do-item{
          font-size: 14rem/$num;
          text-align: center;
          .do-num{
            color: #B9A468;
          }
          .do-name{
            padding-top:8rem/$num;
            color: #666;
          }
        }
        .line{
          width:1rem/$num;
          height:30rem/$num;
          background:#eee;
        }
      }
    }
    .my-list{
      margin-top:10rem/$num;
      background:#fff;
      padding:0 20rem/$num;
      .sub-list{
        height:60rem/$num;
        line-height: 60rem/$num;
        .lft{
          font-size: 14rem/$num;
          color: #333;
          .icon{
            display: inline-block;
            margin-right: 14rem/$num;
            width:18rem/$num;
            height:18rem/$num;
            background-repeat: no-repeat;
            background-size: cover;
            vertical-align: middle;
          }
          .icon1{
            background-image: url(../../assets/images/my/home-page-icon.png);
          }
          .icon2{
            background-image: url(../../assets/images/my/my-order-icon.png);
          }
          .icon3{
            background-image: url(../../assets/images/my/my-store-icon.png);
          }
          .icon4{
            background-image: url(../../assets/images/my/my-follow-icon.png);
          }
          .icon5{
            background-image: url(../../assets/images/my/my-follow-icon.png);
          }
          .icon6{
            background-image: url(../../assets/images/my/set-icon.png);
          }
          span{
            vertical-align: middle;
          }
        }
        .rgt-arrow{
          width:8rem/$num;
          height: 8rem/$num;
          border-top: 1px solid #eee;
          border-right:1px solid #eee;
          transform:rotate(45deg);
          -webkit-transform:rotate(45deg);
        }
      }
      .border-bottom{
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>
