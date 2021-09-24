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
];
