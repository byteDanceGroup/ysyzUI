<template>
    <form :class="classes"><slot></slot></form>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core';
import myValidat from '../List/func';
import { ref } from 'vue';
export default{
    name:"ysyz-form"
}</script>
<script setup lang="ts">
const props = defineProps({
    model: {
        type: Object
    },
    rules: {
        type: Object
    },
    labelWidth: {
        type: Number
    },
    labelPosition: {
        validator (value:string) {
            return myValidat(value, ['left', 'right', 'top']);
        },
        default: 'right'
    },
    inline: {
        type: Boolean,
        default: false
    },
    showMessage: {
        type: Boolean,
        default: true
    },
    autocomplete: {
        validator (value:string) {
            return myValidat(value, ['on', 'off']);
        },
        default: 'off'
    },
    hideRequiredMark: {
        type: Boolean,
        default: false
    },
    labelColon: {
        type: [Boolean, String],
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
const fields:any = []
const prefix = "ysyz-form"
const classes = computed(()=>{
    return [
        `${prefix}`,
        `${prefix}-label-${props.labelPosition}`,
        {
            [`${prefix}-inline`]:props.inline,
            [`${prefix}-hide-required-mark`]:props.hideRequiredMark
        }
    ]
})
const colon = computed(()=>{
    let colon = '';
    if(props.labelColon){
        colon = (typeof props.labelColon === 'boolean')?":":props.labelColon
    }
    return colon
})
const addField = (field:any) =>{
    if(field) fields.push(field)
}
const removeField = (field)=>{
    if(field.prop)  fields.splice(fields.indexOf(field),1)
}
// const resetFields = ()=>{
//     fields.value.forEach(field=>{
//         field.resetField()
//     })
// }
// const validate = (callback)=>{
//     return new Promise(resolve =>{
//         let valid = true;
//         let count =0;
//         if(fields.value.length === 0){
//             resolve(valid);
//             if(typeof callback === 'function'){
//                 callback(valid)
//             }
//         }
//         fields.value.forEach(field =>{
//             field.validate('',errors=>{
//                 if(errors){
//                     valid = false
//                 }
//                 if( ++ count === fields.value.length){
//                     resolve(valid);
//                     if(typeof callback === 'function'){
//                         callback(valid)
//                     }
//                 }
//             })
//         })
//     })
// }
// const validateField = (prop, cb) => {
//     const field = fields.value.filter(field => field.prop === prop)[0];
//     if(!field){throw new Error("错误")}
//     field.validate("", cb)
// }
// watch((),({

// }))
</script>

<style scoped lang="scss">

</style>