<template>
  <div class="itemTop">
    <!-- {{ playList }} -->

    <img class="botimg" :src="playList.coverImgUrl" alt="" />

    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-back"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
      </div>
    </div>

    <div class="center">
      <img :src="playList.coverImgUrl" alt="" />
      <div class="right">
        <span class="title">{{ playList.name }}</span>
        <div class="avatar">
          <img :src="playList.creator.avatarUrl" alt="" />
          <span>{{ playList.creator.nickname }}</span>
        </div>
        <span class="desc">{{ playList.description }}</span>
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
        <span>{{ playList.trackCount }}</span>
      </div>

      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
        <span>{{ playList.shareCount }}</span>
      </div>

      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
        <span>100</span>
      </div>

      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
        <span>100</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playList"],
  setup(props) {
    console.log(props.playList);
  },
};
console.log("ItemTop get value");
</script>

<style lang="less" scoped>
.itemTop {
  display: flex;
  flex-direction: column;
  width: 100%;
  //   height: 0.4rem;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  position: relative;

  .botimg {
    width: 100%;
    height: 5rem;
    position: fixed;
    z-index: -1;
    object-fit: cover;
    filter: blur(30px);
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      margin: 0 10px;
      margin-top: 20px;
      width: 20%;
      display: flex;
      justify-content: space-between;
      color: white;
    }
  }

  .center {
    width: 100%;
    display: flex;
    color: white;
    margin-top: 20px;
    img {
      margin-left: 0.4rem;
      max-width: 2rem;
      max-height: 2rem;
      object-fit: cover;
      border-radius: 0.2rem;
    }

    .right {
     width: 5rem;
     height: 100px;
      margin-left: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 10px;
      img {
        max-width: 0.8rem;
        max-height: 0.8rem;
        object-fit: cover;
        border-radius: 0.4rem;
      }

      .avatar {
        display: flex;
        align-items: center;
      }
      .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .bottom {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
    }
  }

  .icon {
    width: 0.4rem;
    height: 0.4rem;
    fill: white;
  }
}
</style>