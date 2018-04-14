<template>
  <div class="public-header" v-if="showTitle">
    <div class="header">
      <div class="left-arrow" v-show="hideArrow"></div>
      <div class="jump-home" v-show="hideHome">
        <img src="../../assets/images/home.png">
      </div>
      <p>{{title}}</p>
      <!-- <router-link to="/subPage/search" class="search">
        <img src="../../assets/images/home/search.png" alt="">
      </router-link> -->
      <div class="client-service"><span>客服</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title','hideArrow','hideHome','showTitle']
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc.scss";
  .public-header{
    width:100%;
    background:#FBFBFB;
    position: absolute;
    left:0;
    top:0;
    z-index: 10;
    .header{
      height: 44rem/$num;
      line-height: 44rem/$num;
      display: -webkit-flex;
      display: -moz-flex;
      display: flex;
      .left-arrow{
        width:30rem/$num;
        height:100%;
        position: relative;
        padding-left:15rem/$num;
        margin-left:10rem/$num;
        &:after{
          content:"";
          position: absolute;
          top:16rem/$num;
          left:15rem/$num;
          width:12rem/$num;
          height:12rem/$num;
          border:1px solid #666;
          border-width:2px 0 0 2px;
          -webkit-transform:rotate(315deg);
          transform:rotate(315deg);
        }
      }
      .jump-home{
        img{
          width:25rem/$num;
          height:23rem/$num;
          margin-top:10rem/$num;
        }
      }
      p{
        text-align: center;
        position: absolute;
        top:0;
        left:0;
        width:100%;
        z-index: -1;
        font-size:17rem/$num;
      }
      .search{
        position:fixed;
        top:4rem/$num;
        right:20rem/$num;
        font-size: 15rem/$num;
        color: #FF575E;
        z-index:10;
        img{
          width:16rem/$num;
          height:16rem/$num;
        }
      }
      .client-service{
        position: fixed;
        top:0;
        right: 19rem/$num;
        font-size: 14rem/$num;
        color: #B9A468;
        &:before{
          content:'';
          display: inline-block;
          width:18rem/$num;
          height:18rem/$num;
          background-image: url(../../assets/images/help/tel-icon.png);
          background-repeat: no-repeat;
          background-size: cover;
          vertical-align: middle;
        }
        span{
          vertical-align: middle;
        }
      }
    }
  }
</style>
