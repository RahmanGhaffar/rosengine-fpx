<template>
    <Layout>
        <section>
            <h5>Manage Conifguration</h5>
        </section>
        <Card>
            <div class="flex items-baseline">
                <label class="flex-1 max-w-input-label mt-2">
                    Configuration :
                </label>
                <input value="Please Change to Dropdown" />
            </div>
        </Card>
        <button class="btn-base btn-primary w-max self-end">Get Data</button>
        <Card
            ><form method="post" @submit.prevent="addConfig">
                <Input
                    v-model="config.name"
                    label-position="side"
                    label="Name"
                    class="mb-1"
                />
                <Input
                    v-model="config.desc"
                    label-position="side"
                    label="Description"
                    class="mb-1"
                />
                <Input
                    v-model="config.triggerSystem"
                    label-position="side"
                    label="Trigger System"
                    class="mb-1"
                />
                <Input
                    v-model="config.returnUrl"
                    label-position="side"
                    label="Return URL"
                    class="mb-1"
                    prefix="htps://contoh.com/return"
                />
                <Input
                    v-model="config.callbackUrl"
                    label-position="side"
                    label="Callback URL"
                    class="mb-1"
                    prefix="htps://contoh.com/callback"
                />
                <Input
                    v-model="config.exchangeId"
                    label-position="side"
                    label="Exchange ID (Select)"
                    class="mb-1"
                />
                <Input
                    v-model="config.sellerId"
                    label-position="side"
                    label="Seller ID (Select)"
                    class="mb-1"
                />
                <div class="flex mb-10">
                    <label class="flex-1 max-w-input-label mt-2">API key</label>
                    <input type="text" id="fname" name="fname" />
                    <button class="btn-base btn-light inline-flex w-max">
                        Generate New
                    </button>
                </div>
                <button type="Submit" class="btn-lg btn-primary float-right">
                    Add
                </button>
            </form>
        </Card>
        <button class="btn-base btn-dark w-max">Remove Configuration</button>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import { reactive } from "vue";

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

const addConfig = () => {
    console.log(config);
};
</script>

<style lang="postcss" scoped>
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
