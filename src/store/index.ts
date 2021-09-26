import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import createPersistedState from "vuex-persistedstate";

// Import modules
import auth from "./modules/auth";
import layout from "./modules/layout";
import org from "./modules/organisation";

// Import plugins
import logger from "./plugins/logger";

const debug = process.env.NODE_ENV !== "production";

// Define state types here
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {}

// Define injection key
const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<Store<State>>({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        auth,
        layout,
        org,
    },
    strict: debug,
    plugins: debug ? [logger, createPersistedState()] : [],
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useStore = () => {
    return baseUseStore(key);
};

export { store, useStore, key, State };
