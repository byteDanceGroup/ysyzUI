import Button from "./button/index";
import DescriptionList from "./descriptionList/index";
import Description from "./description/index";
import PageHeader from "./pageHeader/index";
import LoadingBar from "./loadingBar/index";
import Menu from "./menu/index";
import MenuItem from "./menuItem/index";
import Submenu from "./submenu/index";
import MenuGroup from "./menuGroup/index";
import Card from "./card/index";
import List from "./List/index";
import ListItem from "./listItem/index";
import Page from "./page/index";
import GlobalFooter from "./GlobalFooter/index";
import Grid from "./grid/index";
import GridItem from "./gridItem/index";
import Progress from './progress/index';
import Divider from './divider/index';
import Tabs from './tab/index';
import TabContent from './tab/index-c';
import Cell from './cell/index'
import CellGroup from './cellGroup/index'
const install = (app: { use: (arg0: any) => void }) => {
  app.use(Button);
  app.use(DescriptionList);
  app.use(Description);
  app.use(PageHeader);
  app.use(LoadingBar);
  app.use(Menu);
  app.use(MenuItem);
  app.use(Submenu);
  app.use(MenuGroup);
  app.use(Card);
  app.use(List);
  app.use(ListItem);
  app.use(Page);
  app.use(GlobalFooter);
  app.use(Grid);
  app.use(GridItem);
  app.use(Progress);
  app.use(Divider);
  app.use(Tabs);
  app.use(TabContent);
  app.use(Cell)
  app.use(CellGroup)
};
const QUI = {
  install,
};
export { Button, GlobalFooter };
export { DescriptionList };
export { Description };
export { PageHeader };
export { LoadingBar };
export { Menu };
export { MenuItem };
export { Submenu };
export { MenuGroup };
export { Card };
export { List };
export { ListItem };
export { Page };
export { Grid };
export { GridItem };
export {Progress};
export {Divider};
export {TabContent};
export {Tabs};
export {Cell};
export {CellGroup}
export default QUI;
