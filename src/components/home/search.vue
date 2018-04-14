<template>
  <div class="search">
    <div class="s-bar">
      <div class="s-header">
        <div class="content">
          <div class="s-input">
            <span class="icon-search"></span>
            <input type="search" v-model="searchText" v-focus placeholder="请输入您想要搜索的内容">
          </div>
        </div>
        <div class="btn">取消</div>
      </div>
    </div>
    <div class="search-wrap">
      <div class="s-hot">
        <p class="title">热门搜索</p>
        <ul>
          <li>保时捷</li>
          <li>宝马X5</li>
          <li>玛莎拉蒂</li>
        </ul>
      </div>
      <div class="s-recommend">
        <ul>
          <li>
            <p>历史搜索</p><p class="clear-all">清除全部</p>
          </li>
          <li>
            <p>玛萨拉蒂</p>
            <p class="delete">
              <img src="../../assets/images/home/delete.png">
            </p>
          </li>
          <li>保时捷711</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc.scss";
  .search{
    .s-bar{
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:44rem/$num;
      .s-header{
        display: flex;
        background: #FBFBFB;
        height: 44rem/$num;
        width: 100%;
      }
      .content{
        flex:1;
        align-self:center;
        margin-left: 20rem/$num;
        .s-input{
          display: flex;
          height: 30rem/$num;
          background:#fff;
          border-radius: 100rem/$num;
          box-sizing: border-box;
        }
        .icon-search{
          align-self: center;
          display: block;
          margin-left: 12rem/$num;
          width:16rem/$num;
          height:16rem/$num;
          background-image: url(../../assets/images/home/search.png);
          background-repeat: no-repeat;
          background-size: cover;
        }
        input{
          flex:1;
          padding-right: 10rem/$num;
          border-radius: 100rem/$num;
          margin-left: 10rem/$num;
          font-size: 14rem/$num;
        }
      }
      .btn{
        align-self: center;
        font-size: 14rem/$num;
        color: #333;
        padding:0 20rem/$num 0 17rem/$num;
      }
    }
    .search-wrap{
      position: absolute;
      top:44rem/$num;
      left:0;
      width:100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      .s-hot{
        background:#fff;
        padding:0 20rem/$num 35rem/$num;
        .title{
          padding:25rem/$num 0 20rem/$num;
          font-size: 16rem/$num;
          color: #333;
        }
        ul{
          display: box;
          display: -webkit-box;
          display: flex;
          display: -webkit-flex;
          flex-wrap:wrap;
          -webkit-flex-wrap:wrap;
          li{
            height:26rem/$num;
            line-height: 26rem/$num;
            padding:0 19rem/$num;
            margin:0 15rem/$num 15rem/$num 0;
            border: 1px solid #DCDCDC;
            border-radius: 100rem/$num;
            font-size: 14rem/$num;
            color: #333;
            box-sizing: border-box;
            -webkit-box-sizing:border-box;
          }
        }
      }
      .s-recommend{
        margin-top: 10rem/$num;
        padding-left:20rem/$num;
        background:#fff;
        ul{
          li{
            padding:23rem/$num 20rem/$num 23rem/$num 0;
            font-size: 14rem/$num;
            color:#333;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            -webkit-box-sizing:border-box;
            display: box;
            display: -webkit-box;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content:space-between;
            &:first-child{
              padding:25rem/$num 20rem/$num 25rem/$num 0;
              font-size: 16rem/$num;
              line-height: 22rem/$num;
            }
            .clear-all{
              font-size: 12rem/$num;
              color: #B9A468;
            }
            .delete{
              img{
                width:14rem/$num;
                height:14rem/$num;
              }
            }
          }
        }
      }
    }
  }
</style>
