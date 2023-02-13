<template>
    <ysyz-page :total="100" @on-change="c" @on-prev="click1" @on-next="click2" show-elevator></ysyz-page>
</template>
<script setup lang="ts">
const click1 = ()=>{
    alert('触发前切换事件')
    console.log(1)
}
const click2 = ()=>{
    alert('触发后切换事件')
    console.log(1)
}
const c = ()=>{
    alert('触发页面跳转事件')
}
</script>
<style lang="scss" scoped>
</style>