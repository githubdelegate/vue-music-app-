<template>
  <div class="app">
     <!-- <HomeView/> -->
     <router-view></router-view>
     <FooterMusicVue/>
  </div>
 
</template>

<script>
// import HomeView from './views/HomeView.vue';
import FooterMusicVue from './components/item/FooterMusic.vue';

export default {
  name: 'App',
  components: {
    FooterMusicVue,
  }
}
</script>

<style lang="less" scoped>
</style>
