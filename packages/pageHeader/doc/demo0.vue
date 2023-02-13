<template>
  <div style="width: 100%" class="page">
    <h1>PageHeader 页头</h1>
    <h2>概述</h2>
    页头组件常放置在页面顶端，用于展示当前页面主体信息（如图标、标题等），并承载与当前页相关的操作（如面包屑导航、操作等）。
    <h2>代码实例</h2>
    <ysyz-card dis-hover>
      <demo1 />
      <ysyz-divider content-position="left">基本用法</ysyz-divider>

      <p>
        页头主要由<span>标题title</span>、<span>图标logo</span>、<span>操作action</span>、<span>内容content</span>、
        <span>附加信息extra</span
        >、<span>面包屑</span>构成，其中<span>title</span>、<span>logo</span>、<span>content</span>可通过<span>props</span>参数或同名插槽设置内容。
        <br />其余可使用同名插槽进行内容设置。调整窗口大小可响应式变化（设置<span>res</span>参数可阻止响应）。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="pageHeader" demo-name="demo1" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo2></demo2>
      <ysyz-divider content-position="left">返回按钮</ysyz-divider>
      <p>
        设置<span>back</span>为<span>true</span>或自定义同名插槽，可添加返回按钮。事件触发详见API。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="pageHeader" demo-name="demo2" />
    </ysyz-card>

    <ysyz-card dis-hover>
      <demo3></demo3>
      <ysyz-divider content-position="left">简洁表头</ysyz-divider>
      <p>
        弃用部分插槽以设置更加简洁的页头。
        <br />当弃用action且使用extra时，extra的垂直位置会上移以顶替action留下的空缺。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="pageHeader" demo-name="demo3" />
    </ysyz-card>

    <h2>API</h2>
    <h3>PageHeader Props</h3>
    <ysyz-table :columns="props" :data="propsdata"></ysyz-table>
    <h3>PageHeader Events</h3>
    <ysyz-table :columns="events" :data="eventsdata"></ysyz-table>
  </div>
</template>

<script lang="ts" setup>
import demo1 from "./demo1.vue";
import preview from "../../../src/components/preview.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
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
    introduction: "页头标题，亦可在插槽中设置自定义显示内容",
    type: "String",
    default: "-",
  },
  {
    name: "content",
    introduction: "内容文本，亦可在插槽中设置自定义显示内容",
    type: "String",
    default: "-",
  },
  {
    name: "logo",
    introduction: "logo图片链接，亦可在插槽中设置自定义显示内容",
    type: "String",
    default: "-",
  },
  {
    name: "extra",
    introduction: "额外显示的内容，亦可在插槽中设置自定义显示内容",
    type: "String",
    default: "-",
  },
  {
    name: "back",
    introduction: "是否显示返回按钮，亦可在插槽中设置自定义显示内容",
    type: "Boolean",
    default: "false",
  },
  {
    name: "res",
    introduction: "是否允许响应式变化",
    type: "Boolean",
    default: "true",
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
    event: "on-back",
    introduction: "点击默认的返回按钮时触发",
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
