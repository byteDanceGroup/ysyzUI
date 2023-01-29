import Button from "./button/index";
import DescriptionList from "./descriptionList/index";
import Description from "./description/index";
import PageHeader from "./pageHeader/index";
import LoadingBar from "./loadingBar/index";
import Menu from "./menu/index";
import MenuItem from "./menuItem/index";
import Submenu from "./submenu/index";
import MenuGroup from "./menuGroup/index";
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
};
const QUI = {
  install,
};
export { Button };
export { DescriptionList };
export { Description };
export { PageHeader };
export { LoadingBar };
export { Menu };
export { MenuItem };
export { Submenu };
export { MenuGroup };
export default QUI;
