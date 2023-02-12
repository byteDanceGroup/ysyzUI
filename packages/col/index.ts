import Col from "./index.vue";

Col.install = (app: { component: any }) => {
  app.component(Col.name, Col);
};
export default Col;