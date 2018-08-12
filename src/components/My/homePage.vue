<template>
  <div>
    <div class="sub-content">
      <my-info :personalInfo="personalInfo" @payAttentionToUser="payAttentionToUser"></my-info>
      <div class="publish-content" v-for="(item,index) in postList" :key="index">
        <p class="date">{{item.postTime}}</p>
        <list :subPostList="subPostList"></list>
      </div>
    </div>
    <btn v-if="personalInfo.isMe" :btn="btn" @btnClick="btnClick"></btn>
  </div>
</template>

<script>
  import myInfo from "../common/my-info"
  import list from "../common/list"
  import btn from "../common/btn"
  export default {
    data() {
      return {
        btn:{
          text:'发布动态',
          disabled:false
        },
        postList:'',
        personalInfo:''
      }
    },
    created() {
      this.postList()
      this.personalInfo()
    },
    methods:{
      postList() { //获取用户帖子列表
        this.$httpService.postList(
          {
            "appId":this.$common.appId,
          	"source":this.$common.source,
          	"version":this.$common.version,
          	"followUserName":"大脸猫",
          	"pageIndex":1,
          	"pageSize":10
          },(res)=>{
            if(res.result == 0){
              this.postList = res.content.postList
            }
          }
        )
      },
      personalInfo() {//个人中心
        this.$httpService.personalInfo(
          {
            "appId":this.$common.appId,
          	"source":this.$common.source,
          	"version":this.$common.version,
          	"followUserName":"用户名",
          },(res)=>{
            if(res.result == 0){
              this.personalInfo = res.content
              // this.userName = res.content.userName
            }
          }
        )
      },
      btnClick() {  //发布动态按钮
        this.$router.push({path:'/subPage/publish'})
      },
      payAttentionToUser() {  //关注他人
        this.$httpService.payAttentionToUser(
          {
            "appId":this.$common.appId,
          	"source":this.$common.source,
          	"version":this.$common.version,
          	"payToUserName":this.personalInfo.userName,
          },(res)=>{
            if(res.result == 0){
              this.personalInfo.IsPayPoint = true
            }
          }
        )
      }
    },
    components:{
      myInfo,
      list,
      btn
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .publish-content{
    margin-top:10rem/$num;
    background:#fff;
    padding-left: 20rem/$num;
    .date{
      padding:25rem/$num 0;
      font-size: 20rem/$num;
      color: #333;
    }
  }
</style>
