import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import Page404 from "../views/404.vue";

const routes: Array<RouteRecordRaw> = [
    // Main Page
    {
        path: "/",
        name: "Main Page",
        component: () => import("../views/mainPage.vue"),
        meta: { required: false },
    },

    // Account Page
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/account/login.vue"),
        meta: { required: false },
    },
    {
        path: "/set-pin",
        name: "Set Pin",
        component: () => import("../views/account/setPin.vue"),
        meta: { required: false },
    },

    // Transaction Report
    {
        path: "/transaction-report",
        name: "Transaction Report",
        component: () =>
            import("../views/transactionReport/transactionReport.vue"),
        meta: { required: false },
    },
    // Configuration
    {
        path: "/config/list",
        name: "configurationList",
        component: () => import("../views/configuration/list.vue"),
        meta: { required: false },
    },
    {
        path: "/config/manage",
        name: "configurationManage",
        component: () => import("../views/configuration/manage.vue"),
        meta: { required: false },
    },
    {
        path: "/config/add",
        name: "configurationAdd",
        component: () => import("../views/configuration/add.vue"),
        meta: { required: false },
    },

    // API Log
    {
        path: "/api/log",
        name: "apiLog",
        component: () => import("../views/apiLog/apiLog.vue"),
        meta: { required: false },
    },
    {
        path: "/api/docs",
        name: "API Documentation",
        component: () => import("../views/mainPage.vue"),
        beforeEnter: () => {
            window.open(
                "https://documenter.getpostman.com/view/7603697/UUxwBorG",
                "_blank"
            );
        },
        meta: { required: false },
    },
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    // },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { required: false },
    },

    // TODO: For nested routes, use children
    // Temporarily declare this way - will improve later
    // AUTH ROUTES
    {
        path: "/auth/sign-in",
        name: "Sign In",
        component: () => import("../views/auth/SignIn.vue"),
        meta: { required: false },
    },
    {
        path: "/auth/register",
        name: "Register",
        component: () => import("../views/auth/SignUp.vue"),
        meta: { required: false },
    },

    // // BASIC ROUTES
    // {
    //     path: "/basics/text",
    //     name: "Texts",
    //     component: () => import("../views/basics/Text.vue"),
    // },
    // {
    //     path: "/basics/button",
    //     name: "Buttons",
    //     component: () => import("../views/basics/Button.vue"),
    // },

    // // FORMS ROUTES
    // {
    //     path: "/forms/guides",
    //     name: "Form Guide",
    //     component: () => import("../views/forms/Guides.vue"),
    // },
    // {
    //     path: "/forms/input",
    //     name: "Input",
    //     component: () => import("../views/forms/Input.vue"),
    // },
    // {
    //     path: "/forms/checkbox",
    //     name: "Checkbox",
    //     component: () => import("../views/forms/Checkbox.vue"),
    // },
    // {
    //     path: "/forms/dropdown",
    //     name: "Dropdown",
    //     component: () => import("../views/forms/Dropdown.vue"),
    // },

    // // CONTAINERS ROUTES
    // {
    //     path: "/containers/card",
    //     name: "Card",
    //     component: () => import("../views/containers/Card.vue"),
    // },
    // {
    //     path: "/containers/table",
    //     name: "Table",
    //     component: () => import("../views/containers/Table.vue"),
    // },
    // {
    //     path: "/containers/table-data",
    //     name: "Table Data",
    //     component: () => import("../views/containers/TableData.vue"),
    // },

    // // LAYOUT ROUTES
    // {
    //     path: "/layouts/dashboard",
    //     name: "Dashboard Layout",
    //     component: () => import("../views/layouts/Dashboard.vue"),
    // },
    // {
    //     path: "/layouts/single-card",
    //     name: "Single Card Layout",
    //     component: () => import("../views/layouts/Card.vue"),
    // },

    // // CONFIG ROUTES
    // {
    //     path: "/themes",
    //     name: "Themes",
    //     component: () => import("../views/themes/Index.vue"),
    // },

    // For 404 Error Page
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Page404,
        meta: { required: false },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollBehavior(to: unknown, from: unknown, savedPosition: unknown) {
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
