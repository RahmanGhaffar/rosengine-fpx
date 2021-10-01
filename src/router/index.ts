/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { store } from "@/store";
// import Home from "../views/Home.vue";
import Page404 from "../views/404.vue";

const routes: Array<RouteRecordRaw> = [
    // Test Payment
    {
        path: "/api/test",
        name: "TestingAPI",
        component: () => import("../views/testPayment.vue"),
        meta: { authRequired: false },
    },
    // Transaction Report
    {
        path: "/transaction-report",
        name: "Transaction Report",
        component: () =>
            import("../views/transactionReport/transactionReport.vue"),
        meta: { authRequired: true },
    },
    // Configuration
    {
        path: "/config/list",
        name: "configurationList",
        component: () => import("../views/configuration/list.vue"),
        meta: { authRequired: false },
    },
    {
        path: "/config/manage",
        name: "configurationManage",
        component: () => import("../views/configuration/manage.vue"),
        meta: { authRequired: false },
    },
    {
        path: "/config/manage/:id",
        name: "configurationManageWithId",
        component: () => import("../views/configuration/manage.vue"),
        meta: { authRequired: false },
    },
    {
        path: "/config/add",
        name: "configurationAdd",
        component: () => import("../views/configuration/add.vue"),
        meta: { authRequired: false },
    },

    // API Log
    {
        path: "/api/log",
        name: "apiLog",
        component: () => import("../views/apiLog/apiLog.vue"),
        meta: { authRequired: false },
    },
    {
        path: "/api/docs",
        name: "API Documentation",
        component: () =>
            import("../views/transactionReport/transactionReport.vue"),
        beforeEnter: () => {
            window.open(
                "https://documenter.getpostman.com/view/7603697/UUxwBorG",
                "_blank"
            );
        },
        meta: { authRequired: false },
    },

    // Main Page
    {
        path: "/",
        name: "dashboard",
        component: () => import("../views/mainPage.vue"),
        meta: { authRequired: false },
    },

    // Account Page
    {
        path: "/login",
        name: "login",
        component: () => import("../views/account/login.vue"),
        meta: {
            beforeResolve(routeTo: any, routeFrom: any, next: any) {
                // If the user is already logged in
                if (store.getters["auth/loggedIn"]) {
                    // Redirect to the home page instead
                    next({ name: "dashboard" });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: "/set-pin",
        name: "set-pin",
        component: () => import("../views/account/setPin.vue"),
        meta: {
            beforeResolve(routeTo: any, routeFrom: any, next: any) {
                // If the user is already logged in
                if (store.getters["auth/loggedIn"]) {
                    // Redirect to the home page instead
                    next({ name: "dashboard" });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: "/logout",
        name: "logout",
        meta: {
            authRequired: false,
            async beforeResolve(routeTo: any, routeFrom: any, next: any) {
                await store.dispatch("auth/logOut");
                localStorage.removeItem("user");
                const authRequiredOnPreviousRoute = routeFrom.matched.some(
                    (route: any) => route.meta.authRequired
                );
                // Navigate back to previous page, or home as a fallback
                next(
                    authRequiredOnPreviousRoute
                        ? { name: "dashboard" }
                        : { ...routeFrom }
                );
            },
        },
        redirect: { name: "login" },
    },
    //   {
    //     path: '/forget-password',
    //     name: 'forget-password',
    //     component: () =>
    //       lazyLoadView(
    //         import ('@views/pages/account/forgetPassword')),
    //     meta: {
    //       beforeResolve(routeTo, routeFrom, next) {
    //         // If the user is already logged in
    //         if (store.getters['auth/loggedIn']) {
    //           // Redirect to the home page instead
    //           next({ name: 'dashboard' })
    //         } else {
    //           // Continue to the login page
    //           next()
    //         }
    //       },
    //     },
    //   },

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

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
    // Check if auth is required on this route
    // (including nested routes).
    const authRequired = routeTo.matched.some(
        (route) => route.meta.authRequired
    );

    // If auth isn't required for the route, just continue.
    if (!authRequired) return next();

    // If auth is required and the user is logged in...
    if (store.getters["auth/loggedIn"]) {
        // Validate the local user token...
        return store.dispatch("auth/validate").then((validUser) => {
            // Then continue if the token still represents a valid user,
            // otherwise redirect to login.
            validUser ? next() : redirectToLogin();
        });
    }

    // If auth is required and the user is NOT currently logged in,
    // redirect to login.
    redirectToLogin();

    function redirectToLogin() {
        // Pass the original route to the login component
        next({
            name: "Login",
            query: { redirectFrom: encodeURIComponent(routeTo.fullPath) },
        });
    }
});

export default router;
