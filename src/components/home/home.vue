<template>
  <div class="home">
    <div class="sub-content">
      <div class="wrap">
        <!-- 今日推荐 -->
        <div class="banner">
          <div class="title">今日推荐</div>
          <div class="showIndicators">{{curIndex}}<span>/6</span></div>
          <div class="swiper">
            <mt-swipe :auto="4000" :show-indicators="false" @change="handleChange">
              <mt-swipe-item>
                <router-link :to="{ name: '', params: {} }" class="bannner-link">
                  <img src="../../assets/images/home/banner1.png" />
                  <p class="tit">艳福之旅 公路试驾保时捷711 </p>
                  <p class="sub-tit">在经历国产加长之后，XFL还是那个运动天赋满满的捷豹吗</p>
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link :to="{ name: '', params: {} }" class="bannner-link">
                  <img src="../../assets/images/home/banner2.png" />
                  <p class="tit">艳福之旅 公路试驾保时捷711 </p>
                  <p class="sub-tit">在经历国产加长之后，XFL还是那个运动天赋满满的捷豹吗</p>
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <!-- 车库头条 -->
        <div class="notice">
          <div class="noticePos">
            <div class="lft-icon"><img src="../../assets/images/home/headline.png"></div>
            <div class="rgt-content">
              <swiper height="17px" auto direction="vertical" :show-dots="false">
                <swiper-item>
                  全新BMW 5系瞩目上市 前瞻智能科技, 11111运动豪华商务运动豪华商务1111…
                </swiper-item>
                <swiper-item>
                  全新BMW 5系瞩目上市 前瞻智能科技, 2222运动豪华商务运动豪华商务1111…
                </swiper-item>
              </swiper>
            </div>
          </div>
        </div>
        <!-- 优选体验 -->
        <div class="list">
          <div class="title">优选体验</div>
          <div class="content">
            <div class="sub-list">
              <router-link :to="{ path: '/subPage/contentDetail', params: {} }">
                <div class="grap-text">
                  <img src="../../assets/images/home/list1.png"/>
                  <p>试驾斯柯达柯珞克1.4T</p>
                </div>
              </router-link>
              <router-link :to="{ name: '', params: {} }">
                <div class="grap-text">
                  <img src="../../assets/images/home/list2.png"/>
                  <p>艳福之旅 公路试驾法拉利</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 车友圈儿 -->
        <div class="list">
          <div class="title">车友圈儿</div>
          <div class="content">
            <router-link :to="{name:'',params:{}}">
              <div class="sub-list">
                <div class="grap-text">
                  <img src="../../assets/images/home/share1.png"/>
                </div>
                <div class="grap-text">
                  <img src="../../assets/images/home/share2.png"/>
                </div>
              </div>
              <p>黄色魅影 PCauto试驾法拉利California</p>
            </router-link>
            <div class="userinfo">
              <div class="head">
                <i><img src="../../assets/images/home/head1.png" /></i>
                <span class="username">大脸猫</span>
              </div>
              <div class="like">
                <i class="default-icon"></i>
                <span class="number">678</span>
              </div>
            </div>
          </div>

          <div class="content content2">
            <router-link :to="{name:'',params:{}}">
              <div class="sub-list">
                <div class="grap-text">
                  <img src="../../assets/images/home/share3.png"/>
                </div>
                <div class="grap-text">
                  <img src="../../assets/images/home/share4.png"/>
                </div>
              </div>
              <p>黄色魅影 PCauto试驾法拉利California</p>
            </router-link>
            <div class="userinfo">
              <div class="head">
                <i><img src="../../assets/images/home/head2.png" /></i>
                <span class="username">大脸猫</span>
              </div>
              <div class="like">
                <i class="default-icon love-icon"></i>
                <span class="number">678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        curIndex:1
      }
    },
    methods:{
      handleChange(index) {
        this.curIndex = index+1;
      }
    }

  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc.scss";
  .home{
    background:#FBFBFB;
    .wrap{
      .banner{
        position: relative;
        background:#fff;
        padding:0 20rem/$num;
        .showIndicators{
          position: absolute;
          top:25rem/$num;
          right:20rem/$num;
          font-size:20rem/$num;
          color: #333;
          span{
            font-size:12rem/$num;
            color: #999;
          }
        }
      }
      .swiper{
        height:255rem/$num;
      }
      .title{
        padding:25rem/$num 0 20rem/$num;
        font-size:20rem/$num;
        font-weight: 700;
      }
      .bannner-link{
        img{
          width:100%;
          height:180rem/$num;
          border-radius: 6rem/$num;
          vertical-align: top;
        }
        .tit{
          font-size:14rem/$num;
          color: #333;
          padding-top:15rem/$num;
        }
        .sub-tit{
          font-size:11rem/$num;
          color: #999;
          padding-top:10rem/$num;
        }
      }
      .notice{
        background:#fff;
        padding:0 20rem/$num;
        .noticePos{
          display: box;
          display: -webkit-box;
          display: flex;
          display: -webkit-flex;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          align-items: center;
          border-top:.5px solid #eee;
          padding:11rem/$num 0;
          .lft-icon{
            width:32rem/$num;
            height:32rem/$num;
            flex-shrink:0;
            img{
              width:32rem/$num;
              height:32rem/$num;
            }
          }
          .rgt-content{
            font-size:12rem/$num;
            color: #333;
            width:100%;
            height:17px;
            line-height: 17px;
            margin-left:12rem/$num;
            .vux-swiper-item{
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
      .list{
        margin-top:10rem/$num;
        background:#fff;
        padding:5rem/$num 0 15rem/$num 20rem/$num;
        .content{
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
        .content2{
          padding-top: 40rem/$num;
        }
      }
    }
  }
</style>
