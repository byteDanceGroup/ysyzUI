import Submenu from "./index.vue";
Submenu.install = (app: { component: any }) => {
  app.component(Submenu.name, Submenu);
};
export default Submenu;
