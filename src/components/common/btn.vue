<template>
  <div class="foot-btn">
    <button :disabled="btn.disabled" :style="btn.disabled?'color:#666':''" @click="btnClick()">{{btn.text}}</button>
  </div>
</template>

<script>
  export default {
    props: ['btn'],
    methods:{
      btnClick(){
        this.$emit('btnClick')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .foot-btn{
    width: 100%;
    position: absolute;
    bottom:0;
    left:0;
    z-index: 1;
    button{
      border: none;
      outline: none;
      width:100%;
      height:49rem/$num;
      line-height: 49rem/$num;
      background:#333;
      text-align: center;
      font-size: 18rem/$num;
      color: #DDCFA4;
      padding: 0;
    }
  }
</style>
