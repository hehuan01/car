<template>
  <div class="login sub-content">
    <div class="logo-close ubox">
      <p class="logo"><img src="../../assets/images/my/head.png"/></p>
      <p class="close"></p>
    </div>
    <div class="phoneSection" v-if="isShow">
      <p class="title">欢迎登录</p>
      <div class="input-outer ubox" :class="{'has-value':hasValue}">
        <div class="input-inner">
          <input type="tel" class="mobile" name="mobile" placeholder="请填写手机号" maxlength="13" v-model="phoneValue"/>
        </div>
        <div :class="{'delete':deleteIcon}" @click="deleteValue"></div>
      </div>
      <div class="sbtn">
        <button class="btn" :disabled="isDisabled" @click="nextStep">下一步</button>
      </div>
    </div>
    <div class="smsValidateSection" v-else>
      <p class="title">验证码已发送至</p>
      <div class="ubox smsCountDown">
        <p class="phone">{{phoneValue}}</p>
        <p v-show="showGetSmsCodeBtn" class="countDown" @click="getSmsCode">重新获取验证码</p>
        <p v-show="!showGetSmsCodeBtn" class="countDown">({{count}}秒)</p>
      </div>
      <div class="ubox smsInput">
        <p class="smsInputOuter">
          <input type="tel" maxlength="1" class="input1" v-model="input1" v-focus="focusIndex" :disabled="input1Isdisabled"/>
        </p>
        <p class="smsInputOuter">
          <input type="tel" maxlength="1" class="input2" v-model="input2" v-focus="focusIndex" :disabled="input2Isdisabled"/>
        </p>
        <p class="smsInputOuter">
          <input type="tel" maxlength="1" class="input3" v-model="input3" v-focus="focusIndex" :disabled="input3Isdisabled"/>
        </p>
        <p class="smsInputOuter">
          <input type="tel" maxlength="1" class="input4" v-model="input4" v-focus="focusIndex" :disabled="input4Isdisabled"/>
        </p>
      </div>
      <div class="sbtn">
        <button class="btn" :disabled="isDisabled2" @click="registerOrlogin">注册／登录</button>
        <p class="protocol">注册表示你已阅读，并同意<a class="link">《用户注册协议》</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phoneValue:'',
      deleteIcon:false,
      hasValue:false,
      isDisabled:true,
      isShow:true,
      isDisabled2:true,
      showGetSmsCodeBtn:false,
      count:0,
      timer:null,
      focusIndex:1,
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input1Isdisabled:false,
      input2Isdisabled:true,
      input3Isdisabled:true,
      input4Isdisabled:true,
      source:'h5'
    }
  },
  created(){
    this.source = this.$common.getQueryString('source')?this.$common.getQueryString('source'):'h5';
  },
  watch:{
    phoneValue(newValue, oldValue){
      let regPhone = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/,
          phoneValue2 = this.phoneValue.replace(/\s+/g,"");
      if(newValue.length > oldValue.length){
        this.deleteIcon = true;
        if(newValue.length === 3 || newValue.length === 8){
          this.phoneValue += ' '
        }else if(newValue.length === 13){
          if(!regPhone.test(phoneValue2)){
            this.$vux.toast.text('手机号码格式不正确');
          }else{
            this.hasValue = true;
            this.isDisabled = false;
            this.$emit('buttonClick',phoneValue2);
          }
        }
      }else{
        if(newValue.length === 9 || newValue.length === 4){
          // this.phoneValue = this.phoneValue.trim();
        }else if(newValue.length < 13){
          this.hasValue = false;
          this.isDisabled = true;
          this.$emit('buttonClick',phoneValue2);
          if(newValue.length < 1){
            this.deleteIcon = false;
          }
        }
      }
    },
    input1(newInput1){
      if(!this.input1){
        return;
      }
      if(isNaN(newInput1)){
        this.input1 = '';
      }else{
        this.input1 = newInput1;
        this.input2Isdisabled = false;
        this.focusIndex = 2;
      }
    },
    input2(newInput2){
      if(!this.input2){
        return;
      }
      if(isNaN(newInput2)){
        this.input2 = '';
      }else{
        this.input2 = newInput2;
        this.input3Isdisabled = false;
        this.focusIndex = 3;
      }
    },
    input3(newInput3){
      if(!this.input3){
        return;
      }
      if(isNaN(newInput3)){
        this.input3 = '';
      }else{
        this.input3 = newInput3;
        this.input4Isdisabled = false;
        this.focusIndex = 4;
      }
    },
    input4(newInput4){
      if(!this.input4){
        return;
      }
      if(isNaN(newInput4)){
        this.input4 = '';
      }else{
        this.input4 = newInput4;
        this.isDisabled2 = false;
      }
    },
  },
  methods:{
    deleteValue(){
      this.phoneValue = '';
    },
    nextStep(){
      this.getSmsCode();
    },
    getCountDown(){
     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.showGetSmsCodeBtn = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.showGetSmsCodeBtn = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
    },
    getSmsCode(){
      this.$httpService.userGetMobileAuthCode(
        {
        	"appId": this.$common.appId,
        	"source": this.$common.source,
        	"version": this.$common.version,
        	"mobile": this.phoneValue2
        },(res)=>{
          if(res.result == 0){
            this.$vux.toast.text('短信验证码已发送～');
            this.isShow = false;
            this.getCountDown();
          }else{
            this.$vux.toast.text('短信发送失败，请稍后重试～');
          }
        }
      )
    },
    registerOrlogin(){
      this.$httpService.userLogin(
        {
          "appId": this.$common.appId,
        	"source": this.$common.source,
        	"version": this.$common.version,
        	"mobile": this.phoneValue2,
        	"authCode": this.input1+this.input2+this.input3+this.input4
        },(res)=>{
          if(res.result == 0){
            this.$router.push({path:'/homePage/home'});
          }else{
            this.$vux.toast.text(res.resultMessage);
          }
        }
      )
    }
  },
  directives:{
    focus:{
      inserted(el, {value}){
        var a = el.className.substring(el.className.length-1);
        if(a == 1){
          el.focus();
        }
      },
      update(el,{value}){
        var a = el.className.substring(el.className.length-1);
        console.log(value)
        if(a == value){
          el.focus();
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .login{
    background: #fff;
    padding-left: 20rem/$num;
    padding-right: 20rem/$num;
    // padding:0 20rem/$num !important;
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
    .sbtn{
      padding:40rem/$num 25rem/$num;
      .btn{
        border: none;
        outline: none;
        padding:0;
        width:100%;
        height: 50rem/$num;
        line-height: 50rem/$num;
        background: #000;
        border-radius: 6rem/$num;
        font-size: 18rem/$num;
        color: #DDCFA4;
        letter-spacing: .12px;
        &:disabled{
          background: #eee;
          color: #fff;
        }
      }
      .protocol{
        text-align: center;
        padding-top: 20rem/$num;
        font-size: 11rem/$num;
        color: #999;
        .link{
          color: #B9A468;
        }
      }
    }
    .smsValidateSection{
      .smsCountDown{
        clear: both;
        padding:20rem/$num 0;
        .phone{
          font-size: 16rem/$num;
          color: #333;
        }
        .countDown{
          font-size: 14rem/$num;
          color: #B9A468;
        }
      }
      .smsInput{
        padding-top:10rem/$num;
        .smsInputOuter{
          width:60rem/$num;
          padding:10rem/$num 0;
          border-bottom: 1px solid #dcdcdc;
          // margin-right: 32rem/$num;
        }
        input{
          width: 100%;
          font-size: 16rem/$num;
          text-align: center;
        }
      }
    }
  }
</style>
