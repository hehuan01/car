<template>
  <div class="common-list">
    <div class="content">
      <router-link :to="{name:'',params:{}}">
        <div class="sub-list">
          <div class="grap-text">
            <img src="../../assets/images/home/share1.png"/>
          </div>
          <div class="grap-text">
            <img src="../../assets/images/home/share2.png"/>
          </div>
        </div>
        <p>黄色魅影 PCauto试驾法拉利California</p>
      </router-link>
      <div class="userinfo">
        <div class="head">
          <i><img src="../../assets/images/home/head1.png" /></i>
          <span class="username">大脸猫</span>
        </div>
        <div class="like">
          <i class="default-icon"></i>
          <span class="number">678</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .common-list{
    .content{
      .sub-list{
        white-space: nowrap;
        overflow-y:hidden;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
            display: none;
        }
      }
      a{
        vertical-align: top;
        .grap-text{
          margin-right: 12rem/$num;
          display: inline-block;
          img{
            width:210rem/$num;
            height:130rem/$num;
            border-radius: 6rem/$num;
            vertical-align: top;
          }
        }
        p{
          font-size: 14rem/$num;
          color:#333;
          padding:15rem/$num 0;
        }
      }
      .userinfo{
        margin-right:20rem/$num;
        padding-bottom: 15rem/$num;
        border-bottom:1px solid #eee;
        display: box;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
        -webkit-justify-content:space-between;
        .head{
          i{
            display: inline-block;
            vertical-align: middle;
            margin-right:5rem/$num;
            img{
              width:28rem/$num;
              height:28rem/$num;
            }
          }
          .username{
            vertical-align: middle;
            font-size:14rem/$num;
            color: #333;
          }
        }
        .like{
          // padding:0 20rem/$num;
          .default-icon{
            display: inline-block;
            width:16rem/$num;
            height:16rem/$num;
            background-image: url(../../assets/images/home/love_no.png);
            background-repeat: no-repeat;
            background-size: cover;
          }
          .love-icon{
            background-image: url(../../assets/images/home/love.png);
          }
          .number{
            vertical-align: middle;
            font-size: 14rem/$num;
            color: #999;
          }
        }
      }
    }
  }
</style>
