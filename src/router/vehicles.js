export default [
  {
    path: "vehicles",
    children: [
      {
        path: "",
        component: () => import("src/pages/vehicles/IndexPage.vue"),
      },
    ],
  },
]