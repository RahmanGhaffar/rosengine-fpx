// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // Note that we do not extend Tailwind color palette.
        // If you wish to do so, you can add `extend` parameter
        // Refer to Tailwind color configurations here: https://tailwindcss.com/docs/customizing-colors
        colors: {
            transparent: "transparent",
            black: "var(--black)",
            white: "var(--white)",
            primary: {
                100: "var(--primary-100)",
                200: "var(--primary-200)",
                300: "var(--primary-300)",
                400: "var(--primary-400)",
                500: "var(--primary-500)",
                600: "var(--primary-600)",
                700: "var(--primary-700)",
                800: "var(--primary-800)",
                900: "var(--primary-900)",
            },
            secondary: {
                100: "var(--secondary-100)",
                200: "var(--secondary-200)",
                300: "var(--secondary-300)",
                400: "var(--secondary-400)",
                500: "var(--secondary-500)",
                600: "var(--secondary-600)",
                700: "var(--secondary-700)",
                800: "var(--secondary-800)",
                900: "var(--secondary-900)",
            },
            info: {
                100: "var(--info-100)",
                200: "var(--info-200)",
                300: "var(--info-300)",
                400: "var(--info-400)",
                500: "var(--info-500)",
                600: "var(--info-600)",
                700: "var(--info-700)",
                800: "var(--info-800)",
                900: "var(--info-900)",
            },
            success: {
                100: "var(--success-100)",
                200: "var(--success-200)",
                300: "var(--success-300)",
                400: "var(--success-400)",
                500: "var(--success-500)",
                600: "var(--success-600)",
                700: "var(--success-700)",
                800: "var(--success-800)",
                900: "var(--success-900)",
            },
            warning: {
                100: "var(--warning-100)",
                200: "var(--warning-200)",
                300: "var(--warning-300)",
                400: "var(--warning-400)",
                500: "var(--warning-500)",
                600: "var(--warning-600)",
                700: "var(--warning-700)",
                800: "var(--warning-800)",
                900: "var(--warning-900)",
            },
            danger: {
                100: "var(--danger-100)",
                200: "var(--danger-200)",
                300: "var(--danger-300)",
                400: "var(--danger-400)",
                500: "var(--danger-500)",
                600: "var(--danger-600)",
                700: "var(--danger-700)",
                800: "var(--danger-800)",
                900: "var(--danger-900)",
            },
            light: {
                100: "var(--light-100)",
                200: "var(--light-200)",
                300: "var(--light-300)",
                400: "var(--light-400)",
                500: "var(--light-500)",
                600: "var(--light-600)",
                700: "var(--light-700)",
                800: "var(--light-800)",
                900: "var(--light-900)",
            },
            dark: {
                100: "var(--dark-100)",
                200: "var(--dark-200)",
                300: "var(--dark-300)",
                400: "var(--dark-400)",
                500: "var(--dark-500)",
                600: "var(--dark-600)",
                700: "var(--dark-700)",
                800: "var(--dark-800)",
                900: "var(--dark-900)",
            },
            // visited: "var(--visited)",
            baseBg: "var(--body-background)",
        },
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        },
        extend: {
            spacing: {
                "sidebar-expand": "var(--sidebar-width-expand)",
                "sidebar-collapse": "var(--sidebar-width-collapse)",
                header: "var(--header-height)",
            },
            minWidth: {
                mobile: "300px",
                input: "8ch",
            },
            minHeight: {
                80: "20rem",
            },
            maxWidth: {
                "input-label": "15ch",
                "screen-vw": "100vw",
            },
            maxHeight: {
                "2/3": "66.7%",
            },
            boxShadow: {
                danger: "0 0 4px var(--danger-500)",
                focus: "0 0 4px var(--primary-300)",
            },
            gridAutoColumns: {
                "1fr": "minmax(0, 1fr)",
                "2fr": "minmax(0, 2fr)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
