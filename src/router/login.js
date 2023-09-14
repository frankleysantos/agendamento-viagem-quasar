export default [
    {
        path: "",
        children: [
          {
            path: "",
            component: () => import("src/pages/login/IndexPage.vue"),
          },
        ],
    },
]