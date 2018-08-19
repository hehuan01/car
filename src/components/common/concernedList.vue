//关注列表 用户、品牌
<template>
  <div class="concernedList">
    <ul>
      <li class="ubox" v-for="(item,index) in list" :key="index">
        <div class="lft">
          <p><img :src="item.profileImgUrl"/></p>
          <p><span class="user-name">{{item.userName}}</span><br/><span class="user-number">{{item.followerCount}}个粉丝</span></p>
        </div>
        <div class="interest-btn-status" :class="{'interest-btn-active':!item.isMeConcerned}">{{item.isMeConcerned?'已关注':'关注'}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["list"]
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .concernedList{
    ul{
      padding-left:20rem/$num;
      li{
        height:80rem/$num;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        -webkit-box-sizing:border-box;
        .lft{
          display: box;
          display: -webkit-box;
          display: flex;
          display: -webkit-flex;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          align-items: center;
          img{
            margin-right: 18rem/$num;
            width:40rem/$num;
            height:40rem/$num;
            border-radius: 100rem/$num;
          }
          .user-name{
            font-size: 14rem/$num;
            color: #333;
          }
          .user-number{
            font-size: 11rem/$num;
            color: #999;
          }
        }
        .interest-btn-status{
          margin-right: 20rem/$num;
          width:60rem/$num;
          height:26rem/$num;
          line-height: 26rem/$num;
          border: 1px solid #DCDCDC;
          border-radius: 3rem/$num;
          font-size: 12rem/$num;
          color: #999;
          text-align: center;
          box-sizing: border-box;
          -webkit-box-sizing:border-box;
        }
        .interest-btn-active{
          background: #FE1F49;
          border: none;
          color: #fff;
        }
      }
    }
  }
</style>
