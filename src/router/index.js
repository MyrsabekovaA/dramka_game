import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/dramkagame',
        name: 'Game',
        component: () => import('../views/DramkaGame')
    },
    {
        path: '/achievements',
        name: 'Achievements',
        component: () => import('../views/Achievements')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;