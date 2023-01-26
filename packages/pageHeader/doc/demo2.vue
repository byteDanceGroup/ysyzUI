<template>
  <div class="container">
    <ysyz-pageHeader
      logo="https://dev-file.iviewui.com/JOnz0JBVu2THgnWq9ru5u5m85gCxzskw/large"
      title="文章审核"
      :back="true"
      @on-back="testBack"
    >
      <template #breadcrumb> 面包屑 </template>
      <template #action>
        <ysyz-button>测试</ysyz-button>
        <ysyz-button type="success">通过</ysyz-button>
        <ysyz-button type="error">驳回</ysyz-button>
      </template>
      <template #content>
        <div>
          <ysyz-descriptionList col="2">
            <ysyz-description term="文章标题：">
              关于人行道的思考
            </ysyz-description>
            <ysyz-description term="作者："> 张三 </ysyz-description>
            <ysyz-description term="发表日期："> 2021-12-19 </ysyz-description>
            <ysyz-description term="专栏："> 哲思类 </ysyz-description>
            <ysyz-description term="责编："> 李四 </ysyz-description>
            <ysyz-description term="字数："> 1927 </ysyz-description>
          </ysyz-descriptionList>
        </div>
      </template>
      <template #extra>
        <b style="font-size: 200%">待审核</b>
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
