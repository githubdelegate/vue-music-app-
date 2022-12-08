<template>
    <div class="itemMusic">
        歌单页面
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import {getPlayListDetail} from '@/request/api/itemMusic'

onMounted(async () => {
     let id = useRoute().query.id;
     console.log(id);

     let res = await getPlayListDetail(id);
     console.log(res);
})

</script>

<style lang="less" scoped>

</style>