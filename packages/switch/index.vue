<template>
    <span
    tabindex="0"
    :class="classes"
    @click="toggle"
    @keydown.space="toggle">
    <input type="hidden" :name="name" :value="currentValue">
   
    <span :class="innerClasses">
        <slot name="open" v-if="currentValue === props.trueValue"></slot>    
        <slot name="close" v-if="currentValue == props.falseValue"></slot>
    </span>
    </span>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity';
import myValidat from '../List/func';
import { watch,computed, StyleValue } from 'vue';
export default{
    name:'ysyz-switch'
}</script>
<script setup lang="ts">

const prefix = 'ysyz-switch'

const props = defineProps({
    modelValue: {
                type: [String, Number, Boolean],
                default: false
            },
    trueValue: {
        type: [String, Number, Boolean],
        default: true
    },
    falseValue: {
        type: [String, Number, Boolean],
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        validator (value:string) {
            return myValidat(value, ['large', 'small', 'default']);
        },
        default:"default"
    },
    name: {
        type: String
    },
    loading: {
        type: Boolean,
        default: false
    },
    trueColor: {
        type: String
    },
    falseColor: {
        type: String
    },
    beforeChange: Function
})
const currentValue = ref(props.modelValue)
watch(()=>currentValue.value,(val)=>{
    if(val !== props.trueValue &&val !== props.falseValue && val !== null){
        throw 'Value should be trueValue or falseValue.';
    }
    currentValue.value = val;
})
const classes = computed(()=>{
    return[
        `${prefix}`,
        {
            
            [`${prefix}-checked`]: currentValue.value === props.trueValue,
            [`${prefix}-disabled`]:props.disabled,
            [`${prefix}-${props.size}`]:!!props.size,
            [`${prefix}-loading`]:props.loading
        }
    ]
})
const styles= computed(()=>{
    let style = {}
    if(props.trueColor && currentValue.value === props.trueValue)
    {
        style['border-color'] = props.trueColor;
        style['background-color']= props.trueColor;
    }else if(props.falseColor && currentValue.value === props.falseValue){
        style['border-color'] = props.falseColor;
        style['background-color']= props.falseColor;
    }
})
const innerClasses = computed(()=>{
    return `${prefix}-inner`
})
const handleToggle = ()=>{
    const checked = currentValue.value === props.trueValue ? props.falseValue : props.trueValue;

    currentValue.value = checked;
}
const toggle = (event)=>{
    event.preventDefault();
    if(props.disabled || props.loading){
        return false
    }
    if(!props.beforeChange){
        return handleToggle();
    }
    const before = props.beforeChange();
    if(before && before.then){
        before.then(()=>{
            handleToggle()
        })
    }else handleToggle();
}

</script>

<style scoped lang="scss">
@import "./style.scss"
</style>