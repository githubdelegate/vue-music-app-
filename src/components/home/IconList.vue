<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-tupianyihuifu-15"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-songlist-01"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
.iconList {
    margin-top: .2rem;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;

    .iconItem {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        .icon {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>