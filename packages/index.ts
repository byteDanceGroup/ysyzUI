import Button from "./button/index";
import DescriptionList from "./descriptionList/index";
import Description from "./description/index";
import PageHeader from "./pageHeader/index";
import LoadingBar from "./LoadingBar/index";
import Grid from "./grid/index";
import GridItem from "./gridItem/index"
const install = (app: { use: (arg0: any) => void }) => {
  app.use(Button);
  app.use(DescriptionList);
  app.use(Description);
  app.use(PageHeader);
  app.use(LoadingBar);
  app.use(Grid);
  app.use(GridItem);
};
const QUI = {
  install,
};
export { Button };
export { DescriptionList };
export { Description };
export { LoadingBar };
export { Grid };
export { GridItem }
export default QUI;
