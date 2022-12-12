<template>
  <div class="footer">
    <div class="left">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
      </div>
    </div>
    <div class="right">
      <svg
        class="icon"
        v-if="!isPlaying"
        aria-hidden="true"
        @click="playmusic(playList[playListIndex].id)"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <svg
        class="icon"
        v-if="isPlaying"
        aria-hidden="true"
        @click="playmusic(playList[playListIndex].id)"
      >
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      type="audio/mpeg"
    ></audio>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      playMusicUrl: "",
    };
  },

  computed: {
    ...mapState(["playListIndex", "playList", "isPlaying"]),
  },

  onMounted() {
    console.log("footer music refs");
    console.log(this.$refs.audio);
  },

  methods: {
    playmusic() {
      console.log("返回音乐");
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updatePlay({ isPlaying: true });
      } else {
        this.$refs.audio.pause();
        this.updatePlay({ isPlaying: false });
      }
    },
    ...mapMutations(["updatePlay"]),
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    margin-left: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 0.45rem;
      margin-right: 10px;
    }
  }

  .right {
    margin-right: 0.2rem;
    display: flex;

    .icon {
      width: 0.7rem;
      height: 0.7rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
}
</style>