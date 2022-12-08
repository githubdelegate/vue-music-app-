<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicswiper">
      <van-swipe
        :loop="false"
        :width="150"
        :show-indicators="false"
        class="my-swipe"
      >
        <van-swipe-item v-for="item in state.items" :key="item">
          <img :src="item.picUrl" />
          <span class="playcount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-songlist-01"></use>
            </svg>
            {{ changeCount(item.playCount) }}
          </span>
          <span class="name">{{ item.name }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { getMusicList } from "@/request/api/home";
import { onMounted } from "@vue/runtime-core";
import { reactive } from "vue";

var state = reactive({ items: [] });

onMounted(async () => {
  let res = await getMusicList();
  console.log(res);
  state.items = res.data.result;
});

function changeCount(num) {
  if (num > 100000000) {
    return (num / 100000000).toFixed(1) + "忆";
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num;
}
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 10px;
      border-radius: 20px;
    }
  }

  .musicswiper {
    margin-top: 0.2rem;
    width: 100%;
    height: 4rem;
    .my-swipe {
      height: 100%;
      .van-swipe-item {
        display: flex;
        flex-direction: column;
        margin-left: .2rem;
        margin-right: .2rem;
        img {
          height: 100%;
          width: 150px;
          max-height: 3rem;
          object-fit: cover;
          border-radius: .2rem;
        }
        .playcount {
          position: absolute;
          color: white;
          right: 10px;
          top: .1rem;
          .icon {
            width: .4rem;
           
          }
        }
        .name {
          
        }
      }
    }
  }
}
</style>