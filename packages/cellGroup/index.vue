<template>  
  <ul class="ysyz-cell" :class="cellclass">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import { ComponentInternalInstance, provide, ref, watch } from "vue";

export default {
  name: "ysyz-cell-group",
};
</script>
<script setup lang="ts">


const emits = defineEmits(["on-select", "on-open-change"]);

const menuStyle = computed(() => {
  return  "";
});


const cellclass = computed(() => {
  return [
    // "ysyz-menu-horizontal"
    "ysyz-cell-vertical"
  ];
});

//item管理
const itemList = ref<ComponentInternalInstance[]>([]);
const addItemList = (item: ComponentInternalInstance) => {
  itemList.value.push(item);
};
const clickItemHandle = (name: string) => {
  itemList.value.forEach((item) => {
    if (!item) return;
    if (item?.exposed?.name === name) item?.exposed?.activeHandle();
    else item?.exposed?.disactiveHandle();
  });
  emits("on-select", name);
};

const clickAllSubmenuHandle = (name: String) => {
  emits("on-open-change", name);
};
defineExpose({
  addItemList,
  clickItemHandle,
  // addSubmenuList,
  // clickSubmenuHandle,
  // addAllSubmenuList,
  clickAllSubmenuHandle,
//   ChildrenActiveHandleHorizontal,
});

onMounted(() => {
//   if (props.mode === "vertical") {
//     if (props.defaultActive) clickItemHandle(props.defaultActive);
//     if (props.defaultOpen) {
//       allSubmenuList.value.forEach((item) => {
//         if (props.defaultOpen?.indexOf(item.exposed.name) !== -1)
//           item.exposed.listShowHandle();
//       });
//     }
//   } else {
//     if (props.defaultActive) {
//       itemList.value.forEach((item) => {
//         if (props.defaultActive === item.exposed.name) item.exposed.clickItem();
//       });
//     }
//   }
});
</script>

<style lang="scss">
.ysyz-cell {
  li {
    list-style: none;
  }
  &-vertical {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
    .ysyz-cell-item {
      transition: all 0.25s;
      box-sizing: border-box;
      padding: 20px 30px;
      background-color: #fff;
      color: $text;
      border-right: 2px solid white;
      white-space: nowrap;
      // &:hover {
      //   color: $primary;
      // }
      &-active {
        color: $primary;
        border-right: 2px solid $primary;
        background-color: lighten($primary, 42%);
      }
    }
  }
}
</style>
