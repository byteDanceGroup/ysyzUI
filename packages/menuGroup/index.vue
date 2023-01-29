<template>
  <div class="ysyz-menu-menuGroup-title" v-if="props.title" :style="titleStyle">
    {{ props.title }}
  </div>
  <slot></slot>
</template>
<script lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import { getCurrentInstance, inject, ref } from "vue";
import { findComponentsUpward } from "../../src/utils/assits";
export default {
  name: "ysyz-menuGroup",
};
</script>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
const padding = ref(30);
const mode = inject("mode");
const titleStyle = computed(() => {
  if (mode === "vertical") return `padding-left:${padding.value}px;`;
  else return "";
});
let instance = getCurrentInstance();
onMounted(() => {
  let menuList = findComponentsUpward(instance, ["ysyz-menu", "ysyz-submenu"]);
  padding.value *= menuList.length;
});
</script>

<style lang="scss" scoped>
.ysyz-menu-menuGroup-title {
  color: #aaa;
  padding: 8px 10px;
  cursor: default;
}
</style>
