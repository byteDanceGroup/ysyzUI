<template>  
  <ul class="ysyz-cell" :class="cellclass">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import { ComponentInternalInstance, provide, ref, watch } from "vue";

export default {
  name: "myCellGroup",
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

// //水平模式触发点击
// const ChildrenActiveHandleHorizontal = (
//   truename: String,
//   activename: String
// ) => {
//   //前面一个是真正点击的name，后面一个是menu下一级激活，要高亮
//   emits("on-select", truename);
//   itemList.value.forEach((element) => {
//     if (element.exposed.name === activename)
//       element.exposed.activeHandleHorizontal();
//     else element.exposed.disactiveHandleHorizontal();
//   });
//   submenuList.value.forEach((element) => {
//     if (element.exposed.name === activename)
//       element.exposed.activeHandleHorizontal();
//     else element.exposed.disactiveHandleHorizontal();
//   });
// };

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
      cursor: pointer;
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
  // &-horizontal {
  //   display: flex;
  //   padding: 0;
  //   margin: 0;
  //   > li {
  //     flex: 1;
  //     border-bottom: 2px solid white;
  //     color: $text;
  //     padding: 20px 30px;
  //     white-space: nowrap;
  //     display: flex;
  //     justify-content: center;
  //     transition: all 0.25s;
  //     cursor: pointer;
  //     align-items: center;
  //     &:hover {
  //       border-bottom: 2px solid $primary;
  //       color: $primary;
  //     }
  //   }
  //   .ysyz-menu-horizontal-active {
  //     border-bottom: 2px solid $primary;
  //     color: $primary;
  //   }
  //   .ysyz-menu-submenu {
  //     position: relative;
  //     &-title {
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;
  //       &:after {
  //         content: "";
  //         width: 5px;
  //         height: 5px;
  //         transform: rotate(225deg);
  //         transform-origin: 25% 25%;
  //         transition: all 0.3s;
  //         border: 1px solid #aaa;
  //         margin-top: 5px;
  //         border-right-color: transparent;
  //         border-bottom-color: transparent;
  //         margin-left: 15px;
  //       }
  //     }
  //     &:hover {
  //       > .ysyz-menu-submenu-title {
  //         &:after {
  //           transform: rotate(45deg);
  //         }
  //       }
  //     }
  //   }
  //   .ysyz-menu-submenu-list-box {
  //     padding: 10px 10px 0 10px;
  //     position: absolute;
  //     opacity: 0;
  //     transition: all 0.25s;
  //     z-index: 100;
  //     .ysyz-menu-submenu-list {
  //       background-color: #fff;
  //       border-radius: 5px;
  //       box-shadow: 0 0 5px rgba(147, 147, 147, 0.3);
  //       padding: 3px 0;
  //       display: flex;
  //       flex-direction: column;
  //       color: $text;
  //       .ysyz-menu-item {
  //         transition: all 0.2s;
  //         display: flex;
  //         padding: 10px 20px;
  //         align-items: center;
  //         cursor: pointer;
  //         &:hover {
  //           background-color: #f9f9f9;
  //           color: $primary;
  //         }
  //       }
  //       //嵌套子菜单
  //       .ysyz-menu-submenu {
  //         padding: 10px 20px;
  //         &-title {
  //           &:after {
  //             position: absolute;
  //             margin-top: 8px;
  //             right: 5px;
  //           }
  //         }
  //         &:hover {
  //           .ysyz-menu-submenu-title {
  //             &:after {
  //               transform: rotate(45deg);
  //             }
  //           }
  //         }
  //         .ysyz-menu-submenu-list-box {
  //           top: auto !important;
  //         }
  //       }
  //     }
  //   }
  //   .ysyz-menu-item-active {
  //     color: $primary;
  //   }
  // }
}
</style>
