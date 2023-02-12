<template>
  <div :class="wrapClasses" :style="wrapStyles">
    <span
      v-show="showZeroTrigger"
      @click="toggleCollapse"
      :class="zeroWidthTriggerClasses"
    >
      <i class="ivu-icon ivu-icon-ios-menu"></i>
    </span>
    <div :class="childClasses">
      <slot></slot>
    </div>
    <slot name="trigger">
      <div
        v-show="showBottomTrigger"
        :class="triggerClasses"
        @click="toggleCollapse"
        :style="{ width: siderWidth + 'px' }"
      >
        <i :class="triggerIconClasses"></i>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "ysyz-sider",
};
</script>
<script setup lang="ts">
    import { on, off } from '../../../anchor/source/dom';
    import {  dimensionMap, setMatchMedia } from '../../utils/assist';
    import { isClient } from '../../../anchor/source/index';
import myValidat from '../../../List/func';
import { computed, onBeforeUnmount } from '@vue/runtime-core';
import { onMounted,watch } from 'vue';
    const prefixCls = 'ysyz-layout-sider';
    setMatchMedia();

    const props = defineProps({
        modelValue: {  // if it's collpased now
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: 200
        },
        collapsedWidth: {
            type: [Number, String],
            default: 64
        },
        hideTrigger: {
            type: Boolean,
            default: false
        },
        breakpoint: {
            type: String,
            validator (val:string) {
                return myValidat(val, ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);
            }
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        defaultCollapsed: {
            type: Boolean,
            default: false
        },
        reverseArrow: {
            type: Boolean,
            default: false
        }
    })
    const emits=defineEmits(['on-collapse', 'update:modelValue']);
    let  mediaMatched= false
   
 
        const    wrapClasses=computed (()=> {
                return [
                    `${prefixCls}`,
                    siderWidth ? '' : `${prefixCls}-zero-width`,
                    props.modelValue ? `${prefixCls}-collapsed` : ''
                ];
            });
        const    wrapStyles=computed( ()=> {
                return {
                    width: `${siderWidth}px`,
                    minWidth: `${siderWidth}px`,
                    maxWidth: `${siderWidth}px`,
                    flex: `0 0 ${siderWidth}px`
                };
            });
        const   triggerClasses=computed( ()=> {
                return [
                    `${prefixCls}-trigger`,
                    props.modelValue ? `${prefixCls}-trigger-collapsed` : '',
                ];
            });
        const    childClasses=computed (() =>{
                return `${prefixCls}-children`;
            });
        const  zeroWidthTriggerClasses=computed (() =>{
                return [
                    `${prefixCls}-zero-width-trigger`,
                    props.reverseArrow ? `${prefixCls}-zero-width-trigger-left` : ''
                ];
            });
        const    triggerIconClasses = computed( ()=> {
                return [
                    'ivu-icon',
                    `ivu-icon-ios-arrow-${props.reverseArrow ? 'forward' : 'back'}`,
                    `${prefixCls}-trigger-icon`,
                ];
            });
        const    siderWidth=computed (()=> {
                return props.collapsible ? (props.modelValue ? (mediaMatched ? 0 : parseInt(props.collapsedWidth)) : parseInt(props.width)) : props.width;
            })
        const    showZeroTrigger=computed( () =>{
                return props.collapsible ? (mediaMatched && !props.hideTrigger || (parseInt(props.collapsedWidth) === 0) && props.modelValue && !props.hideTrigger) : false;
            })
        const    showBottomTrigger = computed( ()=> {
                return props.collapsible ? !mediaMatched && !props.hideTrigger : false;
            })
        
       
        function    toggleCollapse () {
                let modelValue = this.collapsible ? !this.modelValue : false;
                this.$emit('update:modelValue', modelValue);
            }
            function    matchMedia () {
                if (!isClient) return;
                let matchMedia;
                if (window.matchMedia) {
                    matchMedia = window.matchMedia;
                }
                let mediaMatched = this.mediaMatched;
                this.mediaMatched = matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`).matches;

                if (this.mediaMatched !== mediaMatched) {
                    this.$emit('update:modelValue', this.mediaMatched);
                }
            }
        function    onWindowResize () {
                this.matchMedia();
            }
       

        watch(()=>props.modelValue,(state)=>{
            emits('on-collapse', state);

        })
        onMounted (()=>{
            if (props.defaultCollapsed) {
                emits('update:modelValue', props.defaultCollapsed);
            }
            if (props.breakpoint !== undefined) {
                on(window, 'resize', onWindowResize);
                matchMedia();
            }
        },) 
        onBeforeUnmount (()=> {
            if (props.breakpoint !== undefined) {
                off(window, 'resize', onWindowResize);
            }
        })
    
</script>
