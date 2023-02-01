<template>
  <div
    class="container"
    style="display: flex; width: 800px; justify-content: space-around"
  >
    <ysyz-menu
      default-active="5-1-2"
      :default-open="['5', '5-1']"
      :accordion="true"
    >
      <ysyz-menuItem name="1">个人中心</ysyz-menuItem>
      <ysyz-menuItem name="2">管理中心</ysyz-menuItem>
      <ysyz-menuItem name="3">申诉处理</ysyz-menuItem>
      <ysyz-submenu title="账目管理" name="4">
        <ysyz-menuGroup title="查询">
          <ysyz-menuItem name="4-1">账目明细</ysyz-menuItem>
          <ysyz-menuItem name="4-2">查找账本</ysyz-menuItem>
        </ysyz-menuGroup>
        <ysyz-menuGroup title="操作">
          <ysyz-menuItem name="4-3">发起申诉</ysyz-menuItem></ysyz-menuGroup
        >
      </ysyz-submenu>
      <ysyz-submenu title="其他功能" name="5">
        <ysyz-submenu title="菜品管理" name="5-1">
          <ysyz-menuItem name="5-1-1">添加菜品</ysyz-menuItem>
          <ysyz-menuItem name="5-1-2">修改菜品</ysyz-menuItem>
        </ysyz-submenu>
        <ysyz-submenu title="人员管理" name="5-2">
          <ysyz-menuItem name="5-2-1">员工查询</ysyz-menuItem>
        </ysyz-submenu>
        <ysyz-menuItem name="5-3">后台管理</ysyz-menuItem>
      </ysyz-submenu>
    </ysyz-menu>

    <ysyz-menu default-active="5-1-2" :default-open="['5', '5-1']">
      <ysyz-menuItem name="1">个人中心</ysyz-menuItem>
      <ysyz-menuItem name="2">管理中心</ysyz-menuItem>
      <ysyz-menuItem name="3">申诉处理</ysyz-menuItem>
      <ysyz-submenu title="账目管理" name="4">
        <ysyz-menuGroup title="查询">
          <ysyz-menuItem name="4-1">账目明细</ysyz-menuItem>
          <ysyz-menuItem name="4-2">查找账本</ysyz-menuItem>
        </ysyz-menuGroup>
        <ysyz-menuGroup title="操作">
          <ysyz-menuItem name="4-3">发起申诉</ysyz-menuItem></ysyz-menuGroup
        >
      </ysyz-submenu>
      <ysyz-submenu title="其他功能" name="5">
        <ysyz-submenu title="菜品管理" name="5-1">
          <ysyz-menuItem name="5-1-1">添加菜品</ysyz-menuItem>
          <ysyz-menuItem name="5-1-2">修改菜品</ysyz-menuItem>
        </ysyz-submenu>
        <ysyz-submenu title="人员管理" name="5-2">
          <ysyz-menuItem name="5-2-1">员工查询</ysyz-menuItem>
        </ysyz-submenu>
        <ysyz-menuItem name="5-3">后台管理</ysyz-menuItem>
      </ysyz-submenu>
    </ysyz-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>
