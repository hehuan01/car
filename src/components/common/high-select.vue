<template>
  <div class="high-select" :class="goodsListClass?'top':''">
    <div class="content">
      <div class="select-item-number">
        <p class="select-name">¥0-¥不限</p>
        <div class="slide"></div>
      </div>
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
  .high-select{
    width:100%;
    height:100%;
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    z-index: 11;
    .content{
      padding:0 20rem/$num;
      .select-item-number{
        border-bottom: 1px solid #eee;
        padding:15rem/$num 26rem/$num;
        .select-name{
          padding:15rem/$num 0;
          font-size: 14rem/$num;
          color: #333;
          text-align: center;
        }
        .slide{
          width:100%;
          height:2rem/$num;
          background:#eee;
          &:before{
            content:'';
            display: inline-block;
            width:14rem/$num;
            height:14rem/$num;
            border-radius: 100%;
            border: 1px solid #B9A468;
          }
        }
      }
    }
  }
  .top{
    top:85rem/$num;
  }
</style>
