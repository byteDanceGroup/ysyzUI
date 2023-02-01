<template>
  <div class="container">
    <div class="menu" style="border-bottom: 1px solid #eee">
      <ysyz-menu width="800px" default-active="1" mode="horizontal">
        <ysyz-menuItem name="1">个人中心</ysyz-menuItem>
        <ysyz-menuItem name="2">资料修改</ysyz-menuItem>
        <ysyz-menuItem name="3">收藏</ysyz-menuItem>
        <ysyz-submenu title="资源索引" name="4">
          <ysyz-menuGroup title="影视类">
            <ysyz-menuItem name="4-1">电视剧资源</ysyz-menuItem>
            <ysyz-menuItem name="4-2">电影资源</ysyz-menuItem>
            <ysyz-menuItem name="4-3">动画资源</ysyz-menuItem>
          </ysyz-menuGroup>
          <ysyz-menuGroup title="图像类">
            <ysyz-menuItem name="4-4">漫画/连环画</ysyz-menuItem>
          </ysyz-menuGroup>
        </ysyz-submenu>
        <ysyz-submenu title="其他功能" name="5">
          <ysyz-menuItem name="5-1">上传资源</ysyz-menuItem>
          <ysyz-menuItem name="5-2">申请成为管理员</ysyz-menuItem>
        </ysyz-submenu>
      </ysyz-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
