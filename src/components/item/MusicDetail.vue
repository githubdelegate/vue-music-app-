<template>
  <div class="musicDetail">
    <img :src="musicInfo.al.picUrl" alt="" class="bgimg" />
    <div class="top">
      <svg
        class="icon"
        aria-hidden="true"
        @click="this.togglemMsicDetailShow()"
      >
        <use xlink:href="#icon-back"></use>
      </svg>
      <div class="center">
        <span class="title">{{ musicInfo.name }}</span>
        <span class="name">{{ musicInfo.ar[0].name }}</span>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
    <div class="content">
      <img src="@/assets/needle-ab.png" alt="" class="needle" :class="{needle_active:isPlaying, needle_stop: !isPlaying}" />
      <img src="@/assets/music-circle.png" alt="" class="circle" />
      <img :src="musicInfo.al.picUrl" alt="" class="pic" :class="{pic_pause: !isPlaying ,pic_active: isPlaying}"  />
    </div>

    <div class="bottom">
      <div class="topbtns">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jushoucang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
      <div class="endbtns">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyige"></use>
        </svg>

        <svg
          class="icon play"
          v-if="!isPlaying"
          aria-hidden="true"
          @click="play"
        >
          <use xlink:href="#icon-24gl-playCircle"></use>
        </svg>

        <svg class="icon play" v-if="isPlaying" aria-hidden="true" @click="play">
          <use xlink:href="#icon-zanting"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayige"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
      </div>
    </div>
    <!-- {{ musicInfo }} -->
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["musicInfo", "isPlaying"],

  setup(props, ctx) {
    const play = () => {
      console.log("emit play");
      ctx.emit("playMusic");
    };
    return {
      play,
    };
  },

  onMounted() {
    console.log(this.play);
  },

  emits: ["playMusic"],

  methods: {
    toggleMusic() {
      this.$emit("play");
    },
    ...mapMutations(["togglemMsicDetailShow"]),
  },
};
</script>

<style lang="less" scoped>
.musicDetail {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-between;

  .icon {
    width: 40px;
    height: 40px;
    color: #fff;
  }

  .bgimg {
    position: fixed;
    width: 100%;
    height: 100%;
    filter: blur(30px);
    z-index: -1;
  }

  .top {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
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

    .needle_active {
      transform: rotate(0deg);
    }

    .needle_stop {
      transform: rotate(-10deg);
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
      animation: rotate_ar 10s linear infinite;
    }

    .pic_active {
      animation-play-state: running;
    }

    .pic_pause {
      animation-play-state: paused;
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    color: white;
    .topbtns {
      display: flex;
      justify-content: space-around;
      height: 30px;
    }

    .endbtns {
      display: flex;
      justify-content: space-around;
      height: 2rem;
      align-items: center;
      .play {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  @keyframes rotate_ar {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
</style>