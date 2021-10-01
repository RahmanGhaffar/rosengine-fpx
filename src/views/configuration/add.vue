<template>
    <Layout>
        <section>
            <h5>Add Configuration</h5>
        </section>
        <Card class="mb-12">
            <form
                method="post"
                @submit.prevent="addModal = true"
                class="form-control"
            >
                <Input
                    id="configName"
                    v-model="config.name"
                    label-position="side"
                    label="Name"
                />
                <Input
                    id="configDesc"
                    v-model="config.configDesc"
                    label-position="side"
                    label="Description"
                />
                <Dropdown
                    id="dropdownSystem"
                    v-model="config.triggerSystem"
                    labelPosition="side"
                    label="Trigger System"
                    :options="dropdown.system"
                    @update="updateSystem"
                />
                <Input
                    id="configReturn"
                    v-model="config.returnUrl"
                    label-position="side"
                    label="Return URL"
                    :prefix="config.url"
                />
                <Input
                    id="configCallback"
                    v-model="config.callbackUrl"
                    label-position="side"
                    label="Callback URL"
                    :prefix="config.url"
                />
                <Dropdown
                    id="dropdownExchange"
                    v-model="config.exchangeId"
                    labelPosition="side"
                    label="Exchange ID"
                    :options="dropdown.exchangeId"
                    @update="updateExchange"
                />
                <Dropdown
                    id="dropdownSeller"
                    labelPosition="side"
                    label="Seller ID"
                    :options="dropdown.sellerId"
                    @update="updateSeller"
                />
                <div class="flex mb-10 mr-4">
                    <label class="flex-1 max-w-input-label mt-2">API key</label>
                    <input type="text" v-model="config.apiKey" disabled />
                    <button
                        type="button"
                        class="btn-base btn-light inline-flex w-max"
                        @click="generateModal = true"
                    >
                        Generate New
                    </button>
                </div>
                <button
                    type="submit"
                    class="btn-lg btn-primary block self-end mr-4"
                    :disabled="
                        config.name === '' ||
                        config.configDesc === '' ||
                        config.triggerSystem === '' ||
                        config.returnUrl === '' ||
                        config.callbackUrl === '' ||
                        config.exchangeId === '' ||
                        config.sellerId === '' ||
                        config.apiKey === ''
                    "
                >
                    Submit
                </button>
            </form>
        </Card>
    </Layout>
    <!-- Add Configuration -->
    <ConfirmModal v-model="addModal" @validate="addConfig"
        >You are about to add a Configuration for a System.</ConfirmModal
    >
    <!-- generate new APi Key -->
    <ConfirmModal v-model="generateModal" @validate="generateKey"
        >You are about generate a new API Key for the
        Configuration.</ConfirmModal
    >
    <SuccessModal v-model="successAddModal" @close="goToManage"
        >The Configuration has been added.</SuccessModal
    >
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import ConfirmModal from "@/components/utils/modal/confirmModal.vue";
import Dropdown from "@/components/forms/Dropdown.vue";
import API from "@/api";
import { reactive, ref, onBeforeMount } from "vue";
import { store } from "@/store";
import SuccessModal from "@/components/utils/modal/successModal.vue";
import router from "@/router";

onBeforeMount(async () => {
    const currentOrg = store.state.org.currentOrg;
    const data = await API.getTriggerSystemSelect(currentOrg);
    console.log(data);
    dropdown.system = data.data;

    const exchange = await API.getExchangeSelect();
    dropdown.exchangeId = exchange.data;
    console.log(exchange);
});

// Dropdown COnfiguration
const dropdown = reactive({
    exchangeId: [],
    sellerId: [],
    system: [],
});

const updateSystem = (value: any) => {
    config.triggerSystem = value.value;
    const stats = dropdown.system.find((e) => {
        return e.value === config.triggerSystem;
    });
    config.url = stats.systemDomainURL + "/";
};

const updateExchange = async (value: any) => {
    config.exchangeId = value.value;

    const resp = await API.getSellerKeySelect(config.exchangeId);
    dropdown.sellerId = resp.data;
};

const updateSeller = async (value: any) => {
    config.sellerId = value.value;
};

const config = reactive({
    name: "",
    configDesc: "",
    triggerSystem: "",
    url: "",
    returnUrl: "",
    callbackUrl: "",
    exchangeId: "",
    sellerId: "",
    apiKey: "",
});

const newId = ref("");

const generateKey = async (valid: any) => {
    if (valid) {
        const key = await API.generateKey();
        console.log(key);
        config.apiKey = key.data.apiKey;
        generateModal.value = false;
    }
};

const generateModal = ref(false);
const addModal = ref(false);
const successAddModal = ref(false);

const addConfig = async (valid: any) => {
    console.log(config);
    if (valid) {
        var resp = await API.addConfig(config);
        if (resp.message === "success") {
            successAddModal.value = true;
            newId.value = resp.id;
        }
    }
};

const goToManage = () => {
    router.push("/config/manage/" + encodeURIComponent(newId.value));
};
</script>

<style lang="postcss" scoped>
.form-control {
    @apply flex flex-col gap-4;
}

input {
    @apply border rounded-md border-light-500 py-2 px-4 flex-1 w-full min-w-input outline-none transition-all duration-300 ease-in-out;
    @apply hover:border-light-600 focus:border-primary-300 focus:shadow-focus;
    /* @apply hover:border-light-600 focus:border-primary-300 focus:ring-primary-300 focus:ring-1; */

    &.error {
        @apply border-danger-500 focus:shadow-danger;
    }

    &.inputPrefix {
        @apply rounded-l-none;
    }

    &.inputPostfix {
        @apply rounded-r-none;
    }
}
</style>
