<template>
  <div class="publish">
    <div class="publish-content sub-content">
      <div class="publish-top">
        <div class="publish-item">
          <input type="text" placeholder="添加标题" name="title"/>
        </div>
        <div class="publish-item">
          <textarea placeholder="说说你的心得吧～" cols="10" />
        </div>
        <div class="publish-item">
          <span class="upload uploaded">
            <img src="../../assets/images/home/share1.png"/>
            <input type="file"/>
          </span>
          <span class="upload">
            <input type="file"/>
          </span>
        </div>
      </div>
      <div class="publish-center"></div>
      <div class="publish-other">
        <div class="publish-item ubox">
          <p class="branch">添加车辆品牌</p>
          <p class="rgt-arrow"></p>
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
      text:'发布'
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
            z-index: 2;
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
