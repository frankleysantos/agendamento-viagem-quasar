import login from "./login";
import vehicles from "./vehicles";
import passengers from "./passengers";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", component: () => import("pages/IndexPage.vue") 
      },
      ...login,
      ...vehicles,
      ...passengers
    ],
  },

  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      ...login,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
