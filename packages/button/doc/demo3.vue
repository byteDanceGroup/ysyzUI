<template>
  <div class="container">
    <ysyz-button :disabled="true">Default</ysyz-button>
    <ysyz-button :disabled="true" type="primary">Primary</ysyz-button>
    <ysyz-button :disabled="true" type="dashed">Dashed</ysyz-button>
    <ysyz-button :disabled="true" type="text">Text</ysyz-button>
    <ysyz-button :disabled="true" type="info">Info</ysyz-button>
    <ysyz-button :disabled="true" type="success">Success</ysyz-button>
    <ysyz-button :disabled="true" type="warning">Warning</ysyz-button>
    <ysyz-button :disabled="true" type="error">Error</ysyz-button>
    <ysyz-button :disabled="true" color="#ff6682">自定义-黑模式</ysyz-button>
    <ysyz-button :disabled="true" color="rgb(130,124,217)" :whiteMode="true"
      >自定义-白模式</ysyz-button
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
