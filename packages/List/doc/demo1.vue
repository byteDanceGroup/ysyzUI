<template>
  <div>
    <strong>默认尺寸:</strong>
    <br /><br />
    <ysyz-list border header="Header">
      <ysyz-listItem>测试内容</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <template #footer> 这里是footer </template>
    </ysyz-list>
    <br />
    <strong>小尺寸:</strong>
    <br /><br />
    <ysyz-list border size="small">
      <template #header>
        <ysyz-icon type="success"></ysyz-icon>
        这里是小List
      </template>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>12</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
    </ysyz-list>
    <br />
    <strong>大尺寸:</strong>
    <br /><br />
    <ysyz-list border size="large" header="这里是大List">
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>123</ysyz-listItem>
    </ysyz-list>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>