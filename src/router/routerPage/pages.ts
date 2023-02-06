export default [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/Home.vue"),
    redirect: "button",
    children: [
      {
        path: "button",
        name: "button",
        component: () => import("../../../packages/button/doc/doc.md"),
      },
      {
        path: "descriptionList",
        name: "descriptionList",
        component: () => import("../../../packages/descriptionList/doc/doc.md"),
      },
      {
        path: "pageHeader",
        name: "pageHeader",
        component: () => import("../../../packages/pageHeader/doc/doc.md"),
      },
      {
        path: "loadingBar",
        name: "loadingBar",
        component: () => import("../../../packages/loadingBar/doc/doc.md"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("../../../packages/menu/doc/doc.md"),
      },
      {
        path: "grid",
        name: "Grid",
        component: () => import("../../../packages/grid/doc/doc.md"),
      },
      {
        path: "Card",
        name: "Card",
        component: () => import("../../../packages/card/doc/doc.md"),
      },
      {
        path: "List",
        name: "List",
        component: () => import("../../../packages/List/doc/doc.md"),
      },
      {
        path: "Page",
        name: "Page",
        component: () => import("../../../packages/Page/doc/doc.md"),
      },
      {
        path: "GlobalFooter",
        name: "GlobalFooter",
        component: () => import("../../../packages/GlobalFooter/doc/doc.md"),
      },
      {

        path: 'collapse',
        name: 'Collapse',
        component: () => import("../../../packages/collapse/doc/doc.md"),
      },
      {
        path: 'footertoolbar',
        name: 'FooterToolbar',
        component: () => import("../../../packages/footerToolbar/doc/doc.md"),
      }

        path: "Icon",
        name: "Icon",
        component: () => import("../../../packages/icon/doc/doc.md"),
      },
      {
        path: "Switch",
        name: "Switch",
        component: () => import("../../../packages/switch/doc/doc.md"),
      },

    ],
  },
];
