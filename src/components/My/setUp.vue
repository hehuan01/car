<template>
  <div class="set-up sub-content">
    <div class="set-up-pos">
      <router-link to="/subPage/myInfo" class="set-item ubox">
        <p>个人资料</p>
        <p class="rgt-arrow"></p>
      </router-link>
      <router-link to="/subPage/address" class="set-item ubox">
        <p>收货地址</p>
        <p class="rgt-arrow"></p>
      </router-link>
      <router-link to="" class="set-item ubox">
        <p>意见反馈</p>
        <p class="rgt-arrow"></p>
      </router-link>
      <router-link to="" class="set-item ubox">
        <p>关于洋车库</p>
        <p class="rgt-arrow"></p>
      </router-link>
      <router-link to="" class="set-item ubox">
        <p>退出账号</p>
        <p class="rgt-arrow"></p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .set-up{
    background:#fff;
    .set-up-pos{
      padding-left: 20rem/$num;
      .set-item{
        padding-right: 20rem/$num;
        height:60rem/$num;
        line-height: 60rem/$num;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        -webkit-box-sizing:border-box;
        p{
          font-size: 14rem/$num;
          color: #333;
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
    }
  }
</style>
