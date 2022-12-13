<template>
  <div class="musicDetail">
    <img :src="musicInfo.al.picUrl" alt="" class="bgimg">
    <div class="top">
      <svg class="icon" aria-hidden="true" @click="togglePlayList">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
      <div class="center">
        <span class="title">{{musicInfo.name}}</span>
        <span class="name">{{musicInfo.ar[0].name}}</span>
      </div>
      <svg class="icon" aria-hidden="true" @click="togglePlayList">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
    </div>
    <div class="content">
        <img src="@/assets/needle-ab.png" alt="" class="needle">
        <img src="@/assets/music-circle.png" alt="" class="circle">
        <img :src="musicInfo.al.picUrl" alt="" class="pic">
    </div>
    <!-- {{ musicInfo }} -->
  </div>
</template>
<script>
export default {
  props: {
    musicInfo: {},
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.musicDetail {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .bgimg {
        position: fixed;
        width: 100%;
        height: 100%;
        filter: blur(30px);
        z-index: -1;
    }

    .top {
        margin-left: .2rem;
        margin-right: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        .center {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .content {
        width: 100%;
        height: 9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .needle {
            width: 2rem;
            height: 3rem;
            position: absolute;
            left: 46%;
            transform-origin: 0 0;
            transform: rotate(-10deg);
            transition: all 2s;
        }

        .circle {
            width: 5rem;
            height: 5rem;
            position: absolute;
            bottom: 2.3rem;
            z-index: -1;
        }

        .pic {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            position: absolute;
            bottom: 3.14rem;
        }
    }
}
</style>