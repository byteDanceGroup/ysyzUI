<template>
  <div>
    <ysyz-list border :split="false">
        <template #header>
            1
        </template>
      <ysyz-listItem>这里是header这里是header这里是header这里是header这里是header这里是header这里是header这里是header这里是header</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <ysyz-listItem>1</ysyz-listItem>
      <template #footer>
            这里是footer
        </template>
    </ysyz-list>
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
    <ysyz-list border size="large">
      <template #header>
            <ysyz-icon type="success"></ysyz-icon>
            这里是大List
        </template>
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