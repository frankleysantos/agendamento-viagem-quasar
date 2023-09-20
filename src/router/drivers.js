export default [
    {
        path: "drivers",
        children: [
            {
                path: "",
                component: () => import("src/pages/drivers/indexPage.vue"),
            }
        ]
    }
];