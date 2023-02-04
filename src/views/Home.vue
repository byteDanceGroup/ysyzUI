<template>
  <div class="container">
    <div class="left-menu">
      <li
        @click="switchMenu(item, index)"
        v-for="(item, index) in menuList[0].children"
        :key="index"
        :class="{ active: activeIndex == index }"
      >
        {{ item.name }}
      </li>
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
import { ref, onBeforeMount } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import menuList from "../router/routerPage/pages";
// console.log(menuList[0].children[0]);
const activeIndex = ref(0);
const router = useRouter();
// 根据当前的实际路径获取ActiveIndex
const getActiveIndex = (path: string) => {
  menuList[0].children.some((item, index) => {
    if (item.path.toLowerCase() === path.slice(1).toLowerCase()) {
      activeIndex.value = index;
      return true;
    }
  });
}

// 在保证侧边栏与路由的对应正确
onBeforeMount(() => {
  getActiveIndex(router.currentRoute.value.path);
})

// 保证侧边栏与路由的对应正确
onBeforeRouteUpdate((to) => {
  getActiveIndex(to.path);
});

const switchMenu = (item: { name: any }, index: number) => {
  activeIndex.value = index;
  router.push({
    name: item.name,
  });
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;

  .left-menu {
    width: 160px;
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
