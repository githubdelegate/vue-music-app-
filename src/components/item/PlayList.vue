<template>
  <!--  当前播放裂变 -->
  <div class="playlist">
    <div
      class="song"
      v-for="(song, index) in this.playList"
      :key="index"
      @click="playMusic(index)"
    >
      <div class="subleft">
        <span class="left">{{ index + 1 }}</span>
        <div class="center">
          <span class="name">{{ song.name }}</span>
          <div class="asr">
            <span class="asrname" v-for="author in song.ar" :key="author">{{
              author.name
            }}</span>
          </div>
        </div>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";

export default {
  data() {
    return {
    };
  },

  computed: {
    ...mapState(["playListIndex", "playList", "isPlaying"]),
  },
  methods: {
    playMusic(i) {
      this.updatePlayIndex({
        playListIndex: i
      })
    },
    ...mapMutations(['upatePlayList','updatePlayIndex']),
  }
};
</script>

<style lang="less" scoped>
.playlist {
    padding: .4rem;
  .song {
    display: flex;
    width: 100%;
    height: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-left: .2rem;
    margin-right: .2rem;
    margin-top: .4rem;
    .subleft {
      display: flex;
      align-items: center;
    }
    .left {
      color: lightgray;
    }

    .center {
      // max-width: 60%;
      margin-left: 0.2rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex-shrink: 5;
      .name {
        width: 5rem;
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .asr {
        display: flex;

        .asrname {
          font-weight: normal;
          color: lightgray;
          font-size: small;
        }
      }
    }
  }
}
</style>