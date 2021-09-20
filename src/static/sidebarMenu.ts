type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    path?: string;
    subMenu?: MenuList;
};

type MenuList = Array<MenuItem>;

/**
 * This is sidebar navigation structure
 * Icon is currently has support for Font Awesome only
 * In future will add more capability such as vector icons
 * and more icon packs!
 */

export const sidebarMenu: MenuList = [
    {
        id: "transactionReport",
        label: "Transaction Report",
        icon: "faClipboard",
        path: "/transaction-report",
    },
    {
        id: "configuration",
        label: "Configuration",
        icon: "faWrench",
        subMenu: [
            {
                id: "configurationList",
                label: "Configuration List",
                icon: "",
                path: "/config/list",
            },
            {
                id: "configurationManage",
                label: "Manage Configuration",
                icon: "",
                path: "/config/manage",
            },
            {
                id: "configurationAdd",
                label: "Add Configuration",
                icon: "",
                path: "/config/add",
            },
        ],
    },
    {
        id: "apiLog",
        label: "API Log",
        icon: "faFileAlt",
        path: "/api/log",
    },
    {
        id: "apidocs",
        label: "API Documentation",
        icon: "faTools",
        path: "/api/docs",
    },
    // {
    //     id: "welcome",
    //     label: "Welcome",
    //     icon: "faCouch",
    //     path: "/welcome",
    // },
    // {
    //     id: "menu-basic-component",
    //     label: "Basics",
    //     icon: "faMousePointer",
    //     subMenu: [
    //         {
    //             id: "menu-text",
    //             label: "Text",
    //             icon: "faFont",
    //             path: "/basics/text",
    //         },
    //         {
    //             id: "menu-button",
    //             label: "Button",
    //             icon: "faHandPointUp",
    //             path: "/basics/button",
    //         },
    //     ],
    // },
    // {
    //     id: "menu-forms",
    //     label: "Forms",
    //     icon: "faClipboardList",
    //     subMenu: [
    //         {
    //             id: "menu-form-guide",
    //             label: "Form Guide",
    //             path: "/forms/guides",
    //         },
    //         {
    //             id: "menu-input",
    //             label: "Input",
    //             path: "/forms/input",
    //         },
    //         {
    //             id: "menu-checkbox",
    //             label: "Checkbox",
    //             path: "/forms/checkbox",
    //         },
    //         {
    //             id: "menu-dropdown",
    //             label: "Dropdown",
    //             path: "/forms/dropdown",
    //         },
    //     ],
    // },
    // {
    //     id: "menu-containers",
    //     label: "Containers",
    //     icon: "faBox",
    //     subMenu: [
    //         {
    //             id: "menu-card",
    //             label: "Card",
    //             path: "/containers/card",
    //         },
    //         {
    //             id: "menu-table",
    //             label: "Table",
    //             path: "/containers/table",
    //         },
    //         {
    //             id: "menu-tabledata",
    //             label: "Table Data",
    //             path: "/containers/table-data",
    //         },
    //     ],
    // },
    // {
    //     id: "menu-layouts",
    //     label: "Layouts",
    //     icon: "faCalculator",
    //     subMenu: [
    //         {
    //             id: "menu-dashboard",
    //             label: "Dashboard",
    //             path: "/layouts/dashboard",
    //         },
    //         {
    //             id: "menu-single-carrd",
    //             label: "Single Card",
    //             path: "/layouts/single-card",
    //         },
    //     ],
    // },
    // {
    //     id: "menu-samples",
    //     label: "More Samples",
    //     icon: "faCalculator",
    //     subMenu: [
    //         {
    //             id: "menu-dashboard",
    //             label: "Dashboard",
    //             path: "/layouts/dashboard",
    //         },
    //         {
    //             id: "menu-single-carrd",
    //             label: "Single Card",
    //             path: "/layouts/single-card",
    //         },
    //     ],
    // },
    // {
    //     id: "menu-themes",
    //     label: "Themes",
    //     icon: "faPaintBrush",
    //     path: "/themes",
    // },
    // {
    //     id: "menu-samples",
    //     label: "More Samples",
    //     icon: "faUser",
    //     subMenu: [
    //         // {
    //         //     id: "menu-sign-on",
    //         //     label: "Sign In Screen",
    //         //     path: "/auth/sign-in",
    //         // },
    //         // {
    //         //     id: "menu-appearance",
    //         //     label: "2nd Lvl Nav 2",
    //         //     path: "/test2",
    //         // },
    //         {
    //             id: "menu-auth",
    //             label: "Auth Screen",
    //             subMenu: [
    //                 {
    //                     id: "menu-sign-in",
    //                     label: "Sign In",
    //                     path: "/auth/sign-in",
    //                 },
    //                 {
    //                     id: "menu-sign-up",
    //                     label: "Register",
    //                     path: "/auth/register",
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     id: "menu-about",
    //     label: "About",
    //     icon: "faInfo",
    //     path: "/about",
    // },
];
