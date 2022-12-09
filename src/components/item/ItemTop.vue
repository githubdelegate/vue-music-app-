<template>
    <div class="itemTop">
        {{playList}}
    </div>
</template>

<script>
export default {
    props: ['playList'],
    setup(props) {
       console.log(props.playList);
    }
}
console.log('ItemTop get value');
</script>

<style lang="less" scoped>

</style>