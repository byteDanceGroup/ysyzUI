import Description from "./index.vue";
Description.install = (app: { component: any }) => {
  app.component(Description.name, Description);
};
export default Description;
