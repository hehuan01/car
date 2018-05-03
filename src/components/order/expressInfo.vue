<template>
  <div class="express-info">
    <div class="sub-content">
      <div class="express-status ubox">
        <p class="label">物流状态</p>
        <p>订单进行中</p>
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
  .express-info{
    .express-status{
      background: #fff;
      padding:20rem/$num;
      .label{
        font-size: 14rem/$num;
        color: #222;
      }
      p{
        font-size: 12rem/$num;
        color: #FE1F49;
      }
    }
    .express{
      background: #fff;
      margin-top: 10rem/$num;
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
</style>
