<template>
  <div class="container">
        <ysyz-button>Default</ysyz-button>
        <ysyz-button type="primary">Primary</ysyz-button>
        <ysyz-button type="dashed">Dashed</ysyz-button>
        <ysyz-button type="text">Text</ysyz-button>
        <ysyz-button type="info">Info</ysyz-button>
        <ysyz-button type="success">Success</ysyz-button>
        <ysyz-button type="warning">Warning</ysyz-button>
        <ysyz-button type="error">Error</ysyz-button>
        <ysyz-button color="#ff6682">自定义-黑模式</ysyz-button>
        <ysyz-button color="rgb(130,124,217)" :whiteMode="true"
          >自定义-白模式</ysyz-button>
        <ysyz-button color="#ff66">错误的颜色</ysyz-button>
      </div>
     
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
