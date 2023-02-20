<template>
  <div class="container">
    <div class="left-menu">
      <ysyz-menu :to-auto="true" :default-active="route.name" :accordion="true">
        <ysyz-submenu v-for="(item, index) of types" :key="'type-' + item[1]" :title="item[0]" :name="item[1]">
          <ysyz-menuItem v-for="(_item, _index) in menuList[0].children[index].children" :key="item[0] + _index"
            :name="_item.name">{{ _item.name }}</ysyz-menuItem>
        </ysyz-submenu>
      </ysyz-menu>
    </div>
    <div class="rightMain">
      <div class="mid">
        <div class="router-view">
          <ysyz-card dis-hover>
            <router-view></router-view>
          </ysyz-card>
        </div>
        <div class="right-menu"></div>
      </div>
      <ysyz-globalfooter :links="links" :copyright="copyright"></ysyz-globalfooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import menuList from "../router/routerPage/pages";
const route = useRoute();
const links = [
  {
    key: "帮助",
    title: "帮助",
    href: "#",
    blankTarget: true,
  },
  {
    key: "github",
    icon: "logo-github",
    href: "#",
    blankTarget: true,
  },
  {
    key: "条款",
    title: "条款",
    href: "",
    blankTarget: true,
  },
];
const types = [
  ["基础", "base"],
  ["布局", "layout"],
  ["导航", "navigation"],
  ["表单", "form"],
  ["视图", "view"],
];
const copyright = "Copyright © 2023 YouShiYouZhong9960 All Rights Reserved";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f5f7f9;

  .mid {
    min-width: 700px;
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    margin: 20px 20px 0 20px;
    display: flex;
  }

  .rightMain {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .router-view {
    flex: 1;
  }

  .left-menu {
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: #fff;
    overflow-y: auto;
  }

  .right-menu {
    min-width: 250px;
  }
}
</style>
