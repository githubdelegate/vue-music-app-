<template>
    <div class="topbar">
        <i class="iconfont icon-database"></i>
        <span>我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>视频</span>
        <i class="iconfont icon-search"></i>
    </div>
</template>

<script>
export default {
    name: "TopBar"
}
</script>

<style lang="less">
.topbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>