<template>
  <div style="width: 100%" class="page">
    <h1>DescriptionList 描述列表</h1>
    <h2>概述</h2>
    成组展示多个只读字段，常见于详情页的信息展示。
    <h2>代码实例</h2>
    <ysyz-card dis-hover>
      <demo1 />
      <ysyz-divider content-position="left">基本用法</ysyz-divider>

      <p>
        对于整个描述列表，可用参数title或同名插槽填写列表标题。<br />
        对于单个描述，可用参数term或同名插槽填写描述标题。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="descriptionList" demo-name="demo1" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo2></demo2>
      <ysyz-divider content-position="left">展示设置</ysyz-divider>
      <p>
        设置描述列表的layout为<span>vertical</span>可令描述的标题和内容垂直显示。<br />
        设置gutter可调整描述之间的横向间距。<br />
        设置col属性可调整单行可显示的最大列数（最大为4）。<br />
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="descriptionList" demo-name="demo2" />
    </ysyz-card>

    <h2>API</h2>
    <h3>DescriptionList Props</h3>
    <ysyz-table :columns="props" :data="propsdata"></ysyz-table>
    <h3>响应规则</h3>
    <ysyz-table :columns="rules" :data="rulesdata"></ysyz-table>
  </div>
</template>

<script setup lang="ts">
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
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
    name: "title",
    introduction: "描述列表的标题，亦可在插槽中设置",
    type: "String",
    default: "-",
  },
  {
    name: "col",
    introduction: "描述列表一行允许显示的最大列数，可选值为1、2、3、4",
    type: "Number | String",
    default: "3",
  },
  {
    name: "gutter",
    introduction: "描述之间的水平间距，单位为px",
    type: "Number",
    default: "32",
  },
  {
    name: "layout",
    introduction: "布局方式，可选值为 horizontal 或 vertical",
    type: "String",
    default: "horizontal",
  },
];
const rules = [
  { title: "窗口宽度", key: "width" },
  {
    title: "展示列数",
    key: "col",
  },
];
const rulesdata = [
  {
    width: "≥768px",
    col: "col",
  },
  {
    width: "≥576px",
    col: "col < 2 ? col : 2",
  },
  {
    width: "<576px",
    col: "1",
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
