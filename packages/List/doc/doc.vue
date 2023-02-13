<template>
  <h1>List 列表</h1>
  <h2>概述</h2>
  <p>
    最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
  </p>
  <h2>代码示例</h2>

  <ysyz-card dis-hover>
    <demo1></demo1>
    <ysyz-divider content-position="left">基础列表</ysyz-divider>
    <p>带有图标、标题、描述的基础列表。</p>

    <p>也可以带有列表操作组。</p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="List" demo-name="demo1" />
  </ysyz-card>
  <h2>API</h2>
  <h3>List Props</h3>
  <ysyz-table :columns="props" :data="listProps"></ysyz-table>

  <h3>List Slots</h3>
  <ysyz-table :columns="slots" :data="listSlots"></ysyz-table>
  <h3>ListItem Slots</h3>
  <ysyz-table :columns="slots" :data="listItemSlots"></ysyz-table>
</template>

<script setup lang="ts">
import demo1 from "./demo1.vue";
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
const slots = [
  {
    title: "名称",
    key: "name",
  },
  {
    title: "说明",
    key: "introduction",
  },
];
const listProps = [
  {
    name: "border",
    introduction: "是否显示边框",
    type: "Boolean",
    default: "false",
  },
  {
    name: "item-layout",
    introduction:
      "设置 ListItem 布局, 可选值为 horizontal（横排）或 vertical（竖直）",
    type: "String",
    default: "horizontal",
  },
  {
    name: "header",
    introduction: "列表头部",
    type: "String",
    default: "-",
  },
  {
    name: "footer",
    introduction: "链接数据，各项内容见下表",
    type: "String",
    default: "-",
  },
  {
    name: "size",
    introduction: "列表尺寸，可选值为 small、large、default",
    type: "String",
    default: "default",
  },
  {
    name: "split",
    introduction: "是否展示分割线",
    type: "Boolean",
    default: "true",
  },
];
const listSlots = [
  {
    name: "header",
    introduction: "自定义列表头部",
  },
  {
    name: "footer",
    introduction: "自定义列表底部",
  },
];
const listItemSlots = [
  {
    name: "action",
    introduction: "列表操作组，根据 item-layout 的不同, 位置在卡片底部或者最右侧",
  },
  {
    name: "extra",
    introduction: "额外内容, 通常用在 item-layout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧",
  },
];
</script>

<style scoped>
</style>