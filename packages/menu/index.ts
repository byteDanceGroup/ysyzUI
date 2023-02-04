import Menu from "./index.vue";
Menu.install = (app: { component: any }) => {
  app.component(Menu.name, Menu);
};
export default Menu;
