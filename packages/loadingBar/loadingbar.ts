//本文件存放不直接向外暴露的内部处理方法

import { VNode } from "@vue/runtime-core";
import { h, render, App } from "vue";
import LoadingBar from "./index.vue";

let loadingBarInstance: VNode;
let remove = () => {};
const createLoadingBar = () => {
  const container = document.createElement("div"); //创建容器
  document.body.appendChild(container);
  //进度条本尊
  const vnode = h(LoadingBar, {});
  render(vnode, container);
  remove = () => {
    document.body.removeChild(container);
    remove = () => {};
  };
  return vnode;
};
export const destroyLoadingBar = () => {
  loadingBarInstance = null;
  remove();
};
export const getInstance = () => {
  if (!loadingBarInstance) loadingBarInstance = createLoadingBar();
  return loadingBarInstance;
};
