<template>
  <div class="all-comments">
    <div class="sub-content">
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
                  <div class="reply-item">
                    <p class="replyerInfo">
                      <span class="userHead"><img src="../../assets/images/home/head1.png"></span>
                      <span class="name">齐天大圣：</span>
                    </p>
                    <p class="reply-content">自家Ingenium系列发动机</p>
                    <p class="date">今天12:24<span>回复</span></p>
                  </div>
                  <div class="reply-item">
                    <p class="replyerInfo">
                      <span class="userHead"><img src="../../assets/images/home/head1.png"></span>
                      <span class="name">齐天大圣：</span>
                    </p>
                    <p class="reply-content">自家Ingenium系列发动机</p>
                    <p class="date">今天12:24<span>回复</span></p>
                  </div>
                  <p class="allReply all-comments-reply">共12条回复</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-item">
              <div class="head"><img src="../../assets/images/home/head2.png"/></div>
              <div class="rgtInfo">
                <p class="username">令狐冲</p>
                <p class="comment-cont">哇欧巴好帅！自家Ingenium系列发动机的25t车型能更进一步吗？下面的我们就一起来看看它有何独特之处吧。</p>
                <p class="date">今天12:24<span>回复</span></p>
                <div class="reply">
                  <div class="reply-item">
                    <p class="replyerInfo">
                      <span class="userHead"><img src="../../assets/images/home/head1.png"></span>
                      <span class="name">齐天大圣：</span>
                    </p>
                    <p class="reply-content">自家Ingenium系列发动机</p>
                    <p class="date">今天12:24<span>回复</span></p>
                  </div>
                  <div class="reply-item">
                    <p class="replyerInfo">
                      <span class="userHead"><img src="../../assets/images/home/head1.png"></span>
                      <span class="name">齐天大圣：</span>
                    </p>
                    <p class="reply-content">自家Ingenium系列发动机</p>
                    <p class="date">今天12:24<span>回复</span></p>
                  </div>
                  <p class="allReply all-comments-reply">共12条回复</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="publish-comment">
      <div class="input-postion">
        <div class="input-outer">
          <input type="text" placeholder="添加一句评论吧～～" class="contents"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .all-comments{
    .comment-list{
      background: #fff;
      ul{
        padding:0 20rem/$num 20rem/$num;
        border-bottom:1px solid #eee;
        li{
          padding-top:20rem/$num;
          padding-bottom: 10rem/$num;
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
                .userHead{
                  display:inline-block;
                  vertical-align:middle;
                  margin-right:6rem/$num;
                  img{
                    width:22rem/$num;
                    height:22rem/$num;
                    border-radius: 100%;
                  }
                }
                .name{
                  color: #999;
                }
              }
              .reply-content{
                color: #333;
              }
              .allReply{
                color: #B9A468;
                padding-bottom: 10rem/$num;
              }
              .all-comments-reply{
                padding:5rem/$num 0 15rem/$num;
                text-align: center;
                &:after{
                  content:'';
                  display: inline-block;
                  vertical-align: middle;
                  margin-left:6rem/$num;
                  margin-bottom:3rem/$num;
                  width:5rem/$num;
                  height:5rem/$num;
                  border-bottom: 1px solid #B9A468;
                  border-right: 1px solid #B9A468;
                  transform: rotate(45deg);
                  -webkit-transform: rotate(45deg);
                }
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
    .publish-comment{
      width:100%;
      height:49rem/$num;
      background:#FBFBFB;
      position: absolute;
      bottom:0;
      left:0;
      font-size:10rem/$num;
      z-index: 1;
      .input-postion{
        padding:8rem/$num 20rem/$num;
        .input-outer{
          width:100%;
          height:33rem/$num;
          line-height: 33rem/$num;
          background:#fff;
          border-radius: 3rem/$num;
          .contents{
            border:none;
            outline: none;
            width:94%;
            padding:8rem/$num 10rem/$num;
            font-size:14rem/$num;
            color:#333;
            &::placeholder{
              color:#DCDCDC;
            }
          }
        }
      }
    }
  }
</style>
