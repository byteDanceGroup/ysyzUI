import Button from "./button/index";
import DescriptionList from "./descriptionList/index";
import Description from "./description/index";
import PageHeader from "./pageHeader/index";
const install = (app: { use: (arg0: any) => void }) => {
  app.use(Button);
  app.use(DescriptionList);
  app.use(Description);
  app.use(PageHeader);
};
const QUI = {
  install,
};
export { Button };
export default QUI;
