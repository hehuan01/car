<template>
  <div class="foot-btn">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .foot-btn{
    width:100%;
    height:49rem/$num;
    line-height: 49rem/$num;
    background:#333;
    position: absolute;
    bottom:0;
    left:0;
    font-size:10rem/$num;
    z-index: 1;
    p{
      text-align: center;
      font-size: 18rem/$num;
      color: #DDCFA4;
    }
  }
</style>
