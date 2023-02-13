<template>
  <div style="width: 100%" class="page">
    <h1>LoadingBar 进度条</h1>
    <h2>概述</h2>
    全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
    <br />全局使用同一个进度条，通过全局方法对其进行操作。
    <br />在无法获得精确进度的情况下，进度条会模拟加载过程，调用全局方法可使其切换至完成或出错的状态。
    <br />
    <h2>代码示例</h2>
    <ysyz-card dis-hover>
      <demo1 />
      <ysyz-divider content-position="left">基本用法</ysyz-divider>

      <p>
        调用 <span>$loading.start</span> 可模拟进度，到达85%处停止。 <br />调用
        <span>$loading.finish</span> 可使进度条完成并隐藏。 <br />调用
        <span>$loading.error</span> 可使进度条显示出错并隐藏。 <br />调用
        <span>$loading.update</span>
        并传入一个介于0-100的值，可使进度条滚至对应百分比并暂停，用于精确进度。
        <br />调用
        <span>$loading.config</span>
        并传入有关颜色参数可修改进度条的加载或出错颜色，详细参数见后。
        <br />调用
        <span>$loading.destroy</span>
        会销毁当前的进度条。在下次调用其余方法时，会再度生成进度条。
        <br />需要注意的是，您可能需要在main.ts中暴露app，以调用全局函数。
      </p>
      <ysyz-divider lineType="dashed"></ysyz-divider>
      <preview comp-name="loadingBar" demo-name="demo1" />
    </ysyz-card>
    <h2>API</h2>
    <h3>全局方法</h3>
    <ysyz-table :columns="methods" :data="methodsdata"></ysyz-table>
    <h3>配置参数有效属性</h3>
    <ysyz-table :columns="config" :data="configdata"></ysyz-table>
  </div>
</template>

<script setup lang="ts">
import demo1 from "./demo1.vue";
import preview from "../../../src/components/preview.vue";
const methods = [
  {
    title: "方法",
    key: "method",
  },
  {
    title: "说明",
    key: "introduction",
  },
  {
    title: "参数类型",
    key: "type",
  },
  {
    title: "参数说明",
    key: "typeIntro",
  },
];
const methodsdata = [
  {
    method: "$loading.start",
    introduction: "模拟进度，到达85%处停止",
    type: "-",
    typeIntro: "-",
  },
  {
    method: "$loading.finish",
    introduction: "使进度条完成并隐藏",
    type: "-",
    typeIntro: "-",
  },
  {
    method: "$loading.error",
    introduction: "使进度条显示出错并隐藏",
    type: "-",
    typeIntro: "-",
  },
  {
    method: "$loading.update",
    introduction: "令进度条显示精确的值",
    type: "Number",
    typeIntro: "参数必须大于0、小于100",
  },
  {
    method: "$loading.config",
    introduction: "配置进度条的颜色",
    type: "Object",
    typeIntro: "有效参数见后",
  },
  {
    method: "$loading.destroy",
    introduction: "销毁当前的进度条。在下次调用其余方法时，会再度生成进度条",
    type: "-",
    typeIntro: "-",
  },
];

const config = [
  {
    title: "属性名",
    key: "name",
  },
  {
    title: "说明",
    key: "introduction",
  },
];
const configdata = [
  {
    name: "color",
    introduction: "基础颜色，支持10进制和16进制，如 rgb(12,200,133) 和 #9116ff",
  },
  {
    name: "errorColor",
    introduction: "进度条出错颜色，支持格式同上",
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
