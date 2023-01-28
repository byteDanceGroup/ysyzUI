<template>
  <div class="container">
    <ysyz-pageHeader>
      <template #breadcrumb> 面包屑 </template>
      <template #logo>
        <span style="background-color: #2db7f5">Logo</span>
      </template>
      <template #title>
        <span style="background-color: #2d8cf0">Title</span>
      </template>
      <template #action>
        <span style="background-color: #2db7f5">Action</span>
      </template>
      <template #content>
        <span style="background-color: #2db7f5">Content</span>
      </template>
      <template #extra>
        <span style="background-color: #2db7f5">Extra</span>
      </template>
    </ysyz-pageHeader>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding: 10px;
  width: 80%;
  border: 1px solid #eee;
  span {
    width: 100%;
    display: inline-block;
    padding: 3px;
  }
}
</style>
