<template>
  <span
    class="ysyz-datePickerPage-yearButton"
    :class="yearButtonClass"
    @click="buttonHandle"
  >
    <slot></slot>
  </span>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from "vue";
import { findComponentUpward } from "../../src/utils/assits";

const props = defineProps({
  pageIndex: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 41;
    },
  },
});
let page;
const isSelected = ref(false);
const yearButtonClass = computed(() => {
  return [isSelected.value ? "ysyz-datePickerPage-yearButton-select" : ""];
});
//由父级调用，表示该按钮被选择
const selectHandle = () => {
  isSelected.value = true;
};

//前两者的逆操作
const unselectHandle = () => {
  isSelected.value = false;
};

const buttonHandle = () => {
  page.exposed.childrenClickHandle(props.pageIndex, {
    isSelected: isSelected.value,
  });
};
defineExpose({
  selectHandle,
  unselectHandle,
});
let instance = getCurrentInstance();
onBeforeMount(() => {
  page = findComponentUpward(instance, ["DatePickerYearMonthBlock"]);
  if (page) page.exposed.addDayButton(instance, props.pageIndex);
  else Error("DatePickerYearMonthButton找不到父节点");
});
</script>

<style lang="scss" scoped></style>
