<template>
  <div class="common-select" :class="goodsListClass?'top':''">
    <div class="select-inner">
      <div class="select-item">
        <p>所有品牌</p>
        <p><span>阿斯顿马丁</span></p>
        <p><span class="active">阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span class="active">阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span class="active">阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
        <p><span>阿斯顿马丁</span></p>
      </div>
      <!-- <div class="select-item select-item2-bg">
        <p>不限</p>
        <p><span>BMW3系</span></p>
        <p><span class="active">BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
      </div> -->
      <!-- <div class="select-item select-item3-bg">
        <p>不限</p>
        <p><span>BMW3系</span></p>
        <p><span class="active">BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
        <p><span>BMW3系</span></p>
      </div> -->
    </div>
    <div class="btns">
      <button class="cancel-btn">重置</button><button class="true-btn">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodsListClass'],
  data() {
    return {

    }
  },

}
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .common-select{
    width:100%;
    height:100%;
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    z-index: 11;
    .select-inner{
      height:100%;
      display: box;
      display: -webkit-box;
      display: flex;
      display: -webkit-flex;
    }
    .select-item{
      padding:11rem/$num 20rem/$num 133rem/$num;
      background:#fff;
      text-align: center;
      flex:auto;
      -webkit-flex:auto;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
          display: none;
      }
      p{
        padding:20rem/$num 0;
        font-size: 14rem/$num;
        color: #333;
      }
      .active{
        color: #B9A468;
        padding:0 5rem/$num 10rem/$num;
        border-bottom: 1px solid #B9A468;
      }
    }
    .select-item2-bg{
      background: #F7F7F7;
    }
    .select-item3-bg{
      background: #F1F1F1;
    }
    .btns{
      position: fixed;
      left:0;
      bottom: 0;
      height:49rem/$num;
      line-height: 49rem/$num;
      button{
        border:none;
        outline: none;
        height: 100%;
        padding:0;
        font-size: 18rem/$num;
      }
      .cancel-btn{
        width:125rem/$num;
        background-image: linear-gradient(-135deg, #DDCFA4 0%, #F0E9D1 100%);
        color: #333;
      }
      .true-btn{
        width:250rem/$num;
        background: #333;
        color: #DDCFA4;
      }
    }
  }
  .top{
    top:85rem/$num;
  }
</style>
