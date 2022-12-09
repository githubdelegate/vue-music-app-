<template>
  <div class="footer">
    <div class="left">
      <img :src="playList[playIndex].al.picUrl" alt="" />
      <div>
        <p></p>
        <span>横滑切换哦</span>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
    </div>
  </div>
</template>
<script>
// import { onMounted } from '@vue/runtime-core'
import { mapState } from 'vuex'

export default {
    computed: mapState({
        playList: state => state.playList,
        playListIndex: state => state.playListIndex
    }),

    // onMounted: () => {
    //   console.log(playList);
    // }
}

</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  background-color: white;
  display: flex;
  .left {

  }

  .right {

  }
}
</style>