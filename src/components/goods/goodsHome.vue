<template>
  <div class="goods-home sub-content">
    <ul>
      <li>
        <img src="../../assets/images/goods/msld-logo.png" /><br>
        玛莎拉蒂
      </li>
      <li>
        <img src="../../assets/images/goods/lsls-logo.png" /><br>
        劳斯莱斯
      </li>
      <li>
        <img src="../../assets/images/goods/asdmd-logo.png" /><br>
        阿斯顿马丁
      </li>
      <li>
        <img src="../../assets/images/goods/bl-logo.png" /><br>
        宾利
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .goods-home{
    background:#fff;
    ul{
      display: box;
      display: -webkit-box;
      display: flex;
      display: -webkit-flex;
      flex-wrap:wrap;
      flex-wrap:-webkit-wrap;
      li{
        width:105rem/$num;
        height:83rem/$num;
        padding:10rem/$num;
        text-align: center;
        font-size:12rem/$num;
        color: #333;
        img{
          width:85rem/$num;
          height:60rem/$num;
        }
      }
    }
  }
</style>
