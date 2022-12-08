<template>
  <div id="swiperbar">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import axios from "axios";
import { onMounted, reactive } from "vue";
import {getBanner} from '../request/api/home'; 
// import { ref } from 'vue';

export default {
  name: "SwiperBar",
  setup() {
    const state = reactive({
      images: ['xxx', 'xxxx'],
    });

    onMounted( async () => {
      let res = await getBanner();
      // console.log(res)
      state.images = res.data.banners;
      // axios
      //   .get("https://netease-cloud-music-api-murex-seven-11.vercel.app/banner")
      //   .then((res) => {
      //     console.log(res);
      //     state.images = res.data.banners;
      //   });


    });
    return { state };
  },
};
</script>

<style lang="less" scoped>
#swiperbar {
  margin: .2rem .2rem;
  .van-swipe {
    
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-van-swipe__indicators {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>