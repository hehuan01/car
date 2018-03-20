<template>
  <div class="homePage">
    <router-view>111</router-view>
    <foot-menu></foot-menu>
  </div>
</template>

<script>
 import footMenu from "./common/foot-menu"
 export default {
   data () {
     return {

     }
   },
   components:{
     footMenu
   },
 }
</script>
