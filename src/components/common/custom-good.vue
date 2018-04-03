<template>
  <div class="common-goods-list">
    <div class="goods-list-item">
      <router-link :to="{path: '', params: {} }">
        <img src="../../assets/images/goods/good1.png"/>
        <p class="good-name">保时捷 Panamera 4 2014 </p>
        <p class="good-price">¥ 84.5万<span>¥ 84.5万</span></p>
        <p class="others">
          <span>3.0T</span>
          <span>多色可选</span>
          <span>可定制</span>
          <span>现货</span>
        </p>
      </router-link>
    </div>
    <div class="goods-list-item">
      <router-link :to="{path: '', params: {} }">
        <img src="../../assets/images/goods/good1.png"/>
        <p class="good-name">保时捷 Panamera 4 2014 </p>
        <p class="good-price">¥ 84.5万<span>¥ 84.5万</span></p>
        <p class="others">
          <span>3.0T</span>
          <span>多色可选</span>
          <span>可定制</span>
          <span>现货</span>
        </p>
      </router-link>
    </div>
    <div class="goods-list-item">
      <router-link :to="{path: '', params: {} }">
        <img src="../../assets/images/goods/good1.png"/>
        <p class="good-name">保时捷 Panamera 4 2014 </p>
        <p class="good-price">¥ 84.5万<span>¥ 84.5万</span></p>
        <p class="others">
          <span>3.0T</span>
          <span>多色可选</span>
          <span>可定制</span>
          <span>现货</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "../../assets/scss/scssCalc";
.common-goods-list{
  background: #fff;
  padding-bottom: 5rem/$num;
  .goods-list-item{
    padding:20rem/$num 20rem/$num 0;
    text-align: center;
    img{
      width:335rem/$num;
      height:170rem/$num;
    }
    .good-name{
      font-size: 14rem/$num;
      padding:5rem/$num 0 8rem/$num;
      color: #000;
    }
    .good-price{
      font-size: 17rem/$num;
      color: #B9A468;
      span{
        font-size: 11rem/$num;
        color: #DCDCDC;
        text-decoration: line-through;
        margin:0 13rem/$num;
      }
    }
    .others{
      padding:8rem/$num 0 10rem/$num;
      span{
        padding:0 4rem/$num;
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
