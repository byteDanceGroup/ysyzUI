<template>
  <div class="ysyz-descriptionList">
    <div
      class="ysyz-descriptionList-titleBox"
      v-if="props.title || slots.title"
    >
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div
      class="ysyz-descriptionList-contentBox"
      :class="className"
      :style="`margin:0 -${padding} 0`"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, useSlots } from "@vue/runtime-core";
export default {
  name: "ysyz-descriptionList",
};
</script>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  col: {
    type: [String, Number],
    default: 3,
    validator(value: any) {
      return [1, 2, 3, 4].indexOf(parseInt(value + "")) > -1;
    },
  },
  gutter: {
    type: Number,
    default: 32,
  },
  layout: {
    type: String,
    default: "horizontal",
    validator(value: string) {
      return ["horizontal", "vertical"].indexOf(value) > -1;
    },
  },
});

const slots = useSlots();

const padding = computed(() => {
  return props.gutter / 2 + "px";
});

const className = computed(() => {
  return [
    "ysyz-descriptionList-contentBox-col-" + props.col,
    "ysyz-descriptionList-contentBox-" + props.layout,
  ];
});
</script>

<style lang="scss">
// 基本样式
.ysyz-descriptionList {
  padding: 5px;
  &-titleBox {
    width: 100%;
    color: darken($text, 10%);
    font-weight: 600;
  }

  &-contentBox {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    &-vertical {
      .ysyz-description {
        display: block !important;
      }
    }
    col &-col-1 {
      .ysyz-description {
        width: 100%;
      }
    }
    &-col-2 {
      .ysyz-description {
        width: 50%;
      }
    }
    &-col-3 {
      .ysyz-description {
        width: 33.333333%;
      }
    }
    &-col-4 {
      .ysyz-description {
        width: 25%;
      }
    }
    &-col-2,
    &-col-3,
    &-col-4 {
      @media screen and (max-width: 768px) {
        .ysyz-description {
          width: 50%;
        }
      }
      @media screen and (max-width: 576px) {
        .ysyz-description {
          width: 100%;
        }
      }
    }

    .ysyz-description {
      padding-left: v-bind(padding);
      padding-right: v-bind(padding);
      padding-top: 10px;
    }
  }
}
</style>
