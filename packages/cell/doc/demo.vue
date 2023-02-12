<template>
<ysyz-card>
  <ysyz-cell-group>
    <ysyz-cell to="button">点击跳转到Button</ysyz-cell>
    <ysyz-cell disabled>该项禁用</ysyz-cell>
    <ysyz-cell selected>选中项目</ysyz-cell>
  </ysyz-cell-group>
</ysyz-card>
</template>

<script>


export default {
    name: "demo",
}
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
