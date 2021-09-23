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
                    ></Toggle>
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
                    <Input
                        id="configTrigger"
                        v-model="config.triggerSystem"
                        label-position="side"
                        label="Trigger System"
                    />
                    <Input
                        id="configReturn"
                        v-model="config.returnUrl"
                        label-position="side"
                        label="Return URL"
                        prefix="htps://contoh.com/"
                    />
                    <Input
                        id="configCallback"
                        v-model="config.callbackUrl"
                        label-position="side"
                        label="Callback URL"
                        prefix="htps://contoh.com/"
                    />
                    <Dropdown
                        id="exchangeId"
                        labelPosition="side"
                        label="Exchange ID"
                        :options="dropdown.exchangeId"
                    />
                    <Dropdown
                        id="sellerId"
                        labelPosition="side"
                        label="Seller ID"
                        :options="dropdown.sellerId"
                    />
                    <div class="flex mb-10 mr-4">
                        <label class="flex-1 max-w-input-label mt-2"
                            >API key</label
                        >
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
    <ConfirmModal v-model="generateModal" @validate="updateConfig">
        You are about generate a new API Key for the Configuration.
    </ConfirmModal>
    <!-- remove configuration -->
    <ConfirmModal v-model="removeConfig" @validate="updateConfig">
        You are about to remove the configuration from the system.
    </ConfirmModal>
    <SuccessModal v-model="successModal">Testing Success Modal</SuccessModal>
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
import { reactive, ref } from "vue";

const config = reactive({
    configStats: false,
    name: "",
    desc: "",
    triggerSystem: "",
    returnUrl: "",
    callbackUrl: "",
    exchangeId: "",
    sellerId: "",
    apiKey: "",
    isSubmit: false,
    confirmModal: false,
});

const updateConfig = () => {
    successModal.value = true;
};

const successModal = ref(false);

const generateModal = ref(false);

const removeConfig = ref(false);

// Dropdown COnfiguration
const dropdown = reactive({
    options: [
        {
            label: "Configuration 1",
            value: "Configuration 1",
        },
        {
            label: "Configuration 2",
            value: "Configuration 2",
        },
        {
            label: "Configuration 3",
            value: "Configuration 3",
        },
        {
            label: "Configuration 4",
            value: "Configuration 4",
        },
        {
            label: "Configuration 5",
            value: "Configuration 5",
        },
        {
            label: "Configuration 6",
            value: "Configuration 6",
        },
    ],
    exchangeId: [
        {
            value: "EX00001",
            label: "EX0001 - TOYYIBPAY SDN BHD",
        },
        {
            value: "EX00002",
            label: "EX00002 - ANSI SYSTEMS SDN BHD",
        },
    ],
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

const findConfig = () => {
    config.isSubmit = true;
};

const manageConfig = () => {
    config.confirmModal = true;
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
