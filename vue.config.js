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

    devServer: {
        port: 8081, // CHANGE YOUR PORT HERE!
        https: true,
    },
};
