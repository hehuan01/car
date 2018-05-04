<template>
  <div class="address">
    <div class="address-bg sub-content">
      <div class="address-inner">
        <div class="address-item">
          <p class="title">收货人:</p>
          <p class="content">
            <input type="text" name="realName" class="realName" placeholder="请填写您的真实姓名" v-model="realname" />
          </p>
        </div>
        <div class="address-item">
          <p class="title">联系方式:</p>
          <p class="content">
            <input type="tel" name="telphone" class="telphone" placeholder="请填写您的11位手机号码" maxlength="11" v-model="mobile" />
          </p>
        </div>
        <div class="address-item">
          <p class="title">详细地址:</p>
          <p class="content">
            <input type="text" name="address" class="address" placeholder="请填写详细楼栋门牌号码" v-model="address" />
          </p>
        </div>
      </div>
    </div>
    <btn :text="text"></btn>
  </div>
</template>

<script>
  import btn from "../common/btn";
  export default {
    data() {
      return {
        text:'保存'
      }
    },
    components: {
      btn
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .address{
    .address-bg{
      background:#fff;
    }
    .address-inner{
      padding-left: 20rem/$num;
      .address-item{
        border-bottom: 1px solid #eee;
        padding-right:20rem/$num;
        .title{
          padding-top:25rem/$num;
          font-size: 12rem/$num;
          color: #B9A468;
        }
        .content{
          position:relative;
          padding:20rem/$num 0 10rem/$num;
          .upload{
            opacity: 0;
            width:100%;
            height:56rem/$num;
            position: absolute;
            left:0;
            top:17rem/$num;
          }
          img{
            margin-top:-3rem/$num;
            padding:0 0 7rem/$num;
            width:56rem/$num;
            height:56rem/$num;
            vertical-align: top;
          }
          input{
            width:100%;
            font-size: 14rem/$num;
          }
        }
      }
    }
  }
</style>
