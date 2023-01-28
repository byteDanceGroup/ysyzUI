import DescriptionList from "./index.vue";
DescriptionList.install = (app: { component: any }) => {
  app.component(DescriptionList.name, DescriptionList);
};
export default DescriptionList;
