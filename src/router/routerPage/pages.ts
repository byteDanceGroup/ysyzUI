export default [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/Home.vue"),
    children: [
      {
        path: "button",
        name: "button",
        component: () => import("../../../packages/button/doc/doc.md"),
      },
      {
        path: "/",
        name: "button",
        component: () => import("../../../packages/button/doc/doc.md"),
      },
      {
        path: "wenhao",
        name: "wenhao",
        component: () => import("../../../packages/wenhao-button/View.vue"),
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
    ],
  },
];
