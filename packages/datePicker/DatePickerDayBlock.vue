<template>
  <div class="ysyz-datePicker-dayBlock">
    <ysyz-grid :col="7" square center :border="false" padding="0px">
      <ysyz-grid-item
        v-for="(date, index) of weekArray"
        :key="'weekTitle-' + index"
      >
        <div class="ysyz-datePicker-dayBlock-week">{{ date }}</div>
      </ysyz-grid-item>
      <ysyz-grid-item
        v-for="(date, index) of monthDateArray"
        :key="'date-' + multiIndex + '-' + index"
      >
        <DatePickerDayButton
          :pageIndex="index"
          :date="date"
          :currentMonth="props.currentMonth"
          :multiIndex="props.multiIndex"
        ></DatePickerDayButton>
      </ysyz-grid-item>
    </ysyz-grid>
  </div>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeMount, ref } from "vue";
import DatePickerDayButton from "./DatePickerDayButton.vue";
let instance = getCurrentInstance();
const props = defineProps({
  monthDateArray: {
    type: Array<Date>,
  },
  //日历当前显示的月份
  currentMonth: {
    type: Number,
    required: true,
  },
  multiIndex: {
    type: Number,
  },
});
const weekArray = ["日", "一", "二", "三", "四", "五", "六"];
//日期按钮子组件数组，便于选择时调用
const dayButtonArray = ref<any[]>([]);
const addDayButton = (buttonInstance: any, index: number) => {
  dayButtonArray.value[index] = buttonInstance;
};
const childrenSignHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.signHandle();
  }
};
const childrenUnsignHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.unsignHandle();
  }
};
const childrenSelectHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.selectHandle();
  }
};
const childrenUnselectHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.unselectHandle();
  }
};
const childrenUnselectAllHandle = () => {
  for (let button of dayButtonArray.value) {
    button.exposed.unselectHandle();
  }
};
const childrenTodayHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.todayHandle();
  }
};
const childrenInHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.inRangeHandle();
  }
};
const childrenOutHandle = (index: number) => {
  if (dayButtonArray.value[index]) {
    dayButtonArray.value[index].exposed.outRangeHandle();
  }
};
const childrenOutAllHandle = () => {
  for (let button of dayButtonArray.value) {
    button.exposed.outRangeHandle();
  }
};
const childrenClickHandle = (index, preState) => {
  instance?.parent?.exposed.childrenClickTopHandle(
    index,
    preState,
    props.multiIndex
  );
};
defineExpose({
  addDayButton,
  childrenSignHandle,
  childrenUnsignHandle,
  childrenSelectHandle,
  childrenUnselectHandle,
  childrenUnselectAllHandle,
  childrenClickHandle,
  childrenTodayHandle,
  childrenInHandle,
  childrenOutHandle,
  childrenOutAllHandle,
});
</script>

<style lang="scss" scoped></style>
