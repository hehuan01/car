<template>
  <div class="common-list">
    <div class="content">
      <router-link :to="{name:'',params:{}}">
        <div class="sub-list">
          <div class="grap-text" v-for="(item,index) in subPostList.postImgList" :key="index">
            <img :src="item.imgUrl"/>
          </div>
        </div>
        <p>{{subPostList.carProductName}} {{subPostList.title}}</p>
      </router-link>
      <div class="userinfo">
        <div class="head">
          <i><img :src="subPostList.profileImgUlr" /></i>
          <span class="username">{{subPostList.userName}}</span>
        </div>
        <div class="like" @click="raisePost(subPostList.id)">
          <i class="default-icon"></i>
          <span class="number">{{subPostList.pointCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $common from '../../assets/js/common'
  export default {
    props:['subPostList'],
    methods:{
      raisePost(postid){
        this.$httpService.raisePost(
          {
            "appId":$common.appId,
          	"source":$common.source,
          	"version":$common.version,
          	"postId":postid
          },(res)=>{
            if(res.result == 0){
              this.subPostList.pointCount = data.content.raiseCount
            }
          }
        )
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .common-list{
    .content{
      padding-bottom: 25rem/$num;
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
