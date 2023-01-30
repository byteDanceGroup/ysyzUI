<template>
  <div class="container">
    <ysyz-pageHeader title="文章审核">
      <template #breadcrumb> 面包屑 </template>
      <template #content>
        页头组件常放置在页面顶端，用于展示当前页面主体信息（如图标、标题等），并承载与当前页相关的操作（如面包屑导航、操作等）。
      </template>
      <template #extra>
        <img
          src="https://dev-file.iviewui.com/JbX29pq5Cm0nThpfnD1dYEsXvVIqWIxh/large"
          alt=""
          style="width: 200px; border-radius: 10px"
        />
      </template>
    </ysyz-pageHeader>
  </div>
</template>

<script setup lang="ts">
const testBack = () => {
  alert("back");
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px;
  border: 1px solid #eee;
  width: 80%;
}
</style>
