<template>
  <div class="foot-menu">
    <div class="list-menu">
      <router-link to="">111</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc.scss";
  .foot-menu{
    width:100%;
    height:49rem/$num;
    background:#333;
    position: absolute;
    bottom:0;
    left:0;
    font-size:10rem/$num;
    z-index: 1;
    .list-menu{
      display: flex;
      display: box;
      display: flexbox;
      -webkit-justify-content: space-around;
			-moz-justify-content: space-around;
			justify-content: space-around;
			-webkit-align-content: center;
			-moz-align-content: center;
			align-content: center;
			// height:100%;
      a{

      }
    }
  }
</style>
