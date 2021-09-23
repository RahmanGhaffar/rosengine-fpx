// Initialize auth state

// Declare initial state for auth
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const state = () => ({
    user: "Rahman",
    // user: null,
});

// Getters for auth - equivalent to compute
const getters = {
    user: (state: any, getters: any, rootState: any) => {
        return state.user;
    },
    // oneGetter: (state, getters, rootState) => {
    //     return;
    // },
};

// Actions for auth - equivalent to method (async-ready)
const actions = {
    updateAuth({ commit }: any, payload: string): void {
        commit("UPDATE_AUTH", payload);
    },
    // oneAction({ commit, state }, payload) {
    //     return;
    // },
};

// Mutations for auth - equivalent to method (only for mutate state, not async-compatible)
const mutations = {
    UPDATE_AUTH(state: any, payload: string): void {
        state.user = payload;
    },
    // oneMutation (state, payload) {
    //      return;
    // }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
