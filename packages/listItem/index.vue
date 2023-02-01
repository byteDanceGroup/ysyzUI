<template>
    <li class="ysyz-list-item" :class="classes">
        <div class="ysyz-list-item-main">
            <slot></slot>
            
        </div>
    </li>
</template>
<script lang="ts">
export default{
    name:"ysyz-listItem"
}
</script>
<script setup lang="ts">
import { inject,computed } from 'vue';
const itemLayout = inject('ListIn')
console.log(itemLayout)
const classes = computed(()=>{
    return [
      
    ]
})
</script>

<style lang="scss">
$prefix : ysyz-list;
li{
    margin: 0;
    padding: 0;
    list-style: none;
}
.#{$prefix}-item{
    padding:12px;
    display: flex;
    align-items: center;
    
}

</style>