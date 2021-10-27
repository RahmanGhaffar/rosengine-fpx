/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import API from "@/api";
import axios from "axios";
import API from "@/utils/api";
// import jwt from 'jsonwebtoken'

declare module "axios" {
    export interface AxiosRequestConfig {
        Origin?: string;
    }
}

const origin = window.location.origin;
const baseurl =
    "https://wf90mmgmwb.execute-api.ap-southeast-1.amazonaws.com/auth";

const state = {
    currentUser: getSavedState("auth.currentUser"),
    detail: {},
};

const mutations = {
    SET_CURRENT_USER(state: any, newValue: any): void {
        state.currentUser = newValue;
        // saveState("auth.currentUser", newValue);
        setDefaultAuthHeaders(state);
    },

    // set_user_detail(state: any, user: any): void {
    //     state.userDetail = user;
    // },

    set_detail(state: any, detail: any) {
        state.detail = detail;
    },
};

const getters = {
    // Whether the user is currently logged in.
    loggedIn(state: any) {
        return !!state.currentUser;
    },

    detailValue: (state: any) => {
        return state.detail;
    },

    currentUser: (state: any) => {
        return state.currentUser;
    },

    accessKey: () => {
        return !!getCookie("Token");
    },
};

const actions = {
    setDetail({ commit }: any, details: any) {
        commit("set_detail", details);
    },

    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    init({ state, dispatch }: any) {
        setDefaultAuthHeaders(state);
        dispatch("validate");
    },

    // Logs in the current user.
    async logIn({ commit, dispatch, getters }: any, credentials: any) {
        if (getters.loggedIn) return dispatch("validate");

        const options = {
            withCredentials: true,
            origin: origin,
        };
        return axios
            .post(
                baseurl + "/login",
                {
                    email: credentials.email,
                    password: credentials.password,
                    remember: credentials.remember,
                },
                options
            )
            .then(async (response) => {
                const user = response.data;

                await dispatch("saveUserDetailAsync", {
                    auth: user.auth,
                    username: user.username,
                    email: user.email,
                    admin: user.admin,
                });

                await setCookie("Token", user.accessToken);
                if (user.auth === true) {
                    window.localStorage.removeItem("auth.expired");
                    commit("SET_CURRENT_USER", user);
                }

                return {
                    user: user,
                    detail: state.detail,
                };
            });
    },

    async saveUserDetailAsync({ commit }: any, user: any) {
        await API.getUserByEmail(user.email).then((response) => {
            commit("set_detail", response);
        });
    },

    // register the user
    // register({ commit, dispatch, getters }, { username, email, password } = {}) {
    //   if (getters.loggedIn) return dispatch('validate')

    //   return axios
    //     .post(baseurl + 'register', {
    //       username,
    //       email,
    //       password,
    //     })
    //     .then((response) => {
    //       const user = response.data
    //       return user
    //     })
    // },

    async validate({ commit, state }: any) {
        // if (!state.currentUser) {
        //     alert("user is null");
        //     return Promise.resolve(null);
        // }

        const res = await axios
            .get(baseurl + "/validate", {
                withCredentials: true,
                Origin: origin,
            })
            .then((response) => {
                const user = response.data;
                commit("SET_CURRENT_USER", {
                    auth: user.auth,
                    username: user.username,
                    email: user.email,
                    admin: user.admin,
                });

                setCookie("Token", user.accessToken);
                return user;
            })
            .catch((err) => {
                // if (error.response) {
                //   commit('SET_CURRENT_USER', null)
                // }
                // console.log(error.response)
                commit("SET_CURRENT_USER", null);
                return err;
            });
        return res;
    },

    // // Logs out the current user.
    async logOut({ commit }: any) {
        // const user = getters.detailValue;
        // const log = {
        //     email: user.userEmail,
        //     desc: "success logout",
        // };
        // API.postLoginLog(log);
        return await axios
            .get(baseurl + "/logout", {
                withCredentials: true,
                Origin: origin,
            })
            .then((response) => {
                console.log(response);
                commit("SET_CURRENT_USER", null);
                deleteCookie("Token");
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

// // register the user
// resetPassword({ commit, dispatch, getters }, { email } = {}) {
//   if (getters.loggedIn) return dispatch('validate')

//   return axios.post('/api/reset', { email }).then((response) => {
//     const message = response.data
//     return message
//   })
// },

// ===
// Private helpers
// ===

function getSavedState(key: any) {
    if (
        !!window.localStorage.getItem(key) ||
        window.localStorage.getItem(key) === "null"
    ) {
        if (!window.sessionStorage.getItem(key)) {
            window.localStorage.setItem("auth.expired", "true");
            return null;
        }

        return JSON.parse(window.sessionStorage.getItem(key) || "");
    }

    // // Set 12 hours Remember Me
    // const data = JSON.parse(window.localStorage.getItem(key) || "");
    // const datenow = new Date();
    // const lastlogin = new Date(data["lastlogin"]);

    // // Test Remember Me over 12 hours
    // //  datenow.setHours(datenow.getHours() + 12)

    // const hours = Math.abs(datenow.getTime() - lastlogin.getTime()) / 36e5;
    // console.log(hours);
    // if (hours >= 12) {
    //     window.localStorage.setItem("auth.expired", "true");
    //     return null;
    // }
    // return JSON.parse(window.localStorage.getItem(key) || "");
}

function saveState(key: any, state: any) {
    if (state != null) {
        if (state["remember"] === true) {
            window.localStorage.setItem(
                key,
                JSON.stringify({
                    username: state["username"],
                    email: state["email"],
                    auth: state["auth"],
                    admin: state["admin"],
                    remember: true,
                    lastlogin: Date(),
                })
            );
            return;
        }
        window.sessionStorage.setItem(
            key,
            JSON.stringify({
                username: state["username"],
                email: state["email"],
                auth: state["auth"],
                admin: state["admin"],
                remember: false,
            })
        );
        return;
    }
    window.localStorage.setItem(key, state);
    window.localStorage.removeItem("auth.expired");
    sessionStorage.clear();
}

function setDefaultAuthHeaders(state: any) {
    const cookieArr = document.cookie.split("=");
    const cookie = cookieArr[1];
    axios.defaults.headers.common.Authorization = state.currentUser
        ? "Bearer " + cookie
        : "";
}

// get cookie based on name
function getCookie(name: string) {
    const cookie = document.cookie.split(";");

    const detect = cookie.find(function (e) {
        if (e.includes(name)) {
            return e;
        }
    });

    return detect?.replace(name + "=", "");
}

// set cookie
function setCookie(name: string, value: string) {
    const d = new Date();
    d.setTime(d.getTime() + 12 * 60 * 60 * 1000);
    const expires = "Expires=" + d.toUTCString();
    document.cookie =
        name +
        "=" +
        value +
        ";" +
        expires +
        ";domain=" +
        process.env.VUE_APP_TOKEN_DOMAIN +
        ";path=/;SameSite=None; secure";
}

function deleteCookie(name: string) {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${process.env.VUE_APP_TOKEN_DOMAIN};`;
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
