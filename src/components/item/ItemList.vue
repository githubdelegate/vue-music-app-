<template>
  <div class="itemList">
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放全部</span>
      </div>
      <button>+ 收藏({{ subscribedCount }})</button>
    </div>
    <div class="list">
      <div class="song" v-for="(song, index) in songs" :key="index" @click="playMusic(index)">
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
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: ["songs", "subscribedCount"],
  setup(props) {
    console.log("setup props");
    console.log(props.songs);
  },

  methods: {
    playMusic(i) {
      this.upatePlayList({
        playList: this.songs
      })
      this.updatePlayIndex({
        playListIndex: i
      })
    },
    ...mapMutations(['upatePlayList','updatePlayIndex']),
  }

};
</script>

<style lang="less" scoped>
.itemList {
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  background: white;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  .top {
    display: flex;
    height: 0.6rem;
    justify-content: space-between;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-top: 0.1rem;

    button {
      background-color: red;
      border: 0cm;
      color: white;
      border-radius: 0.3rem;
    }
  }

  .list {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-top: 0.2em;
    .song {
      display: flex;
      width: 100%;
      height: 1rem;
      align-items: center;
      justify-content: space-between;

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
}
</style>