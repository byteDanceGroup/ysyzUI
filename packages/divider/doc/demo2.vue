<template>
    <div class="container">
        <ysyz-button ghost>测试</ysyz-button>
    <ysyz-button ghost>Defalut</ysyz-button>
    <ysyz-button type="primary" ghost>Primary</ysyz-button>
    <ysyz-button type="dashed" ghost>Dashed</ysyz-button>
    <ysyz-button type="text" ghost>Text</ysyz-button>
    <ysyz-button type="info" ghost>Info</ysyz-button>
    <ysyz-button type="success" ghost>Success</ysyz-button>
    <ysyz-button type="warning" ghost>Warning</ysyz-button>
    <ysyz-button type="error" ghost>Error</ysyz-button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container{
    padding: 10px 0 10px 10px;
    width: 400px;
    height: auto;
    background-color: #bec8c8;
}
</style>