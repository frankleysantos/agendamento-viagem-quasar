import login from "./login";
import vehicles from "./vehicles";
import passengers from "./passengers";
import drivers from "./drivers";
import scheduledTrips from "./scheduledTrips";

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      if (to.name !== 'login' && !localStorage.getItem('token')) {
        next({ path: 'login' });
      } 
      next();
    },  
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", component: () => import("pages/IndexPage.vue") 
      },
      ...login,
      ...vehicles,
      ...passengers,
      ...drivers,
      ...scheduledTrips
    ],
  },

  {
    path: "/login",
    name: "login",
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
