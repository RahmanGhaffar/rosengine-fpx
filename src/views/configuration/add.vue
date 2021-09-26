<template>
    <Layout>
        <section>
            <h5>Add Configuration</h5>
        </section>
        <Card class="mb-12">
            <form
                method="post"
                @submit.prevent="addConfig"
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
                    v-model="config.desc"
                    label-position="side"
                    label="Description"
                />
                <Dropdown
                    id="dropdownSystem"
                    v-model="config.system"
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
                />
                <div class="flex mb-10 mr-4">
                    <label class="flex-1 max-w-input-label mt-2">API key</label>
                    <input type="text" disabled id="fname" name="fname" />
                    <button
                        type="button"
                        class="btn-base btn-light inline-flex w-max"
                        @click="generateModal = true"
                    >
                        Regenerate New
                    </button>
                </div>
                <button
                    type="Submit"
                    class="btn-lg btn-primary block self-end mr-4"
                >
                    Submit
                </button>
            </form>
        </Card>
    </Layout>
    <!-- Add Configuration -->
    <ConfirmModal v-model="addModal"
        >You are about to add a Configuration for a System.</ConfirmModal
    >
    <!-- generate new APi Key -->
    <ConfirmModal v-model="generateModal"
        >You are about generate a new API Key for the
        Configuration.</ConfirmModal
    >
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import ConfirmModal from "@/components/utils/modal/confirmModal.vue";
import Dropdown from "@/components/forms/Dropdown.vue";
import API from "@/api";
import { reactive, ref, onBeforeMount } from "vue";
import { store } from "@/store";

onBeforeMount(async () => {
    const currentOrg = store.state.org.currentOrg;
    const data = await API.getConfigSelect(currentOrg.organisationId);
    dropdown.system = data.data;

    const exchange = await API.getExchangeSelect();
    dropdown.exchangeId = exchange.data;
});

// Dropdown COnfiguration
const dropdown = reactive({
    exchangeId: [],
    sellerId: [],
    system: [],
});

const updateSystem = (value: any) => {
    config.system = value.value;
    const stats = dropdown.system.find(
        (e) => e["value"] === config.system.value
    );
    config.url = stats.systemDomainURL + "/";
};

const updateExchange = async (value: any) => {
    config.exchangeId = value.value;

    const resp = await API.getSellerKeySelect(config.exchangeId);
    dropdown.sellerId = resp.data;
};

const config = reactive({
    name: "",
    desc: "",
    system: "",
    url: "",
    returnUrl: "",
    callbackUrl: "",
    exchangeId: "",
    sellerId: "",
    apiKey: "",
});

const generateModal = ref(false);
const addModal = ref(false);

const addConfig = () => {
    addModal.value = true;
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
