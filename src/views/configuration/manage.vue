<template>
    <Layout>
        <section>
            <h5>Manage Conifguration</h5>
        </section>
        <Card>
            <Dropdown
                id="configuration"
                label="Configuration: "
                labelPosition="side"
                :options="dropdown.options"
                :selected="selected.config"
                @update="updateConfigOption"
            />
        </Card>
        <button
            @click="findConfig"
            type="submit"
            class="btn-base btn-primary w-max self-end"
        >
            Get Data
        </button>
        <div v-if="config.isSubmit">
            <Card class="mb-12">
                <form
                    method="post"
                    @submit.prevent="manageConfig"
                    class="form-control"
                >
                    <Toggle
                        v-model="config.configStats"
                        position="right"
                        @validate="saveStatus"
                    ></Toggle>
                    <Input
                        id="configName"
                        v-model="config.name"
                        :defaultValue="config.name"
                        label-position="side"
                        label="Name"
                    />
                    <Input
                        id="configDesc"
                        v-model="config.desc"
                        :defaultValue="config.desc"
                        label-position="side"
                        label="Description"
                    />
                    <Dropdown
                        id="configTrigger"
                        label="Trigger System"
                        labelPosition="side"
                        :options="dropdown.systems"
                        :selected="selected.system"
                        @update="updateSystem"
                    />
                    <Input
                        id="configReturn"
                        v-model="config.returnUrl"
                        :defaultValue="config.returnUrl"
                        label-position="side"
                        label="Return URL"
                        :prefix="config.systemUrl"
                    />
                    <Input
                        id="configCallback"
                        v-model="config.callbackUrl"
                        :defaultValue="config.callbackUrl"
                        label-position="side"
                        label="Callback URL"
                        :prefix="config.systemUrl"
                    />
                    <Dropdown
                        id="exchangeId"
                        labelPosition="side"
                        label="Exchange ID"
                        :options="dropdown.exchangeId"
                        :selected="config.exchangeId"
                        @update="updateExchange"
                    />
                    <Dropdown
                        id="sellerId"
                        labelPosition="side"
                        label="Seller ID"
                        :options="dropdown.sellerId"
                        :selected="config.sellerId"
                        @update="updateSeller"
                    />
                    <div class="flex mb-10 mr-4">
                        <label class="flex-1 max-w-input-label mt-2"
                            >API key</label
                        >
                        <input type="text" v-model="config.apiKey" disabled />
                        <button
                            type="button"
                            class="btn-base btn-light inline-flex w-max"
                            @click="generateModal = true"
                        >
                            Regenerate New
                        </button>
                    </div>
                    <button
                        type="submit"
                        class="btn-lg btn-primary block self-end mr-4"
                    >
                        Submit
                    </button>
                </form>
            </Card>
            <button
                type="button"
                @click="removeConfig = true"
                class="btn-base btn-dark w-max"
            >
                Remove Configuration
            </button>
        </div>
    </Layout>
    <!-- Update COnfig -->
    <ConfirmModal v-model="config.confirmModal" @validate="updateConfig"
        >You are about to make changes to the Configuration.</ConfirmModal
    >
    <!-- generate new APi Key -->
    <ConfirmModal v-model="generateModal" @validate="regenerateKey">
        You are about generate a new API Key for the Configuration.
    </ConfirmModal>
    <!-- remove configuration -->
    <ConfirmModal v-model="removeConfig" @validate="removeConfigProcess">
        You are about to remove the configuration from the system.
    </ConfirmModal>
    <SuccessModal v-model="successRemove" @close="goToList"
        >Your changes has been updated.</SuccessModal
    >
    <SuccessModal v-model="successUpdate" @close="successUpdate = false"
        >The Configuration status has been updated.</SuccessModal
    >

    <SuccessModal
        v-model="successUpdateConfig"
        @close="successUpdateConfig = false"
        >The Configuration status has been updated.</SuccessModal
    >
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import Dropdown from "@/components/forms/Dropdown.vue";
import SuccessModal from "@/components/utils/modal/successModal.vue";
import ConfirmModal from "@/components/utils/modal/confirmModal.vue";
import Toggle from "@/components/forms/toggle.vue";
import { reactive, ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import API from "@/api";
import router from "@/router";

const route = useRoute();

const paramId = ref();

onBeforeMount(async () => {
    paramId.value = route.params.id;
    if (paramId.value) {
        findConfig();
    } else {
        var res = await API.getConfigSelect();
        dropdown.options = res.data;
    }
});

const selected = reactive({
    config: "",
    system: "",
});

const config = reactive({
    configStats: "",
    name: "",
    desc: "",
    triggerSystem: "",
    systemUrl: "",
    returnUrl: "",
    callbackUrl: "",
    exchangeId: "",
    sellerId: "",
    apiKey: "",
    isSubmit: false,
    confirmModal: false,
});

const updateConfigOption = (val: any) => {
    paramId.value = val.value;
};

const updateConfig = async () => {
    const res = await API.updateConfig(paramId.value, config);
    if (res.message === "success") {
        successUpdateConfig.value = true;
    }
    console.log(res);
};

const updateSystem = (val: any) => {
    config.triggerSystem = val.value;

    const stats = dropdown.systems.find((e) => {
        return e.value === config.triggerSystem;
    });
    config.systemUrl = stats.url + "/";
};

const updateExchange = async (val: any) => {
    config.exchangeId = val.value;

    const resp = await API.getSellerKeySelect(config.exchangeId);
    dropdown.sellerId = resp.data;
};

const updateSeller = (val: any) => {
    config.sellerId = val.value;
};

const successModal = ref(false);

const successRemove = ref(false);

const successUpdate = ref(false);

const generateModal = ref(false);

const removeConfig = ref(false);

const successUpdateConfig = ref(false);

// Dropdown COnfiguration
const dropdown = reactive({
    options: [],
    systems: [],
    exchangeId: [],
    sellerId: [
        {
            value: "SE00001",
            label: "SE00001 - TOYYIBPAY SDN BHD",
        },
        {
            value: "SE00002",
            label: "SE00002 - ANSI SYSTEMS SDN BHD",
        },
    ],
});

const saveStatus = async (valid: any) => {
    console.log(valid);
    if (valid) {
        var res = await API.updateStatus(paramId.value, config.configStats);
        if (res.message === "success") {
            successUpdate.value = true;
        }
        console.log(res);
    }
};

const findConfig = async () => {
    config.isSubmit = false;
    const res = await API.getConfigManage(paramId.value);
    const detail = res.data.detail;
    config.name = detail.name;
    config.configStats = detail.status;
    config.desc = detail.description;
    config.systemUrl = detail.systemUrl;
    config.returnUrl = detail.returnUrl;
    config.callbackUrl = detail.callbackUrl;
    config.apiKey = detail.apiKey;
    selected.config = paramId.value;
    dropdown.options = res.data.config;

    setTimeout(function () {
        selected.system = detail.systemId;
        dropdown.systems = res.data.system;
        config.triggerSystem = detail.systemId;
    }, 1);

    setTimeout(function () {
        config.exchangeId = detail.exchangeId;
        dropdown.exchangeId = res.data.exchange;
    }, 1);

    setTimeout(function () {
        config.sellerId = detail.sellerId;
        dropdown.sellerId = res.data.seller;
    }, 1);

    config.isSubmit = true;
};

const regenerateKey = async (valid: any) => {
    if (valid) {
        var res = await API.generateKey();
        config.apiKey = res.data.apiKey;
        generateModal.value = false;
    }
};

const manageConfig = () => {
    config.confirmModal = true;
};

const removeConfigProcess = async (valid: any) => {
    if (valid) {
        var res = await API.removeConfig(paramId.value);
        if (res.message === "success") {
            successRemove.value = true;
        }
    }
};

const goToList = () => {
    router.push("/config/list");
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
