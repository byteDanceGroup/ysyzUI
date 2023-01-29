import MenuItem from "./index.vue";
MenuItem.install = (app: { component: any }) => {
  app.component(MenuItem.name, MenuItem);
};
export default MenuItem;
