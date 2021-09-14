module.exports = {
    pwa: {
        themeColor: "#2E74DD",
        msTileColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",

        iconPaths: {
            appleTouchIcon: "img/icons/apple-icon-152x152.png",
            msTileColor: "img/icons/ms-icon-144x144.png",
        },
    },
    // NOTE: set alias via `configureWebpack` or `chainWebpack`
    // Settings for Balm UI
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
                "balm-ui-css": "balm-ui/dist/balm-ui.css",
            },
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set("balm-ui-plus", "balm-ui/dist/balm-ui-plus.js")
            .set("balm-ui-css", "balm-ui/dist/balm-ui.css");
    },
};
