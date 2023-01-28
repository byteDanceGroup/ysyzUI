<template>
  <div class="container">
    <ysyz-button @click="start">开始</ysyz-button>
    <ysyz-button @click="randomUpdate" type="primary">更新到随机数</ysyz-button>
    <ysyz-button @click="finish" type="success">完成</ysyz-button>
    <ysyz-button @click="error" type="error">出错</ysyz-button>
    <br />
    <ysyz-button @click="config" type="info">修改颜色</ysyz-button>
    <ysyz-button @click="destroy" type="warning">销毁</ysyz-button>
  </div>
</template>

<script setup lang="ts">
import { app } from "../../../src/main";
const randomUpdate = () => {
  app.config.globalProperties.$loading.update(Math.random() * 100);
};
const start = () => {
  app.config.globalProperties.$loading.start();
};
const finish = () => {
  app.config.globalProperties.$loading.finish();
};
const error = () => {
  app.config.globalProperties.$loading.error();
};
const config = () => {
  app.config.globalProperties.$loading.config({
    color: "#67C23A",
    errorColor: "#f90",
  });
};
const destroy = () => {
  app.config.globalProperties.$loading.destroy();
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
