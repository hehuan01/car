<template>
  <div class="high-select" :class="goodsListClass?'top':''">
    <div class="content">
      <div class="inner-pos">
      <div class="select-item">
        <div class="slide-item">
          <div class="slide-item-top">
            <p class="select-name">¥0-¥不限</p>
            <div class="slide">
            </div>
          </div>
          <div class="slide-text ubox">
            <p>¥0</p>
            <p>不限</p>
          </div>
        </div>
      </div>
      <div class="select-item">
        <p class="select-name">燃油类型</p>
        <div class="select-list">
          <ul>
            <li>不限</li>
            <li class="active">汽油</li>
            <li>柴油</li>
            <li>油电混合</li>
          </ul>
        </div>
      </div>
      <div class="select-item">
        <p class="select-name">燃油类型</p>
        <div class="select-list">
          <ul>
            <li>不限</li>
            <li class="active">汽油</li>
            <li>柴油</li>
            <li>油电混合</li>
          </ul>
        </div>
      </div>
      <div class="select-item">
        <p class="select-name">燃油类型</p>
        <div class="select-list">
          <ul>
            <li>不限</li>
            <li class="active">汽油</li>
            <li>柴油</li>
            <li>油电混合</li>
          </ul>
        </div>
      </div>
      <div class="select-item">
        <p class="select-name">燃油类型</p>
        <div class="select-list">
          <ul>
            <li>不限</li>
            <li class="active">汽油</li>
            <li>柴油</li>
            <li>油电混合</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    <cancel-true-btn></cancel-true-btn>
  </div>
</template>

<script>
import cancelTrueBtn from './cancel-true-btn'
export default {
  props: ['goodsListClass'],
  data() {
    return {

    }
  },
  components:{
    cancelTrueBtn
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .high-select{
    width:100%;
    height:100%;
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    z-index: 11;
    .content{
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
          display: none;
      }
      .inner-pos{
        padding:0 20rem/$num 135rem/$num;
      }
      .select-item{
        border-bottom: 1px solid #eee;
        padding:15rem/$num 10rem/$num;
        &:last-child{
          border:none;
        }
        .slide-item{
          padding:0 16rem/$num;
          .slide-item-top{
            padding:0 14rem/$num;
          }
        }
        .select-name{
          padding:15rem/$num 0;
          font-size: 14rem/$num;
          color: #333;
          text-align: center;
        }
        .slide{
          position: relative;
          width:100%;
          height:2rem/$num;
          background:#eee;
          &:before,&:after{
            position: absolute;
            left:0;
            top:-7rem/$num;
            content:'';
            display: inline-block;
            width:14rem/$num;
            height:14rem/$num;
            background:#fff;
            margin-left:-14rem/$num;
            border-radius: 100%;
            border: 1px solid #B9A468;
            z-index: 2;
            box-sizing: border-box;
            -webkit-box-sizing:border-box;
          }
          &:after{
            left:100%;
            margin-left:0;
          }
        }
        .slide-text{
          padding:10rem/$num 0 15rem/$num;
          font-size: 12rem/$num;
          color: #999;
        }
        .select-list{
          ul{
            display: box;
            display: -webkit-box;
            display: flex;
            display: -webkit-flex;
            flex-wrap:wrap;
            -webkit-flex-wrap:wrap;
            justify-content: space-between;
            -webkit-justify-content:space-between;
            li{
              height:26rem/$num;
              line-height: 26rem/$num;
              padding:0 30rem/$num;
              margin-bottom: 15rem/$num;
              background: #FFFFFF;
              border:1px solid #DCDCDC;
              border-radius: 4rem/$num;
              font-size: 14rem/$num;
              color: #333;
              box-sizing: border-box;
              -webkit-box-sizing:border-box;
            }
            .active{
              background:#333;
              color: #DDCFA4;
              border: 1px solid #333;
            }
          }
        }
      }
    }
  }
  .top{
    top:85rem/$num;
  }
</style>
