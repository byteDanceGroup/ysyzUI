import MenuGroup from "./index.vue";
MenuGroup.install = (app: { component: any }) => {
  app.component(MenuGroup.name, MenuGroup);
};
export default MenuGroup;
