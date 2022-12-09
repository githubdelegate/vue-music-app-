<template>
    <div class="itemMusic">
        <ItemTopVue :playList="state.playList"/>
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import ItemTopVue from '@/components/item/ItemTop.vue';
import { reactive } from 'vue';

// 当引入模块只有一个 export 的时候， 要么使用大括号 要么 加上default ,不然报错找不到
import { getPlayListDetail } from '@/request/api/itemMusic'

const state = reactive({
    playList: {}
})

onMounted(async () => {
     let id = useRoute().query.id;
     console.log(id);
     state.playList = {
        "name": "hhhah"
     }

     let res = await getPlayListDetail(id);
     console.log(res);
     state.playList = res.data.playlist

     // 缓存数据 sessionStorge
     sessionStorage.setItem()

})

</script>

<style lang="less" scoped>

</style>