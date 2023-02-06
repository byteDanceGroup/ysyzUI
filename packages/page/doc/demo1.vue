<template>
    <ysyz-page :total="100" @on-change="c" @on-prev="click1" @on-next="click2"></ysyz-page>
    <ysyz-page :total="1000" show-sizer></ysyz-page>
    <ysyz-page :total="100" show-elevator></ysyz-page>
</template>

<script setup lang="ts">
import { computed } from "vue"
const click1 = ()=>{
    alert('触发前切换事件')
    console.log(1)
}
const click2 = ()=>{
    alert('触发后切换事件')
    console.log(1)
}
const c = ()=>{
    console.log("2")
}
</script>

<style lang="scss" scoped>

</style>