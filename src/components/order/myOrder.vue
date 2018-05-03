<template>
  <div class="my-order">
    <div class="sub-content">
      <div class="content">
        <div class="top">
          <div class="item ubox">
            <p class="date">2018－02－24</p>
            <p class="status">交易中</p>
          </div>
          <div class="item2">
            <img src="../../assets/images/order/product.png"/>
          </div>
        </div>
        <div class="other">
          <div class="item ubox">
            <p class="label">品名</p>
            <p class="rgt-cont">保时捷711</p>
          </div>
          <div class="item ubox">
            <p class="label">价格</p>
            <p class="rgt-cont">¥1,230,000</p>
          </div>
          <div class="item ubox">
            <p class="label">自提地址</p>
            <p class="rgt-cont"> 上海市浦东新区张东路123号 1号大厦</p>
          </div>
          <div class="logistics-info">
            <span>分享体验报告</span>
            <router-link to="/subPage/expressInfo">
              <span>查看物流信息</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <btn :text="text"></btn>
  </div>
</template>

<script>
  import btn from "../common/btn"
  export default {
    data() {
      return {
        text:'联系客服'
      }
    },
    components:{
      btn
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-order{
    .content{
      .top{
        background: #fff;
        padding:0 20rem/$num;
        .item{
          padding:13.5rem/$num 0;
          border-bottom: 1px solid #eee;
          .date{
            font-size: 12rem/$num;
            color: #242A35;
          }
          .status{
            font-size: 12rem/$num;
            color: #FE1F49;
          }
        }
        .item2{
          margin:0 -20rem/$num;
          img{
            width:100%;
            vertical-align: top;
          }
        }
      }
      .other{
        background: #fff;
        margin-top: 10rem/$num;
        padding:0 20rem/$num;
        .item{
          padding:22.5rem/$num 0;
          border-bottom: 1px solid #eee;
          .label{
            font-size: 14rem/$num;
            color: #333;
          }
          .rgt-cont{
            font-size: 14rem/$num;
            color: #242A35;
          }
        }
        .logistics-info{
          padding: 15rem/$num 0;
          display: box;
          display: -webkit-box;
          display: flex;
          display: -webkit-flex;
          flex-direction:row-reverse;
          span{
            display: inline-block;
            margin-left: 10rem/$num;
            padding:0 13rem/$num;
            height: 24rem/$num;
            line-height: 24rem/$num;
            border: 1px solid #CDBC8A;
            border-radius: 3px;
            font-size: 12rem/$num;
            color: #B9A468;
            text-align: center;
            box-sizing:border-box;
            -webkit-box:border-box;
          }
        }
      }
    }
  }
</style>
