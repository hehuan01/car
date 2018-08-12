<template>
  <div class="publish">
    <div class="publish-content sub-content">
      <div class="publish-top">
        <div class="publish-item">
          <input type="text" placeholder="添加标题" v-model="title" name="title"/>
        </div>
        <div class="publish-item">
          <textarea placeholder="说说你的心得吧～" v-model="tip" cols="10" />
        </div>
        <div class="publish-item">
          <span class="upload uploaded" v-if="images.length > 0" v-for="(item,index) in images" :key="index">
            <img :src="item"/>
            <input type="file"/>
          </span>
          <span class="upload">
            <img src="" style="opacity:0"/>
            <input type="file" name="uploadImg" accept="image/*" @change="uploadImg"/>
          </span>
        </div>
      </div>
      <div class="publish-center"></div>
      <div class="publish-other">
        <router-link to="/subPage/publicSelect" class="publish-item ubox">
          <p class="branch">添加车辆品牌</p>
          <p class="rgt-arrow"></p>
        </router-link>
      </div>
    </div>
    <btn :btn="btn" @btnClick="btnClick"></btn>
  </div>
</template>

<script>
import btn from "../common/btn"
export default {
  data() {
    return {
      btn:{
        text:'发布',
        disabled:true
      },
      images:[],
      title:'',
      tip:''
    }
  },
  created(){
    this.init();
  },
  watch:{
    title(){
      if(!this.title){
        this.btn.disabled = true;
        return;
      }
      if(this.title && this.tip){
        this.btn.disabled = false;
      }
    },
    tip(){
      if(!this.tip){
        this.btn.disabled = true;
        return;
      }
      if(this.title && this.tip){
        this.btn.disabled = false;
      }
    }
  },
  methods:{
    init(){
      //获取上传图片
      this.images = JSON.parse(sessionStorage.getItem('image'))
      sessionStorage.removeItem('image')
      this.images = []
    },
    btnClick(text){
      // if(text == '发布'){
        this.$httpService.publishPost(
          {
            "appId":this.$common.appId,
            "source":this.$common.source,
            "version":this.$common.version,
            "productId":1,
            "title":this.title,
            "content":this.tip,
            "imgCount":this.images.length
          },(res)=>{
            if(res.result == 0){
              this.uplodFile(res.content.sign)
            }
          }
        )
      // }
    },
    uplodFile(id){
      this.$httpService.uplodFile(
        {
          "appId":this.$common.appId,
          "source":this.$common.source,
          "version":this.$common.version,
          "id":id,
          "imgType":2,
          "orderId":1
        },(res)=>{
          if(res.result == 0){
            this.$router.push({path:'/homePage/home'})
          }
        }
      )
    },
    uploadImg(e){
      let file = e.target.files;
      var self = this;
      var reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function(e){
        self.images.push(e.target.result)
        console.log(self.images)
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
  .publish{
    .publish-content{
      background: #fff;
      .publish-item{
        border-bottom: 1px solid #eee;
        padding:20rem/$num 0;
        box-sizing: border-box;
        -webkit-box-sizing:border-box;
      }
      .publish-top{
        padding:0 20rem/$num;
        background: #fff;
        .publish-item{
          &:last-child{
            border: none;
          }
        }
        input,textarea{
          border:none;
          outline: none;
          padding: 0;
          font-size: 14rem/$num;
          width:100%;
          line-height: 14rem/$num;
          resize: none;
        }
        textarea{
          height: 72rem/$num;
        }
        .upload{
          position: relative;
          display: inline-block;
          margin-right: 10rem/$num;
          width:80rem/$num;
          height: 80rem/$num;
          border: 1px dashed #DCDCDC;
          border-radius: 6rem/$num;
          box-sizing:border-box;
          -webkit-box-sizing:border-box;
          &:before,&:after{
            content: '';
            position: absolute;
            left:50%;
            top:50%;
            width:2rem/$num;
            height: 36rem/$num;
            background: #eee;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            z-index: 1;
          }
          &:after{
            width:36rem/$num;
            height: 2rem/$num;
          }
          input{
            position: absolute;
            width:100%;
            height:100%;
            left: 0;
            top:0;
            opacity: 0;
            z-index: 4;
          }
          img{
            width:100%;
            height: 100%;
            position: absolute;
            left:0;
            top:0;
            z-index: 3;
            border-radius: 6rem/$num;
          }
        }
        .uploaded{
          border: none;
        }
      }
      .publish-other{
        padding:0 20rem/$num;
        background:#fff;
        // margin-top: 10rem/$num;
        .branch{
          &:before{
            content: '';
            display: inline-block;
          }
          font-size: 14rem/$num;
          color: #999;
          line-height: 19rem/$num;
        }
        .rgt-arrow{
          width: 6rem/$num;
          height: 6rem/$num;
          border-top: 1px solid #eee;
          border-right: 1px solid #eee;
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
        }
      }
      .publish-center{
        background: #fafafa;
        height: 10rem/$num;
      }
    }
  }
</style>
