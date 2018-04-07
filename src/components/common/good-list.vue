<template>
  <div class="sub-list">
    <router-link :to="{path: '', params: {} }">
      <div class="grap-text">
        <img src="../../assets/images/goods/recommend1.png"/>
        <p class="good-name">宝马7系 740L Drive豪华配置</p>
        <p class="real-prize">¥110万</p>
        <!-- <p class="fs-price">4S店价格：150万</p> -->
        <p class="good-params">
          <span>现货</span>
          <span>多色可选</span>
        </p>
      </div>
    </router-link>
    <router-link :to="{path: '', params: {} }">
      <div class="grap-text">
        <img src="../../assets/images/goods/recommend1.png"/>
        <p class="good-name">宝马7系 740L Drive豪华配置</p>
        <p class="real-prize">¥110万</p>
        <p class="fs-price">4S店价格：150万</p>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/scssCalc";
.sub-list{
  white-space: nowrap;
  overflow-y:hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
      display: none;
  }
}
a{
  vertical-align: top;
  display:inline-block;
  .grap-text{
    margin-right: 12rem/$num;
    display: inline-block;
    img{
      width:210rem/$num;
      height:120rem/$num;
      border-radius: 6rem/$num;
      vertical-align: top;
    }
    .good-name{
      padding-top:11.3rem/$num;
      font-size:14rem/$num;
      color: #333;
      text-align: center;
    }
    .real-prize{
      padding:12rem/$num 0;
      font-size: 14rem/$num;
      color: #B9A468;
      text-align: center;
    }
    .fs-price{
      font-size:11rem/$num;
      color: #DCDCDC;
      text-decoration: line-through;
      text-align: center;
    }
    .good-params{
      text-align: center;
      span{
        padding:0 2rem/$num;
        margin-right:10rem/$num;
        background: #F7F7F7;
        border-radius: 3rem/$num;
        height:16rem/$num;
        font-size: 10rem/$num;
        color: #CDBC8A;
      }
    }
  }
}
</style>
