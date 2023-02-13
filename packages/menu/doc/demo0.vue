<template>
  <div style="width: 100%" class="page">
    <h1>Menu 菜单</h1>
    <h2>概述</h2>
    为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
    <h2>代码示例</h2>
    <ysyz-card dis-hover>
      <demo2 />
      <ysyz-divider content-position="left">横向菜单</ysyz-divider>

      <p>
        使用于网页顶部时，需要令参数 <span>mode</span> 为
        <span>horizontal</span> 。 <br />规定
        <span>width</span> 可令菜单根据此大小填充宽度， <br />传入
        <span>default-active</span> 可选定默认激活的菜单项。 <br />使用选项组
        <span>menuGroup</span> 对选项进行简单分类。 <br />使用
        <span>submenu</span> 设置子菜单。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="menu" demo-name="demo2" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo1 />
      <ysyz-divider content-position="left">垂直菜单</ysyz-divider>
      <p>
        菜单未设置 <span>mode</span> 时，默认展示垂直左侧菜单， <br />除
        <span>default-active</span> 外，设置
        <span>default-active</span> 可规定默认状态展开的一系列折叠菜单。
        <br />置参数 <span>accordion</span> 为
        <span>true</span>
        可进入手风琴模式，此时同级子菜单最多展开一个。（展开上方两个案例感受区别）
        <br />垂直状态仍然可以通过参数 <span>width</span> 设定宽度。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="menu" demo-name="demo1" />
    </ysyz-card>

    <h2>API</h2>
    <h3>Menu Props</h3>
    <ysyz-table :columns="props" :data="menuPropsData"></ysyz-table>
    <h3>Menu Events</h3>
    <ysyz-table :columns="events" :data="menuEventsData"></ysyz-table>
    <h3>MenuItem Props</h3>
    <ysyz-table :columns="props" :data="itemPropsData"></ysyz-table>
    <h3>Submenu Props</h3>
    <ysyz-table :columns="props" :data="subPropsData"></ysyz-table>
    <h3>MenuGroup Props</h3>
    <ysyz-table :columns="props" :data="groupPropsData"></ysyz-table>
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
const menuPropsData = [
  {
    name: "mode",
    introduction: " 菜单布局类型，可选值：horizontal 、 vertical",
    type: "String",
    default: "vertical",
  },
  {
    name: "accordion",
    introduction:
      "是否启用手风琴模式。启用后同级子菜单最多展开一个，仅在垂直模式有效。",
    type: "Boolean",
    default: "false",
  },
  {
    name: "gutter",
    introduction: "描述之间的水平间距，单位为px",
    type: "Number",
    default: "32",
  },
  {
    name: "default-active",
    introduction: "默认选中的选项的name",
    type: "String",
    default: "-",
  },
  {
    name: "default-open",
    introduction: "默认展开的子菜单的name形成的数组，仅在垂直模式有效。",
    type: "String",
    default: "-",
  },
  {
    name: "to-auto",
    introduction:
      "是否启用自动填充路由。启用后，选项已有跳转设置时，按照选项设置的内容进行跳转。其余未单独设置的选项在激活后会以push形式跳转至同名路由。",
    type: "Boolean",
    default: "false",
  },
  {
    name: "replace-auto",
    introduction: "与上一项类似，默认的跳转方式为replace",
    type: "Boolean",
    default: "false",
  },
  {
    name: "width",
    introduction: "菜单的宽度",
    type: "String",
    default: "-",
  },
];
const itemPropsData = [
  {
    name: "name",
    introduction: "菜单选项的唯一标识，必填",
    type: "String",
    default: "-",
  },
  {
    name: "to",
    introduction: "路由跳转的vue-router对象，方式默认为push",
    type: "Object",
    default: "-",
  },
  {
    name: "replace",
    introduction: "是否将路由跳转方式置为replace",
    type: "Boolean",
    default: "false",
  },
  {
    name: "target",
    introduction: "同a标签的target，跳转链接",
    type: "String",
    default: "-",
  },
];
const subPropsData = [
  {
    name: "name",
    introduction: "子菜单的唯一标识，必填",
    type: "String",
    default: "-",
  },
  {
    name: "title",
    introduction: "子菜单的标题",
    type: "String",
    default: "-",
  },
];
const groupPropsData = [
  {
    name: "title",
    introduction: "选项组的标题",
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
const menuEventsData = [
  {
    event: "on-select",
    introduction: "有选项被激活时触发",
    return: "被激活选项的name",
  },
  {
    event: "on-open-change",
    introduction: "有子菜单被展开时触发",
    return: "被展开的子菜单的name",
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
