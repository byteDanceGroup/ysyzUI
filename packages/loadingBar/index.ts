import { App } from "vue";
import LoadingBar from "./index.vue";
import { destroyLoadingBar, getInstance } from "./loadingbar";
LoadingBar.install = (app: App) => {
  app.config.globalProperties.$loading = {
    update(value: number) {
      let instance = getInstance().component;
      instance?.exposed?.update(value);
    },
    finish() {
      let instance = getInstance().component;
      instance?.exposed?.finish();
    },
    error() {
      let instance = getInstance().component;
      instance?.exposed?.error();
    },
    start() {
      let instance = getInstance().component;
      instance?.exposed?.start();
    },
    config(value: object) {
      let instance = getInstance().component;
      instance?.exposed?.config(value);
    },
    destroy() {
      destroyLoadingBar();
    },
  };
};

export default LoadingBar;
