<template>
  <div class="ysyz-datePicker-yearMonthBlock">
    <ysyz-grid :col="3" :border="false" padding="0px">
      <ysyz-grid-item v-for="(date, index) of dateArray" :key="'year-' + index">
        <DatePickerYearMonthButton
          :pageIndex="index"
          :yearTitleIndex="props.yearTitleIndex"
        >
          {{
            props.type === "year"
              ? props.currentYear?.getFullYear() + index + "年"
              : index + 1 + "月"
          }}
        </DatePickerYearMonthButton>
      </ysyz-grid-item>
    </ysyz-grid>
  </div>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeMount, ref } from "vue";
import DatePickerYearMonthButton from "./DatePickerYearMonthButton.vue";
let instance = getCurrentInstance();
const props = defineProps({
  currentYear: {
    type: Date,
  },
  type: {
    type: String,
  },
  yearTitleIndex: {
    type: Number,
  },
});
const dateArray = new Array(props.type === "year" ? 10 : 12);
const dayButtonArray = ref<any[]>([]);
const addDayButton = (buttonInstance: any, index: number) => {
  dayButtonArray.value[index] = buttonInstance;
};
const childrenUnselectAllHandle = () => {
  dayButtonArray.value.forEach((element) => {
    element.exposed?.unselectHandle();
  });
};

const childrenSelectHandle = (index: number) => {
  dayButtonArray.value[index].exposed?.selectHandle();
};
const childrenUnselectHandle = (index: number) => {
  dayButtonArray.value[index].exposed?.unselectHandle();
};
const childrenClickHandle = (index, preState) => {
  instance?.parent?.exposed.childrenClickYearMonthHandle(index, preState);
};
defineExpose({
  childrenSelectHandle,
  childrenUnselectAllHandle,
  childrenUnselectHandle,
  childrenClickHandle,
  addDayButton,
});
</script>

<style lang="scss" scoped></style>
