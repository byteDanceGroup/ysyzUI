<template>
  <li
    class="ysyz-menu-submenu"
    @mouseenter="if (mode !== 'vertical') openListHorizontal();"
    @mouseleave="if (mode !== 'vertical') closeListHorizontal();"
    ref="titleBox"
    :class="activeHorizontal ? 'ysyz-menu-horizontal-active' : ''"
  >
    <div
      class="ysyz-menu-submenu-title"
      :class="titleClass"
      @click="listShowHandle"
      :style="itemStyle"
      :to-auto="true"
    >
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="ysyz-menu-submenu-list-box" :style="listStyleFinal">
      <ul class="ysyz-menu-submenu-list" ref="list">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>
<script lang="ts">
export default {
  name: "ysyz-submenu",
};
</script>
<script setup lang="ts">
import {
  ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
} from "vue";
import { findComponentsUpward } from "../../src/utils/assits";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
});

const mode = inject("mode");
const titleBox = ref(null);
const titleBoxHeight = ref(0);
const itemStyle = computed(() => {
  if (mode === "vertical") return `padding-left:${padding.value}px`;
  else return "";
});

//展开管理
const listShow = ref(false);
const listStyle = ref("height:0;");
const listStyleFinal = computed(() => {
  return (
    (mode !== "vertical" ? `top:${titleBoxHeight.value}px;` : "") +
    listStyle.value
  );
});
const list = ref(null);
const padding = ref(30);
let height = 0;
const titleClass = computed(() => {
  return [listShow.value ? "ysyz-menu-submenu-title-open" : ""];
});
const listShowHandle = () => {
  if (!outNode) return;
  if (mode === "vertical")
    outNode.exposed.clickSubmenuHandle(props.name, listShow.value);
};
const closeList = () => {
  if (!listShow.value) return;
  height = list.value.offsetHeight;
  listStyle.value = `height:${height}px;`;
  setTimeout(() => {
    listStyle.value = `height:0;`;
  }, 0);
  listShow.value = false;
};
const openList = () => {
  if (listShow.value) return;
  listStyle.value = `height:${height}px;`;
  setTimeout(() => {
    listStyle.value = `height:auto;`;
  }, 300);
  listShow.value = true;
};

const closeListHorizontal = () => {
  if (!listShow.value) return;
  listStyle.value = `height:0px;opacity:0;`;
  setTimeout(() => {
    listStyle.value = `height:0px;opacity:0;display:none;`;
  }, 250);
  listShow.value = false;
};

const openListHorizontal = () => {
  if (listShow.value) return;
  rootNode.exposed.clickAllSubmenuHandle(props.name);
  listStyle.value = `height:0px;opacity:0;`;
  setTimeout(() => {
    listStyle.value = `height:${height + 10}px;opacity:1`;
  }, 0);
  listShow.value = true;
};

//子菜单管理
let instance = getCurrentInstance();
let outNode = null;
let rootNode = null;
const accordion = inject("accordion");
const submenuList = ref<ComponentInternalInstance[]>([]);
const addSubmenuList = (item: ComponentInternalInstance) => {
  submenuList.value.push(item);
};

const clickSubmenuHandle = (name: String, preState: Boolean) => {
  //若preState=true，则先前状态为展开，只需要关闭对应名称的菜单
  if (preState)
    submenuList.value.forEach((item) => {
      if (!item) return;
      if (item?.exposed?.name === name) item?.exposed?.closeList();
    });
  else {
    submenuList.value.forEach((item) => {
      if (!item) return;
      if (item?.exposed?.name === name) item?.exposed?.openList();
      else if (accordion) item?.exposed?.closeList();
    });
    rootNode.exposed?.clickAllSubmenuHandle(name);
  }
};

//水平模式数据冒泡
const activeHorizontal = ref(false); //只对第一级菜单有实际意义。
const activeHandleHorizontal = () => {
  if (outNode.type.name !== "ysyz-menu") return;
  activeHorizontal.value = true;
};
const disactiveHandleHorizontal = () => {
  activeHorizontal.value = false;
};
const ChildrenActiveHandleHorizontal = (truename: String, useless: String) => {
  outNode.exposed?.ChildrenActiveHandleHorizontal(truename, props.name);
};

defineExpose({
  name: props.name,
  closeList,
  openList,
  listShowHandle,
  addSubmenuList,
  clickSubmenuHandle,
  activeHandleHorizontal,
  disactiveHandleHorizontal,
  ChildrenActiveHandleHorizontal,
});

onMounted(() => {
  height = list.value.offsetHeight;
  titleBoxHeight.value = titleBox.value.offsetHeight;
  let menuList = findComponentsUpward(instance, ["ysyz-menu", "ysyz-submenu"]);
  padding.value *= menuList.length;
  outNode = menuList[0];
  outNode.exposed?.addSubmenuList(instance);
  rootNode = menuList.pop();
  rootNode.exposed?.addAllSubmenuList(instance);
});
</script>

<style lang="scss" scoped></style>
