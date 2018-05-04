<template>
  <div class="my-order">
    <div class="sub-content">
      <div class="content">
        <div class="top">
          <div class="item ubox">
            <p class="date">2018－02－24</p>
            <p class="status">交易中</p>
          </div>
          <div class="item2">
            <img src="../../assets/images/order/product.png"/>
          </div>
        </div>
        <div class="other">
          <div class="item ubox">
            <p class="label">品名</p>
            <p class="rgt-cont">保时捷711</p>
          </div>
          <div class="item ubox">
            <p class="label">价格</p>
            <p class="rgt-cont">¥1,230,000</p>
          </div>
          <div class="item ubox">
            <p class="label">配置</p>
            <p class="rgt-cont">查看配置清单<span class="arrow"></span></p>
          </div>
        </div>
        <div class="other">
          <div class="item ubox">
            <p class="label">
              定金
              <span>定金会在车款中扣除。支付后，恕不退还<br>查看<router-link to="">《定金协议》</router-link></span>
            </p>
            <p class="rgt-cont">¥30000</p>
          </div>
          <div class="item ubox">
            <p class="label">
              提车方式
              <span>自提地址：上海市浦东新区张东路123456号 大厦</span>
            </p>
            <p class="rgt-cont">配送</p>
          </div>
          <div class="item ubox">
            <p class="label">
              选择付款方式
              <span>车款在车辆验收后线下办理</span>
            </p>
            <p class="rgt-cont">贷款</p>
          </div>
        </div>
        <div class="other">
          <div class="item ubox">
            <p class="label">类型</p>
            <p class="rgt-cont">现车</p>
          </div>
          <div class="item ubox">
            <p class="label">交付时间</p>
            <p class="rgt-cont">三个月</p>
          </div>
        </div>
        <div class="express-detail">
          <div class="express-status ubox">
            <p class="label">物流状态</p>
            <p class="rgt-cont">订单进行中</p>
          </div>
          <div class="express">
            <div class="content">
              <div class="express-list current">
                <div class="line"></div>
                <div class="detail">
                  <div class="desc">
                    您的订单已签收完成，感谢使用！
                    <p>2016-10-31 00:24</p>
                  </div>
                </div>
              </div>
              <div class="express-list">
                <div class="line"></div>
                <div class="detail">
                  <div class="desc">
                    您的订单已出库
                    <p>2016-10-31 00:24</p>
                    <div class="sub-list">
                      <div class="grap-text">
                        <img src="../../assets/images/order/express-img.png"/>
                      </div>
                      <div class="grap-text">
                        <img src="../../assets/images/order/express-img.png"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="other">
          <div class="bottom">
            <p>订单编号：201706128908813034</p>
            <p>下单时间：2017.05.12 21:02:43</p>
          </div>
        </div>
      </div>
    </div>
    <btn :text="text"></btn>
  </div>
</template>

<script>
  import btn from "../common/btn"
  export default {
    data() {
      return {
        text:'联系客服'
      }
    },
    components:{
      btn
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .my-order{
    .content{
      .top{
        background: #fff;
        padding:0 20rem/$num;
        .item{
          padding:13.5rem/$num 0;
          border-bottom: 1px solid #eee;
          .date{
            font-size: 12rem/$num;
            color: #242A35;
          }
          .status{
            font-size: 12rem/$num;
            color: #FE1F49;
          }
        }
        .item2{
          margin:0 -20rem/$num;
          img{
            width:100%;
            vertical-align: top;
          }
        }
      }
      .other{
        background: #fff;
        margin-top: 10rem/$num;
        padding:0 20rem/$num;
        .item{
          padding:22.5rem/$num 0;
          border-bottom: 1px solid #eee;
          .label{
            font-size: 14rem/$num;
            color: #333;
            span{
              display: block;
              padding-top: 9rem/$num;
              font-size: 11rem/$num;
              color: #999;
              line-height: 15rem/$num;
              a{
                color: #00002C;
              }
            }
          }
          .rgt-cont{
            font-size: 14rem/$num;
            color: #242A35;
            .arrow{
              display: inline-block;
              width:6rem/$num;
              height: 6rem/$num;
              border-top: 1px solid #333;
              border-right: 1px solid #333;
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              vertical-align: middle;
            }
          }
          &:last-child{
            border: none;
          }
        }
        .logistics-info{
          padding: 15rem/$num 0;
          display: box;
          display: -webkit-box;
          display: flex;
          display: -webkit-flex;
          flex-direction:row-reverse;
          span{
            display: inline-block;
            margin-left: 10rem/$num;
            padding:0 13rem/$num;
            height: 24rem/$num;
            line-height: 24rem/$num;
            border: 1px solid #CDBC8A;
            border-radius: 3px;
            font-size: 12rem/$num;
            color: #B9A468;
            text-align: center;
            box-sizing:border-box;
            -webkit-box:border-box;
          }
        }
        .bottom{
          padding-top: 20rem/$num;
          p{
            font-size: 12rem/$num;
            color: #666;
            padding-bottom: 15rem/$num;
          }
        }
      }
      .express-detail{
        margin-top: 10rem/$num;
        background: #fff;
        .express-status{
          padding:20rem/$num;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          -webkit-box-sizing:border-box;
          .label{
            font-size: 14rem/$num;
            color: #222;
          }
          .rgt-cont{
            font-size: 12rem/$num;
            color: #FE1F49;
          }
        }
        .express{
          .content{
            padding-left: 23rem/$num;
            .express-list{
              position: relative;
              display: box;
              display: -webkit-box;
              display: flex;
              display: -webkit-flex;
              .line{
                position: absolute;
                top:20rem/$num;
                width:1px;
                height: 100%;
                background: #e4e4e4;
                &:after{
                  content: '';
                  position: absolute;
                  top:0;
                  left:-3.5rem/$num;
                  width:7rem/$num;
                  height:7rem/$num;
                  background: #E4E4E4;
                  border-radius: 100%;
                }
              }
              .detail{
                flex:1;
                padding-left:20rem/$num;
                padding-right: 20rem/$num;
                .desc{
                  padding:20rem/$num 0;
                  font-size: 14rem/$num;
                  color: #666;
                  border-bottom: 1px solid #eee;
                  box-sizing: border-box;
                  -webkit-box-sizing:border-box;
                  p{
                    padding-top: 12rem/$num;
                    font-size: 11rem/$num;
                    color: #999;
                  }
                  .sub-list{
                    padding-top: 10rem/$num;
                    white-space: nowrap;
                    overflow-y:hidden;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    .grap-text{
                      display: inline-block;
                      margin-right: 12rem/$num;
                      img{
                        width:180rem/$num;
                        height: 100rem/$num;
                        border-radius: 10rem/$num;
                        vertical-align: top;
                      }
                    }
                  }
                }
              }
              &:last-child{
                .line{
                  width:0;
                }
                .desc{
                  border: none;
                }
              }
            }
            .current{
              .line{
                &:after{
                  background: #333;
                }
              }
              .desc{
                color: #333;
              }
            }

          }
        }
      }
    }
  }
</style>
