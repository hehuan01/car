<template>
  <div class="qa sub-content">
    <div class="banner"><img src="../../assets/images/home/banner1.png" alt=""></div>
    <div class="qa-list">
      <ul>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q1-icon.png">
            <p class="q-name">公司介绍</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q2-icon.png">
            <p class="q-name">车源</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q3-icon.png">
            <p class="q-name">贷款</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q4-icon.png">
            <p class="q-name">车险</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q5-icon.png">
            <p class="q-name">牌照</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q6-icon.png">
            <p class="q-name">验车提车</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q7-icon.png">
            <p class="q-name">签单</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/help/q8-icon.png">
            <p class="q-name">其他问题</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .qa{
    background: #fff;
    .banner{
      img{
        width:100%;
        height:130rem/$num;
        vertical-align: top;
      }
    }
    .qa-list{
      ul{
        display: box;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        -webkit-flex-wrap:wrap;
        justify-content: space-between;
        -webkit-justify-content:space-between;
        li{
          width:25%;
          margin-top:32rem/$num;
          text-align: center;
          a{
            img{
              width:32rem/$num;
              height:32rem/$num;
            }
            .q-name{
              padding-top: 10rem/$num;
              font-size: 12rem/$num;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>
