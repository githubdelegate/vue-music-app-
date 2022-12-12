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
// import PlayListVue from './components/item/PlayList.vue';

export default {
  name: 'App',
  components: {
    FooterMusicVue,
    // PlayListVue
  },

  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true
    }
  }

}
</script>

<style lang="less" scoped>
</style>
