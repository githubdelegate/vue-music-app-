<template>
  <div class="app">
      <TopBar/>
      <SwiperBar/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import SwiperBar from './components/SwiperBar.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    SwiperBar
  }
}
</script>

<style lang="less" scoped>
</style>
