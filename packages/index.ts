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
import Anchor from "./anchor/index"
import AnchorLink from './anchor/anchor-link/index'
import Layout from './layout/index'
import Content from './layout/include/content/index'
import Sider from './layout/include/sider/index'
import Header from './layout/include/header/index'
import Footer from './layout/include/footer/index'
import Collapse from "./collapse/index";
import Panel from "./panel/index";
import FooterToolbar from './footerToolbar/index';
import Table from './table/index';
import Icon from './icon/index';
import Switch from './switch/index';
import Badge from './badge/index';
import Row from './row/index'
import Col from './col/index'
import RowACol from './rowAcol/index'
import Breadcrumb from './breadcrumb/index'
import BreadcrumbItem from './breadcrumbItem/index'
const install = (app: { use: (arg0: any) => void }) => {
  app.use(Breadcrumb)
  app.use(BreadcrumbItem)
  app.use(Row)
  app.use(RowACol)
  app.use(Col)
  app.use(Button);
  app.use(Layout)
  app.use(AnchorLink)
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
  app.use(Anchor)
  app.use(Collapse);
  app.use(Panel);
  app.use(FooterToolbar);
  app.use(Table);
  app.use(Icon);
  app.use(Sider)
  app.use(Header)
  app.use(Footer)
  app.use(Content)
  app.use(Switch);
  app.use(Badge);
};
const QUI = {
  install,
};
export { Button, GlobalFooter ,Icon,Switch,Anchor,AnchorLink,Layout};
export { DescriptionList ,Sider,Header,Footer,Content,Row,Col,RowACol,Breadcrumb,BreadcrumbItem};
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
export { Collapse };
export { Panel };
export { FooterToolbar };
export { Table };
export { Badge };
export default QUI;
