import BreadcrumbItem from "./index.vue";
BreadcrumbItem.install = (app: { component: any }) => {
  app.component(BreadcrumbItem.name, BreadcrumbItem);
};
export default BreadcrumbItem;