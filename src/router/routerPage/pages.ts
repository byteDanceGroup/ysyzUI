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
      { // 更改重定位
        path: "/",
        redirect: 'button',
      },
      // 删除文浩button
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
        path: "grid",
        name: "grid",
        component: () => import("../../../packages/grid/doc/doc.md"),
      }
    ],
  },
];
