<template>
    <div class="itemMusic">
        <ItemTopVue :playList="state.playList"/>
        <ItemListVue :songs="state.songs" :subscribedCount="state.playList.subscribedCount" />
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import ItemTopVue from '@/components/item/ItemTop.vue';
import { reactive } from 'vue';
import ItemListVue from '@/components/item/ItemList.vue';

// 当引入模块只有一个 export 的时候， 要么使用大括号 要么 加上default ,不然报错找不到
import { getPlayListDetail, getMusicList } from '@/request/api/itemMusic'

const state = reactive({
    playList: {},
    songs: {},
})

onMounted(async () => {
     let id = useRoute().query.id;
     console.log(id);
     state.playList = {
        "name": "hhhah"
     }

     let res = await getPlayListDetail(id);
     console.log("playlist")
    console.log(res)
     state.playList = res.data.playlist
     // 缓存数据 sessionStorge
     sessionStorage.setItem('itemDetail', JSON.stringify(res.data.playlist))

     let musiclist = await getMusicList(id)
     console.log('musiclist')
     console.log(musiclist)
     state.songs = musiclist.data.songs
})
</script>

<style lang="less" scoped>

</style>