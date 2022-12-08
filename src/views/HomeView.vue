<template>
    <div class="homeview">
      <TopBar/>
      <SwiperBar/>
      <IconList/>
      <MusicList/>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import SwiperBar from '../components/SwiperBar.vue'
import IconList from '../components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue'
export default {
  name: 'HomeView',
  components: {
    TopBar,
    SwiperBar, 
    IconList,
    MusicList
  }
}
</script>

<style  lang="less" scoped>
</style>