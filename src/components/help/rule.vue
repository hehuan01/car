<template>
  <div class="help-rule sub-content">
    <div class="content">
      <ul>
        <li>
          <h2>Q1.什么是平行进口车？</h2>
          <p>
            平行进口汽车，全称是平行贸易进口车，简称平贸车。是指未经品牌厂商授权，贸易商从海外市场购买，并引入中国市场进行销售的汽车。由于进口地不同，可分为“美规车”、“中东版车”“加版车”“欧版车”等，以区别于授权渠道销售的“中规车”。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .help-rule{
    background: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    .content{
      padding:0 10rem/$num 0 20rem/$num;
      h2{
        padding: 20rem/$num 0 5rem/$num;
        font-size: 14rem/$num;
        color: #333;
        line-height: 24rem/$num;
      }
      p{
        font-size: 14rem/$num;
        color: #666;
        line-height: 24rem/$num;
      }
    }
  }
</style>
