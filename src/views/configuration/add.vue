<template>
    <Layout>
        <section>
            <h5>Add Configuration</h5>
        </section>
        <Card class="mb-12"
            ><form
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
                    class=""
                    labelPosition="side"
                    label="Exchange ID"
                    :options="dropdown.exchangeId"
                />
                <Dropdown
                    class=""
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
    <ConfirmModal v-model="addModal">
        You are about to add a Configuration for a System.
    </ConfirmModal>
    <!-- generate new APi Key -->
    <ConfirmModal v-model="generateModal"
        >You are about generate a new API Key for the Configuration.
    </ConfirmModal>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import ConfirmModal from "@/components/utils/modal/confirmModal.vue";
import Dropdown from "@/components/forms/Dropdown.vue";

import { reactive, ref } from "vue";

// Dropdown COnfiguration
const dropdown = reactive({
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

const config = reactive({
    name: "",
    desc: "",
    triggerSystem: "",
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
