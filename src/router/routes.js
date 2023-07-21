const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/vehicles",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/vehicles/IndexPage.vue"),
      },
      // {
      //   path: "/noticias/cadastro",
      //   component: () => import("src/pages/noticia/NoticiaCadastroPage.vue"),
      // },
      // {
      //   path: "/noticias/:id",
      //   component: () => import("src/pages/noticia/NoticiaEditPage.vue"),
      // },
    ],
  },

  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/login/IndexPage.vue"),
      },
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
