<template>
  <div class="foot-menu">
    <div class="list-menu">
      <router-link to="/" active-class="active">
        <i class="tab1-icon"></i>
        <p>精选</p>
      </router-link>
      <router-link to="/" active-class="active">
        <i class="tab2-icon"></i>
        <p>车库</p>
      </router-link>
      <router-link to="/" active-class="active">
        <i class="tab3-icon"></i>
        <p>问题</p>
      </router-link>
      <router-link to="/" active-class="active">
        <i class="tab4-icon"></i>
        <p>我的</p>
      </router-link>
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
        display: block;
        font-size: 10rem/$num;
        color: #999;
        text-align: center;
        flex:1;
        -webkit-flex:1;
        -moz-flex:1;
        i{
          display: inline-block;
          width: 22rem/$num;
          height:22rem/$num;
          background-size: cover;
        }
        .tab1-icon{
          background-image: url(../../assets/images/foot-menu/tab1.png);
        }
      }
    }
  }
</style>
