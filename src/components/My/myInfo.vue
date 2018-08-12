<template>
  <div class="my-info">
    <div class="my-info-bg sub-content">
      <div class="my-info-inner">
        <div class="my-info-item">
          <p class="title">修改头像</p>
          <p class="content">
            <input type="file" class="upload" name="img" accept="image/*" @change="uploadHeadImg"/>
            <img :src="headImg" />
          </p>
        </div>
        <div class="my-info-item">
          <p class="title">修改昵称</p>
          <p class="content">
            <input type="text" name="nickName" class="nickName" placeholder="您还未添加昵称" v-model="nickName" />
          </p>
        </div>
        <div class="my-info-item">
          <p class="title">修改个人描述</p>
          <p class="content">
            <input type="text" name="personDesc" class="personDesc" placeholder="您还未添加个人描述" v-model="personDesc" />
          </p>
        </div>
      </div>
    </div>
    <btn :btn="btn" @btnClick="btnClick"></btn>
  </div>
</template>

<script>
  import btn from "../common/btn";
  import $common from "../../assets/js/common"
  export default {
    data() {
      return {
        btn:{
          text:'保存',
          disabled:true
        },
        headImg:'',
        nickName:'',
        personDesc:''
      }
    },
    created() {
    },
    methods:{
      uploadHeadImg(e){
        let file = e.target.files;
        var self = this;
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function(e){
          self.headImg = e.target.result;
        }
      },
      btnClick(){
        this.$httpService.editPersonInfo(
          {
            "appId":$common.appId,
          	"source":$common.source,
          	"version":$common.version,
          	"profileImgUrl":this.headImg,
          	"nickName":this.nickName,
          	"profileDescription":this.personDesc
          },(res)=>{
            if(res.result == 0){
              this.$router.push({path:'/homePage/my'})
            }
          }
        )
      }
    },
    watch:{
      headImg(){
        if(!this.headImg){
          this.btn.disabled = true;
        }
        if(this.headImg && this.nickName && this.personDesc){
          this.btn.disabled = false;
        }
      },
      nickName(){
        if(!this.nickName){
          this.btn.disabled = true;
        }
        if(this.headImg && this.nickName && this.personDesc){
          this.btn.disabled = false;
        }
      },
      personDesc(){
        if(!this.personDesc){
          this.btn.disabled = true;
        }
        if(this.headImg && this.nickName && this.personDesc){
          this.btn.disabled = false;
        }
      }
    },
    components: {
      btn
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-info{
    .my-info-bg{
      background:#fff;
    }
    .my-info-inner{
      padding-left: 20rem/$num;
      .my-info-item{
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
