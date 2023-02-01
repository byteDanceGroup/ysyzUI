import Button from "./button/index";
import DescriptionList from "./descriptionList/index";
import Description from "./description/index";
import PageHeader from "./pageHeader/index";
import LoadingBar from "./LoadingBar/index";
import Card from "./card/index"
import List from "./List/index"
import ListItem from "./listItem/index"
import Page from "./page/index"
import GlobalFooter from "./GlobalFooter/index"
const install = (app: { use: (arg0: any) => void }) => {
  app.use(Button);
  app.use(DescriptionList);
  app.use(Description);
  app.use(PageHeader);
  app.use(LoadingBar);
  app.use(Card);
  app.use(List);
  app.use(ListItem)
  app.use(Page)
  app.use(GlobalFooter)
};
const QUI = {
  install,
};
export { Button,GlobalFooter};
export { DescriptionList };
export { Description };
export { LoadingBar };
export{Card}
export{List}
export{ListItem}
export{Page}
export default QUI;
