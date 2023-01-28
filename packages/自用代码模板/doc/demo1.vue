<template>
  <div class="container">
    <ysyz-button @click="test">测试</ysyz-button>
  </div>
</template>

<script setup lang="ts">
import { app } from "@/main";
const test = () => {
  app.config.globalProperties.$loading.fuck();
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
