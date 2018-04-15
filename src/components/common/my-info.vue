<template>
  <div class="my-info">
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
      <div class="follow">
        <span class="followed">关注</span>
      </div>
    </div>
    <div class="my-introduce">
      <div class="inner-pos">
        <input type="text" class="introduce" placeholder="添加个人描述，可以让大家更好的认识你。"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-info{
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
    .my-introduce{
      background: #fff;
      padding:0 20rem/$num;
      .inner-pos{
        border-top: 1px solid #eee;
        height:42rem/$num;
        line-height: 42rem/$num;
        input{
          width:100%;
          font-size: 12rem/$num;
        }
      }
    }
    .follow{
      padding-bottom: 23rem/$num;
      span{
        display: block;
        width:92rem/$num;
        height: 28rem/$num;
        line-height: 28rem/$num;
        background: #FE1F49;
        border-radius: 3rem/$num;
        font-size: 12rem/$num;
        color: #fff;
        text-align: center;
        margin:-5rem/$num auto 0;
        box-sizing: border-box;
        -webkit-box-sizing:border-box;
      }
      .followed{
        border:1px solid #FE1F49;
        background: none;
        color: #FE1F49;
      }
    }
  }
</style>
