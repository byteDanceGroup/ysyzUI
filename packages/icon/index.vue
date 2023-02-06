<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="Icon"></use>
  </svg>
</template>
<script lang="ts">
import "./js/fonticon.js"
import { computed } from '@vue/runtime-core'
export default{
    name:"ysyz-icon"
}
</script>
<script setup lang="ts">

const props = defineProps({
    type:{
        type:String,
        default:""
    },
    name:{
        type:String,
        default:""
    }
})
const Icon = computed(()=>{
    return `#icon-${props.type}`
})
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>