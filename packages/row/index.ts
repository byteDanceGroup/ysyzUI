import Row from "./index.vue";
Row.install = (app: { component: any }) => {
  app.component(Row.name, Row);
};
export default Row;
