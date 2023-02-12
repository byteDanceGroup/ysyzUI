<template>
    <li class="ysyz-list-item" :class="classes">
        <template v-if="itemLayout === 'vertical' && this.$slots.extra">
            <div class="ysyz-list-item-main">
                <slot></slot>
                <ul class="ysyz-list-item-action" v-if="this.$slots.action">
                    <slot name="action"></slot>
                </ul>
            </div>
            <div class="ysyz-list-item-extra">
                <slot name="extra"></slot>
            </div>
        </template>
        <template v-else>
            <slot></slot>
            <ul class="ysyz-list-item-action" v-if="this.$slots.action">
                <slot name="action"></slot>
            </ul>
            <div class="ysyz-list-item-extra">
                <slot name="extra"></slot>
            </div>
        </template>
    </li>
</template>
<script lang="ts">
export default{
    name:"ysyz-listItem"
}
</script>
<script setup lang="ts">
import { inject,computed,useSlots  } from 'vue';
const mySlot = useSlots()
const itemLayout = inject('ListIn')
console.log(itemLayout)
const classes = computed(()=>{
    return [
      {
        'ysyz-list-item-no-flex':!isFlexMode
      }
    ]
})
const isItemContainsTextNode = computed(()=>{
    let result;
    const slotDefault = !!useSlots().default;
    if(slotDefault)
        {mySlot.default!().forEach(item => {
        if (typeof item === 'string') {
            result = true;
        }
    });}
    return result;
})
const isFlexMode = computed(()=>{
    const extra = mySlot.extra;
    if (itemLayout === 'vertical') {
        return !!extra;
    }

    return !isItemContainsTextNode;    
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