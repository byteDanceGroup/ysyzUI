<template>
  <div :class="classes">
    <div class="cardHead" v-if="showHead">
      <div class="2" :class="`${prefix}-head`" v-if="showHead">
        <slot name="title">
        <p v-if="title">
        <ysyz-icon v-if="icon" :type="icon"></ysyz-icon>
        <span>{{ title }}</span>
        </p></slot>
      </div>
      <div :class="`${prefix}-extra`" v-if="showExtra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div :class="`${prefix}-body`" :style="bodyStyles"><slot></slot></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ysyz-card",
};
</script>
<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from "@vue/runtime-core";
import { Ref } from "vue";
let showHead: Ref<boolean | string> = ref(true);
let showExtra = ref(true);
const prefix = "ysyz-card";
const defaultPadding = 16;
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  disHover: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: Number,
    default: 16,
  },
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
});
const classes = computed(() => {
  return [
    "ysyz-card",
    props.bordered ? `${prefix}-bordered` : "",
    props.disHover ? `${prefix}-disHover` : "",
    props.shadow ? `${prefix}-shadow` : "",
  ];
});

const bodyClasses = () => {
  return `${prefix}-body`;
};
const bodyStyles = computed(() => {
  if (props.padding !== defaultPadding) {
    return {
      padding: `${props.padding}px`,
    };
  } else {
    return "";
  }
});
onMounted(() => {
  showHead.value = props.title || useSlots().title !== undefined;
  showExtra.value = useSlots().extra !== undefined;
  console.log(showHead.value);
});
</script>

<style lang="scss" scoped>
.ysyz-card {
  display: block;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    border-color: #eee;
  }
  &-head {
    position: absolute;
    left: 16px;
    top: 10px;
  }
  &-shadow {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
    border-color: #eee;
  }
  &-shadow:hover {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
    border-color: #eee;
  }
  &-bordered {
    border: 1px solid #dcdee2;
    border-color: #e8eaec;
  }
  &-extra {
    position: absolute;
    right: 16px;
    top: 10px;
  }
  &-disHover:hover {
    border-color: #e8eaec;
    box-shadow: none;
  }
  &-body {
    padding: 16px;
  }
}
.cardHead{
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
}
</style>