<template>
  <div class="btns">
    <button class="cancel-btn">重置</button><button class="true-btn">确定</button>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
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
</style>
