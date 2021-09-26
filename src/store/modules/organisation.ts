/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const state = {
    organisations: [
        {
            organisationId: "U2FsdGVkX18dwRXeByf0cFYCXgmMUbdjffY66mnlk0U=",
            organisationName: "toyyibPay",
            organisationImageUrl: "",
            userOrganisationRole: "Admin",
        },
        {
            organisationId: "U2FsdGVkX19x9IyBWNcxuU4P5wW9JCkAv74GwFo3AbI=",
            organisationName: "Ansi System",
            organisationImageUrl: "",
            userOrganisationRole: "User",
        },
    ],
    currentOrg: {
        organisationId: "U2FsdGVkX18dwRXeByf0cFYCXgmMUbdjffY66mnlk0U=",
        organisationName: "toyyibPay",
        organisationImageUrl: "",
        userOrganisationRole: "Admin",
    },
};

export const getters = {};

export const mutations = {
    set_organisations(state: any, newValue: any) {
        state.organisations = newValue;
    },
    set_org(state: any, newValue: any) {
        state.currentOrg = newValue;
    },
};

export const actions = {
    setOrg({ commit }: any, org: any): any {
        commit("set_org", org);
    },
    setOrganisations({ commit }: any, organisations: any): any {
        commit("set_organisations", organisations);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
