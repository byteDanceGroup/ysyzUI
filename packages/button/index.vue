<template>
        <button class="q-button" :class="qClass">
            <span><slot></slot></span>            
        </button>
</template>
<script lang="ts">
export default{
    name:'Button'
}
</script>
<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
    type:{
        type:String,
        default:"default"
    },
    disabled:Boolean,
    round:Boolean,
    ghost:Boolean
})
const qClass = computed(()=>{
    return [
        'q-button',
        `q-button-${props.type}`,
        props.disabled?"q-button-disabled":'',
        props.round?"q-button-round":'',
        props.ghost?"q-button-ghost":'',
    ]
})
</script>

<style lang="scss" scoped>
    .q-button{
        margin-right: 5px;
        border: 0;
        outline: 0;
        background: none;
        line-height: 1.5;
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        white-space: nowrap;
        user-select: none;
        height: 32px;
        padding: 0 15px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid transparent;

        transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear,-webkit-box-shadow .2s linear;
        &:hover,&:focus{
            color: $default;
            background-color: #fff;
            border-color: $default;
        };
    }
    .q-button::before{
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        background: #fff;
        opacity: .35;
        content: "";
        border-radius: inherit;
        z-index: 1;
        transition: opacity .2s;
        pointer-events: none;
        display: none;

    }
    .q-button-default{
        color: #515a6e;
        border-color: #dcdee2;
        background-color: $white;
       
    }
    .q-button-primary{
        color: $white;
        background-color: $primary;
        border-color: $primary;
        &:hover,&:focus{
            color: $white;
            background-color: $default;
            border-color: $default;
        };
    }
    .q-button-dashed{
        color: #515a6e;
        border-color: #dcdee2;
        background-color: $white;
        border-style: dashed;
        &:hover,&:focus{
            border-color: $default;
            border-style: dashed;
        }
    }
    .q-button-text{
        &:hover,&:focus{
            color: $default;
            border-color: $white;
        }
    }
    .q-button-info{
        color: $white;
        background-color: $primary;
        border-color: $primary;
        &:hover,&:focus{
            color: $white;
            background-color: $info-active;
            border-color: $info-active;
        }
    }
    .q-button-success{
        color: $white;
        background-color: #19be6b;
        border-color: #19be6b;
        &:hover,&:focus{
            color: $white;
            background-color: #47cb89;
            border-color: #47cb89;
        }
    }
    .q-button-warning{
        color: $white;
        background-color: #f90;
        border-color: #f90;
        &:hover,&:focus{
            color: $white;
            background-color: #ffad33;
            border-color: #ffad33;
        }
    }
    .q-button-error{
        color: $white;
        background-color: #ed4014;
        border-color: #ed4014;
        &:hover,&:focus{
            color: $white;
            background-color: #f16643;
            border-color: #f16643;
        }
    }
    .q-button-ghost{

            color:$primary;
            background: transparent;
            &:hover,&:focus{
                color:$default;
                background: rgba(245,249,254,.5);
            }
        
    }
</style>