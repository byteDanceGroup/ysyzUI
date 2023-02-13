<template>
  <h1>Page 分页</h1>
  <h2>概述</h2>
  <p>当数据量较多时，使用分页可以快速进行数据切换。</p>
  <h2>代码示例</h2>
  <ysyz-card dis-hover>
    <demo1></demo1>
    <ysyz-divider content-position="left">基本</ysyz-divider>
    <p>基本的分页，页数过多时会自动折叠。</p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="page" demo-name="demo1" />
  </ysyz-card>

  <ysyz-card dis-hover>
    <demo2></demo2>
    <ysyz-divider content-position="left">电梯</ysyz-divider>
    <p>快速跳转到某一页。</p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="page" demo-name="demo2" />
  </ysyz-card>
    
  <ysyz-card dis-hover>
    <demo2></demo2>
    <ysyz-divider content-position="left">绑定事件</ysyz-divider>
    <p>使用@on-change、@on-prev、@on-next等绑定event事件可以触发对应的事件内容。</p>
    <ysyz-divider lineType="dashed"></ysyz-divider>
    <preview comp-name="page" demo-name="demo3" />
  </ysyz-card>

  <h2>API</h2>
  <h3>Page Props</h3>
  <ysyz-table :columns="props" :data="pageProps"></ysyz-table>

  <h3>Page Events</h3>
  <ysyz-table :columns="event" :data="pageEvents"></ysyz-table>
  <h3>Page Slots</h3>
  <ysyz-table :columns="slots" :data="pageSlots"></ysyz-table>
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
const event=[
    {
        title:'事件名',
        key:'name'
    },
    {
        title:'说明',
        key:'introduction'
    },
    {
        title:'返回值',
        key:'value'
    },
]
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
const pageProps=[
{
    name: "model-value",
    introduction: "当前页码, 可以使用 v-model来进行双向绑定",
    type: "	Number",
    default: "1",
  },
  {
    name: "total",
    introduction: "数据总数",
    type: "Number",
    default: "0",
  },
  {
    name: "page-size",
    introduction: "每页条数",
    type: "Number",
    default: "10",
  },
  {
    name: "show-elevator",
    introduction: "显示电梯，可以快速切换到某一页",
    type: "Boolean",
    default: "false",
  },
  {
    name: "disabled",
    introduction: "是否禁用",
    type: "Boolean",
    default: "false",
  },
]
const pageEvents=[
{
    name: "on-change",
    introduction: "页码改变的回调，返回改变后的页码",
    value: "page",
  },
  {
    name: "on-page-size-change",
    introduction: "切换每页条数时的回调，返回切换后的每页条数",
    value: "page-size",
  },
  {
    name: "on-prev",
    introduction: "切换上一页时触发，返回切换后的页码",
    value: "page",
  },
  {
    name: "on-next",
    introduction: "切换下一页时触发，返回切换后的页码",
    value: "page",
  },
]
const pageSlots=[
    {
        name:'无',
        introduction:'	自定义显示总数的内容'
    }
]
</script>

<style scoped>
</style>