export default [
    {
        path: "scheduledTrips",
        children: [
            {
                path: "",
                component: () => import("src/pages/scheduledTrips/IndexPage.vue"),
            }
        ]
    }
];