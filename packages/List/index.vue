<template>
  <div :class="classes">
    <div class="ysyz-list-header" v-if="header || this.$slots.header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ysyz-list-container">
      <ul class="list-items"><slot></slot></ul>
    </div>
    <div class="ysyz-list-footer" v-if="footer || this.$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ysyz-list",
};
</script>

<script setup lang="ts">
import { computed, provide } from "vue";
import myValidat from "./func";
provide('ListIn', this)
const prefix = "ysyz-list";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  border: {
    type: Boolean,
    default: false,
  },
  itemLayout: {
    validator(value: string) {
      return myValidat(value, ["horizontal", "vertical"]);
    },
    default: "horizontal",
  },
  header: {
    type: String,
    default: "",
  },
  footer: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    validator(value: string) {
      return myValidat(value, ["small", "large", "default"]);
    },
    default:"default"
  },
  split: {
    type: Boolean,
    default: true,
  },
});
const classes = computed(() => {
  return [
    `${prefix}`,
    `${prefix}-${props.size}`,
    `${prefix}-${props.itemLayout}`,
    {
      [`${prefix}-border`]: props.border,
      [`${prefix}-split`]: props.split,
    },
  ];
});
</script>

<style lang="scss" >
$prefix : ysyz-list;
ul{
    margin: 0;
    padding: 0;
    list-style: none;
     
}
.#{$prefix}{
    position: relative;
    width: 400px;
    
    
    &-header{
        background: transparent;
    }
    &-footer{
        background: transparent;
    }
    &-header,
    &-footer {
        padding-top: 12px;
        padding-bottom: 12px;
    }
    &-split &-item {
        border-bottom: 1px solid #e8eaec;
        &:last-child {
            border-bottom: none;
        }
    }
    &-split &-header {
        border-bottom: 1px solid #e8eaec;
    }
    &-split &-footer{
        border-top: 1px solid #e8eaec;
    }
    &-large &-item {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    &-small &-item {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    &-item-no-flex {
        display: block;
    }

    &:not(.#{$prefix}-vertical) {
      .#{$prefix}-item-no-flex {
        .#{$prefix}-item-action {
                float: right;
            }
        }
    }
}
.#{$prefix}-border{
  
    border:1px solid  $border-color-base;
    border-radius: $border-radius-base;
    .#{$prefix}-header{
      padding-right: 24px;
      padding-left: 24px;
    }
    .#{$prefix}-footer {
        padding-right: 24px;
        padding-left: 24px;
    }

    .#{$prefix}-item {
        padding-right: 24px;
        padding-left: 24px;
    }
    &.#{$prefix}-small {
        .#{$prefix}-item {
            padding-right: 16px;
            padding-left: 16px;
        }
        .#{$prefix}-header,
        .#{$prefix}-footer {
            padding: 8px 16px;
        }
    }

    &.#{$prefix}-large {
        .#{$prefix}-header,
        .#{$prefix}-footer {
            padding: 16px 24px;
        }
    }

}
</style>