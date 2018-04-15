<template>
  <div>
    <div class="sub-content">
      <my-info></my-info>
      <div class="publish-content">
        <p class="date">2月21日</p>
        <list></list>
      </div>
    </div>
    <btn :text="text"></btn>
  </div>
</template>

<script>
  import myInfo from "../common/my-info"
  import list from "../common/list"
  import btn from "../common/btn"
  export default {
    data() {
      return {
        text:'发布动态'
      }
    },
    components:{
      myInfo,
      list,
      btn
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .publish-content{
    margin-top:10rem/$num;
    background:#fff;
    padding-left: 20rem/$num;
    .date{
      padding:25rem/$num 0;
      font-size: 20rem/$num;
      color: #333;
    }
  }
</style>
