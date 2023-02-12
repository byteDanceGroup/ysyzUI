<template>
  <span
    class="ysyz-datePickerPage-dayButton"
    :class="dayButtonClass"
    @click="buttonHandle"
  >
    {{ props.date.getDate() }}
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
  date: {
    type: Date,
    required: true,
  },
  pageIndex: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 41;
    },
  },
  //日历当前显示的月份
  currentMonth: {
    type: Number,
    required: true,
  },
  multiIndex: {
    type: Number,
    required: true,
  },
  yearTitleIndex: {
    type: Number,
  },
});
let page;
watch(
  props,
  () => {
    isSelected.value = false;
    isSigned.value = false;
    isToday.value = false;
    isInRange.value = false;
  },
  { deep: true }
);
const isSelected = ref(false);
const isSigned = ref(false);
const isToday = ref(false);
const isInRange = ref(false);
const dayButtonClass = computed(() => {
  return [
    props.date.getMonth() === props.currentMonth
      ? ""
      : "ysyz-datePickerPage-dayButton-notCurrentMonth",
    isSelected.value ? "ysyz-datePickerPage-dayButton-select" : "",
    isSigned.value ? "ysyz-datePickerPage-dayButton-sign" : "",
    isToday.value ? "ysyz-datePickerPage-dayButton-today" : "",
    isInRange.value ? "ysyz-datePickerPage-dayButton-inrange" : "",
  ];
});
//由父级调用，表示该按钮被选择
const selectHandle = () => {
  isSelected.value = true;
};
//由父级调用，表示该按钮被标记
const signHandle = () => {
  isSigned.value = true;
};
//前两者的逆操作
const unselectHandle = () => {
  isSelected.value = false;
};
const unsignHandle = () => {
  isSigned.value = false;
};
const todayHandle = () => {
  isToday.value = true;
};
const inRangeHandle = () => {
  isInRange.value = true;
};
const outRangeHandle = () => {
  isInRange.value = false;
};
const buttonHandle = () => {
  page.exposed.childrenClickHandle(props.pageIndex, {
    isSelected: isSelected.value,
    monthMatch: props.date.getMonth() - props.currentMonth,
  });
};
defineExpose({
  index: props.pageIndex,
  multiIndex: props.multiIndex,
  selectHandle,
  signHandle,
  unselectHandle,
  unsignHandle,
  todayHandle,
  inRangeHandle,
  outRangeHandle,
});
let instance = getCurrentInstance();
onBeforeMount(() => {
  page = findComponentUpward(instance, ["DatePickerDayBlock"]);
  if (page) page.exposed.addDayButton(instance, props.pageIndex);
  else Error("DatePickerDayButton找不到父节点");
});
</script>

<style lang="scss" scoped></style>
