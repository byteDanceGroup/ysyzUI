<template>
  <h1>GlobalFooter 全局页脚</h1>
  <h2>概述</h2>
  <p>全局页脚常居中位于页面最底部，承载版权等信息。</p>
  <h2>代码示例</h2>
  <ysyz-card dis-hover>
    <demo1></demo1>
    <ysyz-divider content-position="left">基本用法</ysyz-divider>
    <p>基本用法。</p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="GlobalFooter" demo-name="demo1" />
  </ysyz-card>

  <h2>API</h2>
    <h3>Card Props</h3>
    <ysyz-table :columns="props" :data="footerProps"></ysyz-table>
    
    <h3>Card Slots</h3>
    <ysyz-table :columns="props" :data="linksProps"></ysyz-table>
    <h3>Card Slots</h3>
    <ysyz-table :columns="slots" :data="footSlot"></ysyz-table>
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
const footerProps = [
  {
    name: "links",
    introduction: "链接数据，各项内容见下表",
    type: "Array",
    default: "[]",
  },
  {
    name: "copyright",
    introduction: "版权信息",
    type: "String",
    default: "-",
  },
];
const linksProps = [
  {
    name: "href",
    introduction: "链接地址",
    type: "String",
    default: "-",
  },
  {
    name: "blank-target",
    introduction: "是否新窗口打开",
    type: "Boolean",
    default: "false",
  },
  {
    name: "key",
    introduction: "指定 key",
    type: "String",
    default: "-",
  },
  {
    name: "title",
    introduction: "内容",
    type: "String",
    default: "-",
  },
  {
    name: "icon",
    introduction: "图标type",
    type: "String",
    default: "-",
  },
];
const footSlot = [
  {
    name: "links",
    introduction: "自定义链接区域",
  },
  {
    name: "copyright",
    introduction: "自定义版权内容",
  },
];
</script>

<style scoped>
</style>