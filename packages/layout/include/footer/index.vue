<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script lang="ts">
export default{
    name:'ysyz-footer'
}</script>
<script setup lang="ts">
import { computed } from "@vue/runtime-core";

    const prefixCls = 'ysyz-layout';
  

    const wrapClasses=computed(()=>{
        return `${prefixCls}-footer`;
    }) 
</script>