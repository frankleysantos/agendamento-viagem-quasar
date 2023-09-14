export default [
    {
        path: "passengers",
        children: [
            {
            path: "",
            component: () => import("src/pages/passengers/indexPage.vue"),
            },
        ],
    },
]