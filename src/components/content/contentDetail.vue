<template>
  <div class="content-detail sub-content">
    <div class="top-banner">
      <swiper>
        <swiper-item>
          <router-link :to="{path:'/', query:{}}">
            <img src="../../assets/images/home/banner1.png" />
          </router-link>
        </swiper-item>
        <swiper-item>
          <router-link :to="{path:'/', query:{}}">
            <img src="../../assets/images/home/banner1.png" />
          </router-link>
        </swiper-item>
      </swiper>
      <router-link :to="{name:'',params:{}}">
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .content-detail{
    background:#FBFBFB;
    .top-banner{
      img{
        width:100%;
      }
    }
  }
</style>
