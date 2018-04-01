<template>
  <div>
  <div class="goods-list sub-content">
    <div class="goods-filter ubox">
      <div class="filter-item filter-item-active">品牌</div>
      <div class="filter-line"></div>
      <div class="filter-item">高级筛选</div>
    </div>
    <div class="recommend">
      <div class="title ubox">
        <p class="title-name">为您推荐</p>
        <p class="refresh">换一批</p>
      </div>
      <div class="common-content">
        <div class="sub-list">
          <router-link :to="{path: '', params: {} }">
            <div class="grap-text">
              <img src="../../assets/images/goods/recommend1.png"/>
              <p class="good-name">宝马7系 740L Drive豪华配置</p>
              <p class="real-prize">¥110万</p>
              <p class="fs-price">4S店价格：150万</p>
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
      </div>
    </div>
    <div class="middle-filter ubox">
      <div class="middle-filter-item"><i class="small-icon lft-icon"></i>品牌专区</div>
      <div class="middle-filter-item"><i class="small-icon rgt-icon"></i>立即定制</div>
    </div>
    <div class="best-goods">
      <div class="title">精选商品</div>
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
      </div>
    </div>
  </div>
  <public-select :goodsListClass="true"></public-select>
</div>
</template>

<script>
import publicSelect from '../common/public-select'
export default {
  data() {
    return {

    }
  },
  components: {
    publicSelect
  }
}

</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .goods-list{
    .goods-filter{
      background: #fff;
      height:40rem/$num;
      line-height: 40rem/$num;
      border-bottom: 1px solid #eee;
      .filter-item{
        width:50%;
        font-size:14rem/$num;
        color: #333;
        text-align: center;
        &:after{
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4rem/$num solid transparent;
          border-right: 4rem/$num solid transparent;
          border-top: 5rem/$num solid #DCDCDC;
          vertical-align: middle;
          margin-left: 5rem/$num;
        }
      }
      .filter-item-active{
        font-weight: bolder;
        &:after{
          border-top-color: #000;
        }
      }
      .filter-line{
        width:1rem/$num;
        height:20rem/$num;
        background: #eee;
      }
    }
    .recommend{
      background:#fff;
      .title{
        padding:25.5rem/$num 20rem/$num 10rem/$num;
        .title-name{
          font-size:20rem/$num;
          color: #333;
          font-weight: bold;
        }
        .refresh{
          font-size: 14rem/$num;
          color: #B9A468;
          &:before{
            content:'';
            display: inline-block;
            background-image: url(../../assets/images/goods/refresh.png);
            background-repeat: no-repeat;
            background-size: cover;
            width:15rem/$num;
            height:15rem/$num;
            margin-right: 5rem/$num;
            margin-bottom: 2rem/$num;
            vertical-align: middle;
          }
        }
      }
      .common-content{
        padding:20rem/$num 0 35rem/$num 35rem/$num;
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
          }
        }
      }
    }
    .middle-filter{
      margin:10rem/$num 0;
      background:#fff;
      height:80rem/$num;
      line-height: 80rem/$num;
      .middle-filter-item{
        width:50%;
        font-size:16rem/$num;
        color: #333;
        text-align: center;
        .small-icon{
          display: inline-block;
          width:30rem/$num;
          height:30rem/$num;
          background-repeat: no-repeat;
          background-size: cover;
          margin-bottom: 5rem/$num;
          margin-right: 14rem/$num;
          vertical-align: middle;
        }
        .lft-icon{
          background-image: url(../../assets/images/goods/filter1.png);
        }
        .rgt-icon{
          background-image: url(../../assets/images/goods/filter2.png);
        }
      }
    }
    .best-goods{
      background:#fff;
      .title{
        padding:30rem/$num 20rem/$num 0;
        font-size:20rem/$num;
        color: #333;
        font-weight: bold;
      }
      .common-goods-list{
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
    }
  }
  .brand-select{
    top:84rem/$num;
  }
</style>
