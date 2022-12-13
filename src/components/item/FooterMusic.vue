<template>
  <div class="footer">
    <div class="left" @click="this.togglemMsicDetailShow()">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].name }}</p>
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
      <svg class="icon" aria-hidden="true" @click="togglePlayList">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      type="audio/mpeg"
    ></audio>
    <van-popup v-model:show="showPlayList" round  position="bottom" :style="{ height: '80%' ,width: '100%' }">
      <PlayListVue />
    </van-popup>

    <van-popup v-model:show="this.musicDetailShow"  position="right" :style="{ height: '100%' ,width: '100%' }">
      <MusicDetailVue :musicInfo="playList[playListIndex]" @playMusic="playmusic" :isPlaying="this.isPlaying" />
    </van-popup>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import PlayListVue from "./PlayList.vue";
import MusicDetailVue from "./MusicDetail.vue";
export default {

  setup() {
      const emitTest = () => {
        console.log('emit test');
      }

      return {
        emitTest
      }
  },
  components:{
    PlayListVue,
    MusicDetailVue
  },

  data() {
    return {
      playMusicUrl: "",
      showPlayList: false,
      showMusicDetail: false,
    };
  },

  computed: {
    ...mapState(["playListIndex", "playList", "isPlaying", "musicDetailShow"]),
  },

  watch: {
    playListIndex(old, newv) {
      console.log(old);
      console.log(newv);
      this.$refs.audio.autoplay = true;
      this.updatePlay({ isPlaying: true });
    },
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

    togglePlayList() {
      this.showPlayList = !this.showPlayList
    },
    ...mapMutations(["updatePlay", "togglemMsicDetailShow"]),
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