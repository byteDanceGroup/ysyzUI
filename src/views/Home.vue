<template>
  <div class="container">
    <div class="left-menu">
      <ysyz-menu :to-auto="true" default-active="button">
        <ysyz-menuItem
          v-for="(item, index) in menuList[0].children"
          :key="index"
          :name="item.name"
          >{{ item.name }}</ysyz-menuItem
        >
      </ysyz-menu>
    </div>
    <div class="mid">
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>

    <div class="right-menu"></div>
  </div>
</template>

<script setup lang="ts">
import menuList from "../router/routerPage/pages";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  .left-menu {
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #f0f0f0;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
    }
    li.active {
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14, 128, 235, 0.1);
    }
  }
  .mid {
    border-right: 1px solid #f0f0f0;
    min-width: 700px;
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding-left: 40px;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
  .router-view {
    flex: 1;
  }
}
</style>
