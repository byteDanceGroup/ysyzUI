<template>
  <div
    class="ysyz-loadingBar"
    :style="`background-color:${color};width:${width}%;opacity:${opacity}`"
  ></div>
</template>
<script lang="ts">
export default {
  name: "ysyz-loadingBar",
};
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import { colorValidator } from "../../src/utils/color";
const primaryColor = ref("#2d8cf0");
const errorColor = ref("#f56c6c");
const errorState = ref(false);
const color = computed(() => {
  return errorState.value ? errorColor.value : primaryColor.value;
});
const width = ref(0);
const opacity = ref(0);
let timer: any;
const show = () => {
  opacity.value = 1;
};
const unshow = () => {
  setTimeout(() => {
    opacity.value = 0;
  }, 400);
  setTimeout(() => {
    width.value = 0;
  }, 600);
};

const revisePrimaryColor = (value: string) => {
  if (!colorValidator(value)) {
    console.error("非法颜色设置");
    return;
  }
  primaryColor.value = value;
};

const reviseErrorColor = (value: string) => {
  if (!colorValidator(value)) {
    console.error("非法颜色设置");
    return;
  }
  errorColor.value = value;
};

const update = (value: number) => {
  if (timer) clearInterval(timer);
  errorState.value = false;
  show();
  if (value > 100 || value < 0) {
    console.error("非法百分数设置，参数只能为0-100的数");
    return;
  }
  width.value = value;
};
const toend = () => {
  show();
  if (timer) clearInterval(timer);
  width.value = 98;
  unshow();
};
const start = () => {
  errorState.value = false;
  width.value = 0;
  show();
  let value = 85;
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (value > width.value) {
      width.value += Math.random();
    } else clearInterval(timer);
  }, 50);
};
const finish = () => {
  errorState.value = false;
  toend();
};
const error = () => {
  errorState.value = true;
  toend();
};
const config = (value: object) => {
  if (value.hasOwnProperty("errorColor")) reviseErrorColor(value["errorColor"]);

  if (value.hasOwnProperty("color")) revisePrimaryColor(value["color"]);
};
defineExpose({
  update,
  finish,
  error,
  start,
  config,
});
</script>

<style lang="scss" scoped>
.ysyz-loadingBar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  transition: all 0.3s;
  z-index: 2023;
}
</style>
