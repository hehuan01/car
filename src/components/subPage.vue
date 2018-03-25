<template>
  <div class="subPage">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        direction:'forward'
      }
    }
  }
</script>
