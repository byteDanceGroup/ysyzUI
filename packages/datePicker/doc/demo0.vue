<template>
  <div style="width: 100%" class="page">
    <h1>DatePicker 日期选择器</h1>
    <h2>概述</h2>
    选择日期，支持年、月、日期等类型，支持选择范围。
    <h2>代码实例</h2>
    <ysyz-card dis-hover>
      <demo1 />
      <ysyz-divider content-position="left">基本用法</ysyz-divider>

      <p>
        为组件绑定一个Array&lt;Date&gt;变量，以接收用户选择的日期。
        <br />设定type为daterange则可以选择日期范围。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="datePicker" demo-name="demo1" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo2 />
      <ysyz-divider content-position="left">拓展用法</ysyz-divider>

      <p>
        设置multiple为true可多选（daterange暂不支持多选），
        <br />若选择器为日期单选或日期范围，设置time为true可选择时间（现目前仅支持设置时分），
        <br />设置format可对输入框展示的时间进行格式化。
        <br />设置startDate可指定选择器起始的日期位置。
        <br />设置footer为true可为选择器附上底部按钮。在time为true的情况下，footer必然为true。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="datePicker" demo-name="demo2" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo3 />
      <ysyz-divider content-position="left">年月选择器</ysyz-divider>

      <p>
        设置type为year、month则分别选择年、月。
        <br />年月选择器均支持多选，但不支持设置时间。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="datePicker" demo-name="demo3" />
    </ysyz-card>
    <h2>API</h2>
    <h3>DatePicker Props</h3>
    <ysyz-table :columns="props" :data="propsdata"></ysyz-table>
    <h3>DatePicker Events</h3>
    <ysyz-table :columns="events" :data="eventsdata"></ysyz-table>
  </div>
</template>

<script lang="ts" setup>
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
import preview from "../../../src/components/preview.vue";
const props = [
  { title: "参数名", key: "name" },
  {
    title: "说明",
    key: "introduction",
  },
  {
    title: "类型",
    key: "type",
  },
  {
    title: "默认值",
    key: "default",
  },
];
const propsdata = [
  {
    name: "startDate",
    introduction: "选择器起始时间",
    type: "Date",
    default: "当前时间",
  },
  {
    name: "modelValue",
    introduction: "必填，绑定的v-model，日期选择器最终改变的数据",
    type: "Array<Date>",
    default: "-",
  },
  {
    name: "type",
    introduction: "选择器的类型",
    type: "String",
    default: "date",
  },
  {
    name: "multiple",
    introduction: "是否开启多选，type为daterange时无效",
    type: "Boolean",
    default: "false",
  },
  {
    name: "time",
    introduction: "是否开启选择时间，仅在日期单选或日期范围选择有效",
    type: "Boolean",
    default: "false",
  },
  {
    name: "footer",
    introduction: "是否显示尾部选项，time开启时必然为true",
    type: "Boolean",
    default: "false",
  },
  {
    name: "format",
    introduction: "显示日期格式化",
    type: "String",
    default: "-",
  },
];
const events = [
  { title: "事件", key: "event" },
  {
    title: "说明",
    key: "introduction",
  },
  {
    title: "返回参数",
    key: "return",
  },
];
const eventsdata = [
  {
    event: "on-change",
    introduction: "绑定的日期数组发生改变时触发",
    return: "-",
  },
  {
    event: "on-open",
    introduction: "开启日期选择器时触发",
    return: "-",
  },
  {
    event: "on-close",
    introduction: "关闭日期选择器时触发",
    return: "-",
  },
  {
    event: "on-ok",
    introduction: "按下确认键时触发",
    return: "-",
  },
  {
    event: "on-clear",
    introduction: "按下清空键时触发",
    return: "-",
  },
];
</script>

<style lang="scss" scoped>
.ysyz-table {
  width: 90%;
}
.ysyz-card {
  margin-bottom: 30px;
}
</style>
