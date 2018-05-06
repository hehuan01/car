<template>
  <div class="login sub-content">
    <div class="logo-close ubox">
      <p class="logo"><img src="../../assets/images/my/head.png"/></p>
      <p class="close"></p>
    </div>
    <p class="title">欢迎登录</p>
    <div class="input-outer has-value ubox">
      <div class="input-inner">
        <input type="tel" class="mobile" name="mobile" placeholder="请填写手机号" maxlength="11" />
      </div>
      <div class="delete"></div>

    </div>
    <div class="sbtn">
      <button class="btn">下一步</button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .login{
    background: #fff;
    padding:0 20rem/$num !important;
    .logo-close{
      padding:25rem/$num 0;
      .close{
        position: relative;
        width:18rem/$num;
        height: 18rem/$num;
        &:before,&:after{
          content:'';
          position: absolute;
          left:10rem/$num;
          top:0;
          width:1px;
          height: 18rem/$num;
          background: #dcdcdc;
        }
        &:before{
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
        }
        &:after{
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
    .title{
      font-size: 24rem/$num;
      color: #333;
    }
    .input-outer{
      padding:80rem/$num 0 12rem/$num;
      border-bottom: 1px solid #d8d8d8;
      input{
        width: 100%;
        font-size: 16rem/$num;
      }
    }
    .has-value{
      border-color: #CDBC8A;
      .input-inner{
        flex: 1;
      }
      .delete{
        position: relative;
        width: 12rem/$num;
        height: 12rem/$num;
        border: 1px solid #DCDCDC;
        border-radius: 100%;
        &:after,&:before{
          content: '';
          position: absolute;
          left:6rem/$num;
          top:4rem/$num;
          width:1px;
          height: 5rem/$num;
          background: #dcdcdc;
          transform: rotate(45deg);
          -webkit-transform:rotate(45deg);
        }
        &:after{
          transform: rotate(-45deg);
          -webkit-transform:rotate(-45deg);
        }
      }
    }
    .sbtn{
      padding:40rem/$num 25rem/$num;
      .btn{
        border: none;
        outline: none;
        padding:0;
        width:100%;
        height: 50rem/$num;
        line-height: 50rem/$num;
        background: #eee;
        border-radius: 6rem/$num;
        font-size: 18rem/$num;
        color: #fff;
      }
      .active{
        background: #000;
        color: #DDCFA4;
      }
    }
  }
</style>
