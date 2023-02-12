<template>
  <div class="ysyz-datePicker">
    <input type="text" @focus="openPicker" :value="showValue" ref="input" />
    <div class="ysyz-datePicker-box" :style="boxStyle" ref="datePickerBox">
      <div class="ysyz-datePickerPage-box">
        <div class="ysyz-datePickerPage-time" v-if="timeShow">
          <div class="ysyz-datePickerPage-time-box">
            <div
              class="ysyz-datePickerPage-time-box-option"
              v-for="(hour, index) of hours"
              :key="index"
              @click="setDateHour(index, 0)"
            >
              {{ index < 10 ? "0" + index : index }}
            </div>
          </div>
          <div class="ysyz-datePickerPage-time-box">
            <div
              class="ysyz-datePickerPage-time-box-option"
              v-for="(minute, index) of minutes"
              :key="index"
              @click="setDateMinute(index, 0)"
            >
              {{ index < 10 ? "0" + index : index }}
            </div>
          </div>
          <div
            class="ysyz-datePickerPage-time-box"
            v-if="props.type === 'daterange'"
          >
            <div
              class="ysyz-datePickerPage-time-box-option"
              v-for="(hour, index) of hours"
              :key="index"
              @click="setDateHour(index, 1)"
            >
              {{ index < 10 ? "0" + index : index }}
            </div>
          </div>
          <div
            class="ysyz-datePickerPage-time-box"
            v-if="props.type === 'daterange'"
          >
            <div
              class="ysyz-datePickerPage-time-box-option"
              v-for="(minute, index) of minutes"
              :key="index"
              @click="setDateMinute(index, 1)"
            >
              {{ index < 10 ? "0" + index : index }}
            </div>
          </div>
        </div>
        <div
          class="ysyz-datePickerPage-header"
          :style="timeShow ? 'opacity:0' : ''"
        >
          <div class="ysyz-datePickerPage-header-left">
            <span
              class="ysyz-datePickerPage-header-button"
              @click="headSwitchHandle(0)"
            >
              <span class="ysyz-datePickerPage-header-left-jian"></span>
              <span class="ysyz-datePickerPage-header-left-jian"></span>
            </span>
            <span
              class="ysyz-datePickerPage-header-button"
              @click="headSwitchHandle(1)"
              v-if="props.type !== 'year'"
            >
              <span class="ysyz-datePickerPage-header-left-jian"></span>
            </span>
          </div>
          <div
            class="ysyz-datePickerPage-header-main"
            v-if="props.type === 'date'"
          >
            {{ currentMonth0.getFullYear() }}年&nbsp;{{
              currentMonth0.getMonth() + 1
            }}月
          </div>
          <div
            class="ysyz-datePickerPage-header-main"
            v-if="props.type === 'daterange'"
          >
            {{ currentMonth0.getFullYear() }}年&nbsp;{{
              currentMonth0.getMonth() + 1
            }}月&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{
              currentMonth1.getFullYear()
            }}年&nbsp;{{ currentMonth1.getMonth() + 1 }}月
          </div>
          <div
            class="ysyz-datePickerPage-header-main"
            v-if="props.type === 'month'"
          >
            {{ currentMonth0.getFullYear() }}年
          </div>
          <div
            class="ysyz-datePickerPage-header-main"
            v-if="props.type === 'year'"
          >
            {{ currentMonth0.getFullYear() }}s
          </div>
          <div class="ysyz-datePickerPage-header-right">
            <span
              class="ysyz-datePickerPage-header-button"
              @click="headSwitchHandle(2)"
              v-if="props.type !== 'year'"
            >
              <span class="ysyz-datePickerPage-header-right-jian"></span>
            </span>
            <span
              class="ysyz-datePickerPage-header-button"
              @click="headSwitchHandle(3)"
            >
              <span class="ysyz-datePickerPage-header-right-jian"></span
              ><span class="ysyz-datePickerPage-header-right-jian"></span>
            </span>
          </div>
        </div>

        <div
          class="ysyz-datePickerPage-body"
          :style="timeShow ? 'opacity:0' : ''"
          @mouseover="if (rangeMode) rangeHandle($event);"
        >
          <DatePickerDayBlock
            :monthDateArray="monthDateArray0"
            v-if="props.type === 'daterange' || props.type === 'date'"
            :currentMonth="currentMonth0.getMonth()"
            :multiIndex="0"
            ref="dayBlock0"
          ></DatePickerDayBlock>
          <DatePickerDayBlock
            v-if="props.type === 'daterange'"
            :monthDateArray="monthDateArray1"
            :currentMonth="currentMonth1.getMonth()"
            :multiIndex="1"
            ref="dayBlock1"
            style="margin-left: 20px"
          ></DatePickerDayBlock>
          <DatePickerYearMonthBlock
            v-if="props.type === 'year' || props.type === 'month'"
            :type="props.type"
            :currentYear="currentMonth0"
            :yearTitleIndex="yearTitleIndex"
            ref="yearMonthBlock"
          ></DatePickerYearMonthBlock>
        </div>
      </div>
      <div class="ysyz-datePickerPage-footer" v-if="props.footer || props.time">
        <div class="ysyz-datePickerPage-footer-left">
          <ysyz-button
            type="text"
            v-if="
              props.time &&
              ((props.type === 'date' && !props.multiple) ||
                props.type === 'daterange')
            "
            :disabled="
              (props.type === 'date' && !props.modelValue.length) ||
              (props.type === 'daterange' && props.modelValue.length !== 2)
            "
            @click="switchTimeShow"
            >{{ timeShowText }}</ysyz-button
          >
        </div>
        <div class="ysyz-datePickerPage-footer-right">
          <ysyz-button
            @click="
              if (props.type === 'date' || props.type === 'daterange')
                clearDate();
              else clearYear();
            "
            >清空</ysyz-button
          >
          <ysyz-button type="primary" @click="closePicker">确认</ysyz-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ysyz-datePicker",
};
</script>
<script setup lang="ts">
import {
  provide,
  ref,
  onMounted,
  nextTick,
  getCurrentInstance,
  computed,
} from "vue";
import DatePickerDayBlock from "./DatePickerDayBlock.vue";
import DatePickerYearMonthBlock from "./DatePickerYearMonthBlock.vue";
const props = defineProps({
  startDate: {
    type: Date,
    default: new Date(),
  },
  modelValue: {
    type: Array<Date>,
    required: true,
  },
  type: {
    type: String,
    default: "date",
    validator(value: string) {
      return ["date", "daterange", "month", "year"].indexOf(value) > -1;
    },
  },
  //daterange时多选无效
  multiple: {
    type: Boolean,
    default: false,
  },
  //只有type为date或daterange时有效
  time: {
    type: Boolean,
    default: false,
  },
  //展示footer，包括清空和确认键。如果time为true则footer必须显示
  footer: {
    type: Boolean,
    default: false,
  },
  format: {
    type: String,
  },
});
const cloneDate = function (value: Date) {
  return new Date(value.valueOf());
};
//////////数据////////
const todayDate = ref(new Date());
todayDate.value.setHours(0, 0, 0, 0);
const signDate = ref(cloneDate(props.startDate));
signDate.value.setHours(0, 0, 0, 0);
//这个currentMonth并不是选定的日期，只是作为当前显示月份的标记日期罢了。
const currentMonth0 = ref<Date>(cloneDate(props.startDate));
if (props.type === "year")
  currentMonth0.value.setFullYear(
    currentMonth0.value.getFullYear() - (currentMonth0.value.getFullYear() % 10)
  );
const currentMonth1 = ref<Date>(cloneDate(currentMonth0.value));
currentMonth1.value.setMonth(currentMonth1.value.getMonth() + 1);
currentMonth0.value.setHours(0, 0, 0, 0);
currentMonth1.value.setHours(0, 0, 0, 0);
const currentMonthCouple = [currentMonth0, currentMonth1];
//两个选择模块的ref
const dayBlock0 = ref(null);
const dayBlock1 = ref(null);
const dayBlockCouple = [dayBlock0, dayBlock1];
//显示的日期数组
const monthDateArray0 = ref<Date[]>([]);
const monthDateArray1 = ref<Date[]>([]);
const monthDateCouple = [monthDateArray0, monthDateArray1];

///////////组件展示有关////////////
const boxStyle = ref("opacity:0");
const datePickerBox = ref(null);
const input = ref(null);
//展开收拢控制
const pickerVisible = ref(false);
const openPicker = () => {
  pickerVisible.value = true;
  boxStyle.value = "opacity:0";
  setTimeout(() => {
    boxStyle.value = "opacity:1";
  }, 0);
  if (props.type === "date") initMonth(0);
  if (props.type === "daterange") {
    initMonth(1);
    initMonth(0);
    nextTick(() => {
      rangeRepain();
    });
  }
  //开始监听
  datePickerBox.value.addEventListener("click", _stopPropagation);
  input.value.addEventListener("click", _stopPropagation);
  document.addEventListener("click", closePicker);
};
const _stopPropagation = (event: any) => {
  event.stopPropagation();
};
const closePicker = () => {
  boxStyle.value = "opacity:0";
  setTimeout(() => {
    boxStyle.value = "opacity:0;display:none;";
    pickerVisible.value = false;
  }, 200);
  //取消监听
  if (datePickerBox.value)
    datePickerBox.value.removeEventListener("click", _stopPropagation);
  if (input.value) input.value.removeEventListener("click", _stopPropagation);
  document.removeEventListener("click", closePicker);
};
//daterange选中1个的时候，进入范围选择模式
const rangeMode = ref(false);
const rangeHandle = (e: any) => {
  if (!e.target.__vnode.ctx.exposed) {
    return;
  }
  let date1 =
    monthDateCouple[e.target.__vnode.ctx.exposed.multiIndex || 0].value[
      e.target.__vnode.ctx.exposed.index
    ];
  let date2;
  if (date1 > props.modelValue[0]) {
    date2 = date1;
    date1 = props.modelValue[0];
  } else {
    date2 = props.modelValue[0];
  }
  monthDateArray0.value.forEach((val, index) => {
    if (val > date1 && val < date2) dayBlock0.value.childrenInHandle(index);
    else dayBlock0.value.childrenOutHandle(index);
  });
  monthDateArray1.value.forEach((val, index) => {
    if (val > date1 && val < date2) dayBlock1.value.childrenInHandle(index);
    else dayBlock1.value.childrenOutHandle(index);
  });
};
//已选定时切换页面需要进行重新绘制
const rangeRepain = () => {
  if (props.modelValue.length !== 2) return;
  let date1 = props.modelValue[0];
  let date2 = props.modelValue[1];
  monthDateArray0.value.forEach((val, index) => {
    if (val > date1 && val < date2) dayBlock0.value.childrenInHandle(index);
    else dayBlock0.value.childrenOutHandle(index);
  });
  monthDateArray1.value.forEach((val, index) => {
    if (val > date1 && val < date2) dayBlock1.value.childrenInHandle(index);
    else dayBlock1.value.childrenOutHandle(index);
  });
};
//input框显示的内容

const format = computed(() => {
  if (props.format) return props.format;
  if (props.type === "year") return "yyyy年";
  if (props.type === "month") return "yyyy年MM月";
  if (props.time) return "yyyy-MM-dd hh:mm";
  return "yyyy-MM-dd";
});
const showValue = computed(() => {
  switch (props.type) {
    case "daterange":
      if (props.modelValue.length === 2)
        return props.modelValue
          .map((a) => (a instanceof Date ? a.Format(format.value) : "error"))
          .join("-");
      else return "";
    default:
      return props.modelValue
        .map((a) => (a instanceof Date ? a.Format(format.value) : "error"))
        .join(" ; ");
  }
  return "";
});

/////////////时间选择模块控制/////////////
const timeShow = ref(false);
const hours = new Array(24);
const minutes = new Array(60);
const switchTimeShow = () => {
  timeShow.value = !timeShow.value;
};
const timeShowText = computed(() => {
  return timeShow.value ? "选择日期" : "选择时间";
});
//为了computed能检测到变化所以绕着弯子改变
const setDateHour = (hour, multiIndex) => {
  if (!multiIndex) {
    let tmp = props.modelValue.shift();
    tmp?.setHours(hour);
    props.modelValue.unshift(tmp);
  } else {
    let tmp = props.modelValue.pop();
    tmp?.setHours(hour);
    props.modelValue.push(tmp);
  }
};
const setDateMinute = (minute, multiIndex) => {
  if (!multiIndex) {
    let tmp = props.modelValue.shift();
    tmp?.setMinutes(minute);
    props.modelValue.unshift(tmp);
  } else {
    let tmp = props.modelValue.pop();
    tmp?.setMinutes(minute);
    props.modelValue.push(tmp);
  }
};
//////////////当月显示有关///////////
const initMonth = (multiIndex: number) => {
  updateMonthArray(multiIndex);
  nextTick(() => {
    justSign(multiIndex);
  });
};
const iniBoth = () => {
  updateMonthArray(0);
  updateMonthArray(1);
  nextTick(() => {
    justSign(0);
    justSign(1);
  });
};
const justSign = (multiIndex: number) => {
  signHandle(multiIndex);
  selectHandle(multiIndex);
};
const signHandle = (multiIndex) => {
  let todaySignFlag = true;
  if (
    currentMonthCouple[multiIndex].value.getMonth() !==
    todayDate.value.getMonth()
  )
    todaySignFlag = false;
  monthDateCouple[multiIndex].value.forEach((value, index) => {
    if (
      props.type === "date" &&
      value.toDateString() === signDate.value.toDateString()
    ) {
      signDate.value = value;
      dayBlockCouple[multiIndex].value.childrenSignHandle(index);
    }
    if (
      todaySignFlag &&
      value.toDateString() === todayDate.value.toDateString()
    ) {
      dayBlockCouple[multiIndex].value.childrenTodayHandle(index);
      todaySignFlag = false;
    }
  });
};
const selectHandle = (multiIndex) => {
  if (!props.modelValue.length) {
    dayBlockCouple[multiIndex].value.childrenUnselectAllHandle();
  }

  let stringArr = props.modelValue.map((a) => a.toDateString());
  monthDateCouple[multiIndex].value.forEach((value, index) => {
    if (stringArr.indexOf(value.toDateString()) !== -1) {
      dayBlockCouple[multiIndex].value.childrenSelectHandle(index);
    }
  });
};

const updateMonthArray = (multiIndex) => {
  monthDateCouple[multiIndex].value = [];
  currentMonthCouple[multiIndex].value.setDate(1);
  let firstDate = getFirstDay(currentMonthCouple[multiIndex].value);
  let lastDate = getLastDay(currentMonthCouple[multiIndex].value);
  while (
    firstDate.getDate() !== lastDate.getDate() ||
    firstDate.getMonth() !== lastDate.getMonth()
  ) {
    monthDateCouple[multiIndex].value.push(cloneDate(firstDate));
    firstDate.setDate(firstDate.getDate() + 1);
  }
  monthDateCouple[multiIndex].value.push(lastDate);
  if (monthDateCouple[multiIndex].value.length !== 42) {
    for (let i = 0; i < 7; i++) {
      firstDate.setDate(firstDate.getDate() + 1);
      monthDateCouple[multiIndex].value.push(cloneDate(firstDate));
    }
  }
};

//根据日期获取日历显示的第一天（可能在上一个月，必然是星期天
const getFirstDay = (date: Date) => {
  let value = cloneDate(date);
  value.setDate(1);
  while (value.getDay()) {
    value.setDate(value.getDate() - 1);
  }

  return value;
};

//根据日期获取日历显示的最后一天（必然在下个月且为周六
const getLastDay = (date: Date) => {
  //直接从下个月第一天算起
  let value = cloneDate(date);
  value.setDate(1);
  value.setMonth(value.getMonth() + 1);
  while (value.getDay() !== 6) value.setDate(value.getDate() + 1);
  return value;
};

///////////////选择操作等控制////////////
//翻页
const yearTitleIndex = ref(currentMonth0.value.getFullYear());
const headSwitchHandle = (type: number) => {
  if (props.type === "date") {
    switch (type) {
      case 0:
        currentMonthCouple[0].value.setFullYear(
          currentMonthCouple[0].value.getFullYear() - 1
        );
        break;
      case 1:
        currentMonthCouple[0].value.setMonth(
          currentMonthCouple[0].value.getMonth() - 1
        );
        break;
      case 2:
        currentMonthCouple[0].value.setMonth(
          currentMonthCouple[0].value.getMonth() + 1
        );
        break;
      case 3:
        currentMonthCouple[0].value.setFullYear(
          currentMonthCouple[0].value.getFullYear() + 1
        );
        break;
    }
    initMonth(0);
  } else if (props.type === "daterange") {
    switch (type) {
      case 0:
        currentMonthCouple[0].value.setFullYear(
          currentMonthCouple[0].value.getFullYear() - 1
        );
        currentMonthCouple[1].value.setFullYear(
          currentMonthCouple[1].value.getFullYear() - 1
        );
        iniBoth();

        break;
      case 1:
        currentMonthCouple[0].value.setMonth(
          currentMonthCouple[0].value.getMonth() - 1
        );
        currentMonthCouple[1].value.setMonth(
          currentMonthCouple[1].value.getMonth() - 1
        );
        monthDateCouple[1].value = monthDateCouple[0].value;
        nextTick(() => {
          justSign(1);
        });
        initMonth(0);

        break;
      case 2:
        currentMonthCouple[0].value.setMonth(
          currentMonthCouple[0].value.getMonth() + 1
        );
        currentMonthCouple[1].value.setMonth(
          currentMonthCouple[1].value.getMonth() + 1
        );
        monthDateCouple[0].value = monthDateCouple[1].value;
        nextTick(() => {
          justSign(0);
        });
        initMonth(1);
        break;
      case 3:
        currentMonthCouple[0].value.setFullYear(
          currentMonthCouple[0].value.getFullYear() + 1
        );
        currentMonthCouple[1].value.setFullYear(
          currentMonthCouple[1].value.getFullYear() + 1
        );
        iniBoth();
        break;
    }
    nextTick(() => {
      rangeRepain();
    });
  } else {
    switch (type) {
      case 0:
        currentMonth0.value.setFullYear(currentMonth0.value.getFullYear() - 10);
        break;
      case 1:
        currentMonth0.value.setFullYear(currentMonth0.value.getFullYear() - 1);
        break;
      case 2:
        currentMonth0.value.setFullYear(currentMonth0.value.getFullYear() + 1);
        break;
      case 3:
        currentMonth0.value.setFullYear(currentMonth0.value.getFullYear() + 10);
        break;
    }
    let tmp = ref(cloneDate(currentMonth0.value));
    currentMonthCouple[0] = tmp;
    yearTitleIndex.value = currentMonth0.value.getFullYear();
    justSignYear();
  }
};
//顶层选择控制
const childrenClickTopHandle = (index, preState, multiIndex) => {
  if (!preState["isSelected"]) {
    //选择
    switch (props.type) {
      //日期选择
      case "date":
        if (props.multiple) {
          //日期多选-选择
          addDate(monthDateArray0.value[index]);
        } else {
          //日期单选-选择
          replaceDate(monthDateArray0.value[index]);
          dayBlock0.value.childrenUnselectAllHandle();
        }
        dayBlock0.value.childrenSelectHandle(index);
        monthDateArray0.value.forEach((value, _index) => {
          if (value.toDateString() === signDate.value.toDateString())
            dayBlock0.value.childrenUnsignHandle(_index);
        });
        dayBlock0.value.childrenSignHandle(index);
        signDate.value = monthDateArray0.value[index];
        break;

      //日期范围选择
      case "daterange":
        if (props.modelValue.length !== 1) {
          if (props.modelValue.length) {
            props.modelValue.length = 0;
            dayBlock0.value.childrenUnselectAllHandle();
            dayBlock1.value.childrenUnselectAllHandle();
            dayBlock0.value.childrenOutAllHandle();
            dayBlock1.value.childrenOutAllHandle();
          }
          //日期范围，选第一个
          addDate(monthDateCouple[multiIndex].value[index]);
          if (multiIndex) headSwitchHandle(2);
          //进入范围选择模式
          rangeMode.value = true;
        } else {
          //退出范围选择模式
          rangeMode.value = false;
          addDate(monthDateCouple[multiIndex].value[index]);
          if (props.modelValue[0] > props.modelValue[1]) {
            let tmp = props.modelValue[0];
            props.modelValue[0] = props.modelValue[1];
            props.modelValue[1] = tmp;
          }
        }
        dayBlockCouple[multiIndex].value.childrenSelectHandle(index);
    }
  } else {
    switch (props.type) {
      //日期选择-取消选择
      case "date":
        removeDate(monthDateArray0.value[index]);
        dayBlock0.value.childrenUnselectHandle(index);
    }
  }

  preState.monthMatch === -1 && headSwitchHandle(1);
  (preState.monthMatch === 1 || preState.monthMatch === -11) &&
    headSwitchHandle(2);
};
const addDate = (date: Date) => {
  props.modelValue.push(cloneDate(date));
};
const replaceDate = (date: Date) => {
  props.modelValue.length = 0;
  props.modelValue.push(cloneDate(date));
};
const removeDate = (date: Date) => {
  props.modelValue.splice(props.modelValue.indexOf(date), 1);
};
const clearDate = () => {
  props.modelValue.length = 0;
  justSign(0);
  if (props.type === "daterange") {
    justSign(1);
    dayBlock0.value.childrenOutAllHandle();
    dayBlock1.value.childrenOutAllHandle();
  }
  if (timeShow.value) switchTimeShow();
};

//////////////年/月选择器//////////////
const yearMonthBlock = ref(null);
const childrenClickYearMonthHandle = (index, preState) => {
  let date = cloneDate(currentMonth0.value);
  switch (props.type) {
    case "year":
      date.setFullYear(date.getFullYear() + index);
      break;
    case "month":
      date.setMonth(index);
      break;
    default:
      return;
  }
  if (props.multiple) {
    if (preState.isSelected) {
      removeYear(date);
      yearMonthBlock.value.childrenUnselectHandle(index);
    } else {
      addYear(date);
      yearMonthBlock.value.childrenSelectHandle(index);
    }
  } else {
    if (preState.isSelected) {
      clearYear();
      yearMonthBlock.value.childrenUnselectHandle(index);
    } else {
      replaceYear(date);
      yearMonthBlock.value.childrenUnselectAllHandle();
      yearMonthBlock.value.childrenSelectHandle(index);
    }
  }
  return;
};
const addYear = (date: Date) => {
  props.modelValue.push(date);
};
const replaceYear = (date: Date) => {
  props.modelValue.length = 0;
  props.modelValue.push(date);
};
const removeYear = (date: Date) => {
  props.modelValue.forEach((value, index) => {
    if (
      date.getFullYear() === value.getFullYear() &&
      (props.type === "year" || date.getMonth() === value.getMonth())
    ) {
      props.modelValue.splice(index, 1);
    }
  });
};
const clearYear = () => {
  props.modelValue.length = 0;
  yearMonthBlock.value.childrenUnselectAllHandle();
};
const justSignYear = () => {
  yearMonthBlock.value.childrenUnselectAllHandle();
  if (props.type === "year") {
    props.modelValue.forEach((value) => {
      let _index = value.getFullYear() - currentMonth0.value.getFullYear();
      if (_index >= 0 && _index < 10)
        yearMonthBlock.value.childrenSelectHandle(_index);
    });
  } else if (props.type === "month") {
    props.modelValue.forEach((value) => {
      if (value.getFullYear() === currentMonth0.value.getFullYear())
        yearMonthBlock.value.childrenSelectHandle(value.getMonth());
    });
  } else return;
};

defineExpose({
  childrenClickTopHandle,
  childrenClickYearMonthHandle,
});
onMounted(() => {
  boxStyle.value = "opacity:0;display:none";
});
</script>

<style lang="scss">
.ysyz-datePicker {
  z-index: 1000;
  position: relative;
  &-box {
    transition: all 0.2s;
    position: absolute;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0px 3px 3px #b2b2b27e;
    padding: 5px;
    .ysyz-datePickerPage-time {
      width: 95%;
      height: 80%;
      position: absolute;
      z-index: 1001;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      &-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        overflow-x: hidden;
        &-option {
          width: 100%;
          padding: 2px;
          text-align: center;
          cursor: pointer;
          color: $text;
          &:hover {
            color: $primary;
            background-color: #f5f5f5;
          }
        }
      }
    }
    .ysyz-datePickerPage-box {
      .ysyz-datePickerPage-header {
        border-bottom: 1px solid #eee;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding-bottom: 3px;
        &-left,
        &-right {
          .ysyz-datePickerPage-header-button {
            color: #aaa;
            display: inline-block;
            padding: 5px;
            cursor: pointer;
            &:hover {
              > span {
                border-left-color: $primary;
                border-top-color: $primary;
              }
            }
            > span {
              border: 1px solid transparent;
              border-left-color: #aaa;
              border-top-color: #aaa;
              display: inline-block;
              width: 5px;
              height: 5px;
            }
          }
        }
        &-right-jian {
          transform: rotate(135deg);
        }
        &-left-jian {
          transform: rotate(-45deg);
        }
        &-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $text;
        }
      }
      .ysyz-datePickerPage-body {
        display: flex;
        flex-wrap: nowrap;
        .ysyz-datePicker-dayBlock {
          width: 180px;
          padding: 5px;
          &-week {
            width: 23px;
            height: 23px;
          }
          .ysyz-datePickerPage-dayButton {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            transition: background-color 0.2s, border 0.2s;
            width: 23px;
            height: 23px;
            cursor: pointer;
            box-sizing: border-box;
            border: 1px solid transparent;
            color: $text;
            &:hover {
              background-color: lighten($primary, 35%);
            }
            &-today {
              &::after {
                content: "";
                transition: all 0.2s;
                position: absolute;
                background-color: $primary;
                width: 5px;
                height: 5px;
                right: 5px;
                top: 2px;
                border-radius: 50%;
              }
            }
            &-inrange {
              background-color: lighten($primary, 35%);
            }
            &-sign {
              border: 1px solid $primary;
            }
            &-select {
              background-color: $primary;
              color: white;
              &.ysyz-datePickerPage-dayButton-sign {
                &::after {
                  background-color: #fff;
                }
              }
            }
            &-notCurrentMonth {
              color: #ccc;
              &:hover {
                background-color: #fff;
              }
              &.ysyz-datePickerPage-dayButton-sign {
                border: 1px solid lighten($primary, 35%);
              }
              &.ysyz-datePickerPage-dayButton-inrange {
                background-color: #fafafa;
              }
              &.ysyz-datePickerPage-dayButton-select {
                background-color: lighten($primary, 35%);
                color: white;
                &:hover {
                  background-color: #eee;
                }
              }
            }
          }
        }
        .ysyz-datePicker-yearMonthBlock {
          width: 210px;
          padding: 5px;
          .ysyz-datePickerPage-yearButton {
            padding: 10px;
            margin: 2px;
            text-align: center;
            display: block;
            transition: background-color 0.2s, color 0.2s;
            cursor: pointer;
            color: $text;
            border-radius: 5px;
            &:hover {
              background-color: lighten($primary, 35%);
            }
            &-select {
              background-color: $primary;
              color: #fff;
            }
          }
        }
      }
    }
    .ysyz-datePickerPage-footer {
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      padding-top: 5px;
      button {
        padding: 5px;
        > span {
          height: auto;
          line-height: 1;
        }
      }
    }
  }
}
</style>
