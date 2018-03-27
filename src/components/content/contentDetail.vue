<template>
  <div class="content-detail">
    <div class="sub-content">
      <div class="top-banner">
        <swiper auto :show-dots="false" @on-index-change="onSwiperItemIndexChange">
          <swiper-item>
            <router-link :to="{path:'/', query:{}}">
              <img src="../../assets/images/home/banner1.png" />
            </router-link>
          </swiper-item>
          <swiper-item>
            <router-link :to="{path:'/', query:{}}">
              <img src="../../assets/images/home/banner1.png" />
            </router-link>
          </swiper-item>
        </swiper>
        <div class="show-dots">{{curIndex}}/9</div>
      </div>
      <div class="content-desc">
        <div class="userInfo ubox">
          <div class="head">
            <i><img src="../../assets/images/home/head1.png"/></i>
            <span class="userName">大脸猫</span>
          </div>
          <div class="attention">关注</div>
        </div>
        <div class="contents">
          <p class="title">定义双重性格 评测奇瑞捷豹XFL 25t</p>
          <p class="main-conts">
            捷豹是一个起源于赛车的品牌，它旗下几乎所有的车型都有着肉眼可见的运动天赋，就连车标都流露出层层杀机，而英伦绅士的优雅气质又根植于心。我们今天的主角却不只是个好动的家伙。<br>
            它有着标准中高级行政房车的尺寸，一大堆满足车内乘客各种需求的豪华配置，它就是XFL。在经历国产加长之后，XFL还是那个运动天赋满满的捷豹吗？换装了自家Ingenium系列发动机的25t车型能更进一步吗？下面的我们就一起来看看它有何独特之处吧。
          </p>
        </div>
      </div>
      <div class="comment">
        <div class="comment-title ubox">
          <h2><span></span>评论</h2>
          <p>共2750条评论</p>
        </div>
        <div class="comment-list">
          <ul>
            <li>
              <div class="comment-item">
                <div class="head"><img src="../../assets/images/home/head2.png"/></div>
                <div class="rgtInfo">
                  <p class="username">令狐冲</p>
                  <p class="comment-cont">哇欧巴好帅！自家Ingenium系列发动机的25t车型能更进一步吗？下面的我们就一起来看看它有何独特之处吧。</p>
                  <p class="date">今天12:24<span>回复</span></p>
                  <div class="reply">
                    <p class="replyerInfo"><span class="name">齐天大圣：</span><span class="reply-content">自家Ingenium系列发动机</span></p>
                    <p class="allReply">共12条回复>></p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="get-more">查看全部1110条评论>></div>
        </div>
      </div>
      <div class="comment">
        <div class="comment-title ubox">
          <h2><span></span>相关帖子</h2>
        </div>
        <div class="about">
          <list></list>
        </div>
      </div>
    </div>
    <div class="foot-menu">
      <div class="list-menu">
        <div class="menu-item"><i class="cont_detail_icon1 cont_detail_icon11"></i>收藏</div>
        <div class="line"></div>
        <div class="menu-item"><i class="cont_detail_icon2"></i>赞</div>
        <div class="line"></div>
        <div class="menu-item"><i class="cont_detail_icon3"></i>评论</div>
      </div>
    </div>
  </div>
</template>

<script>
  import list from '../common/list'
  export default {
    data() {
      return {
        curIndex:1,
      }
    },
    methods:{
      onSwiperItemIndexChange(index){
        this.curIndex = index+1;
      }
    },
    components:{
      list
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .content-detail{
    background:#FBFBFB;
    .top-banner{
      position: relative;
      img{
        width:100%;
      }
      .show-dots{
        position: absolute;
        right:20rem/$num;
        bottom: 20rem/$num;
        font-size:14rem/$num;
        color: #fff;
      }
    }
    .content-desc{
      background:#fff;
      padding:0 20rem/$num;
      .userInfo{
        padding:10rem/$num 0;
        border-bottom:1px solid #eee;
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
          .userName{
            font-size:16rem/$num;
            vertical-align: middle;
          }
        }
        .attention{
          width:56rem/$num;
          height:26rem/$num;
          line-height: 26rem/$num;
          border:1px solid #B9A468;
          border-radius:4rem/$num;
          font-size:14rem/$num;
          color:#B9A468;
          text-align: center;
          box-sizing:border-box;
          -webkit-box-sizing:border-box;
        }
      }
      .contents{
        padding:5.5rem/$num 0 27rem/$num;
        .title{
          padding:20rem/$num 0;
          font-size:16rem/$num;
          color:#333;
          line-height:16rem/$num;
        }
        .main-conts{
          text-align: justify;
          font-size:14rem/$num;
          color:#666;
          line-height:26rem/$num;
        }
      }
    }
    .comment{
      background:#fff;
      margin-top:10rem/$num;
      .comment-title{
        padding:20rem/$num;
        border-bottom: 1px solid #eee;
        h2{
          font-size: 16rem/$num;
          color: #242A35;
          span{
            width:2rem/$num;
            height:14rem/$num;
            background: #CDBC8A;
            display: inline-block;
            margin-right:8rem/$num;
          }
        }
        p{
          font-size:14rem/$num;
          color: #666;
          &:after{
            content:'';
            display: inline-block;
            width:7rem/$num;
            height:7rem/$num;
            border-top: 1px solid #dcdcdc;
            border-right:1px solid #dcdcdc;
            transform: rotate(45deg);
            -webkit-transform:rotate(45deg);
          }
        }
      }
      .comment-list{
        ul{
          padding:0 20rem/$num 20rem/$num;
          border-bottom:1px solid #eee;
          li{
            padding-top:20rem/$num;
            .comment-item{
              display: box;
              display: -webkit-box;
              display: flex;
              display: -webkit-flex;
            }
            .head{
              margin-right:5rem/$num;
              img{
                width:30rem/$num;
                height:30rem/$num;
              }
            }
            .rgtInfo{
              .username{
                font-size:14rem/$num;
                color: #999;
              }
              .comment-cont{
                padding-top:4rem/$num;
                font-size:14rem/$num;
                color: #333;
                line-height: 26rem/$num;
              }
              .date{
                padding:10rem/$num 0 15rem/$num;
                font-size:12rem/$num;
                color: #999;
                span{
                  float: right;
                }
              }
              .reply{
                background: #F7F7F7;
                border-radius: 3rem/$num;
                padding:0 10rem/$num;
                font-size:12rem/$num;
                .replyerInfo{
                  padding:10rem/$num 0;
                  .name{
                    color: #999;
                  }
                  .reply-content{
                    color: #333;
                  }
                }
                .allReply{
                  color: #B9A468;
                  padding-bottom: 10rem/$num;
                }
              }
            }
          }
        }
        .get-more{
          height:42.5rem/$num;
          line-height: 42.5rem/$num;
          font-size:14rem/$num;
          color: #999;
          text-align: center;
        }
      }
      .about{
        padding:25.5rem/$num 0 24rem/$num 20rem/$num;
      }
    }
    .foot-menu{
      .list-menu{
        height:100%;
        display: flex;
        display: box;
        display: flexbox;
        -webkit-justify-content: space-around;
  			-moz-justify-content: space-around;
  			justify-content: space-around;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
        .menu-item{
          width:33.3%;
          font-size:14rem/$num;
          color: #fff;
          text-align: center;
          i{
            display: inline-block;
            width:18rem/$num;
            height:18rem/$num;
            background-size: cover;
            background-repeat: no-repeat;
            vertical-align: middle;
            margin-right:6rem/$num;
          }
          .cont_detail_icon1{
            background-image: url(../../assets/images/content-detail/collect_no.png);
          }
          .cont_detail_icon2{
            background-image: url(../../assets/images/content-detail/like_no.png);
          }
          .cont_detail_icon3{
            background-image: url(../../assets/images/content-detail/comment.png);
          }
          .cont_detail_icon11{
            background-image: url(../../assets/images/content-detail/collect.png);
          }
          .cont_detail_icon22{
            background-image: url(../../assets/images/content-detail/like.png);
          }
        }
        .line{
          width:1rem/$num;
          height:18rem/$num;
          opacity: 0.4;
          background: #999;
        }
      }
    }
  }
</style>
