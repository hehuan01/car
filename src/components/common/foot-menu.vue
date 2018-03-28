<template>
  <div class="foot-menu">
    <div class="list-menu">
      <router-link to="/" active-class="active" exact>
        <i class="tab1-icon"></i>
        <p>精选</p>
      </router-link>
      <router-link to="/goodsList" active-class="active">
        <i class="tab2-icon"></i>
        <p>车库</p>
      </router-link>
      <router-link to="/order">
        <p class="publish"></p>
      </router-link>
      <router-link to="/order" active-class="active">
        <i class="tab3-icon"></i>
        <p>问题</p>
      </router-link>
      <router-link to="/order" active-class="active">
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
      padding-top:9rem/$num;
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
          width: 20rem/$num;
          height:20rem/$num;
          background-size: cover;
          margin-bottom:3rem/$num;
        }
        .tab1-icon{
          background-image: url(../../assets/images/foot-menu/tab1.png);
        }
        .tab2-icon{
          background-image: url(../../assets/images/foot-menu/tab2.png);
        }
        .tab3-icon{
          background-image: url(../../assets/images/foot-menu/tab3.png);
        }
        .tab4-icon{
          background-image: url(../../assets/images/foot-menu/tab4.png);
        }
        &.active{
					p{
						color:#DDCFA4;
					}
					.tab1-icon{
						background-image:url(../../assets/images/foot-menu/tab1_1.png);
					}
					.tab2-icon{
						background-image:url(../../assets/images/foot-menu/tab2_2.png);
					}
					.tab3-icon{
						background-image:url(../../assets/images/foot-menu/tab3_3.png);
					}
          .tab4-icon{
						background-image:url(../../assets/images/foot-menu/tab4_4.png);
					}
				}
        .publish{
          width:44rem/$num;
          height:32rem/$num;
          background: linear-gradient(-135deg, #DDCFA4 0%, #F0E9D1 100%);
          border-radius: 4rem/$num;
          margin:0 auto;
          &:before{
            position: absolute;
            top:50%;
            left:50%;
            margin-top:-16rem/$num/2;
            margin-left:-2rem/$num/2;
            content:'';
            width:2rem/$num;
            height:16rem/$num;
            background:#333;
          }
          &:after{
            position: absolute;
            left:50%;
            top:50%;
            margin-left:-16rem/$num/2;
            margin-top:-2rem/$num/2;
            content:'';
            width:16rem/$num;
            height:2rem/$num;
            background:#333;
          }
        }
      }
    }
  }
</style>
