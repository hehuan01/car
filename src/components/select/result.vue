<template>
  <div>
    <div class="sub-content result">
      <custom-good></custom-good>
    </div>
    <btn :text="text"></btn>
  </div>
</template>

<script>
import customGood from '../common/custom-good'
import btn from '../common/btn'
export default {
  data() {
    return {
      text:'重置选择'
    }
  },
  components: {
    customGood,
    btn
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/scssCalc";
  .result{
    background:#fff;
    padding-bottom: 15rem/$num;
  }
</style>
