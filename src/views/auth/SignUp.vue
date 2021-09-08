<template>
    <Layout
        class="bg-bottom bg-cover"
        background="bg-primary-500"
        :backgroundImage="background"
    >
        <div class="flex flex-col items-center text-center gap-4">
            <div class="h-10 w-40 object-contain mb-8">
                <img src="@/assets/logo/logo-corrad.svg" alt="Corrad" />
            </div>
            <h1>Register</h1>
            <p class="text-dark-400">Please register to continue</p>
            <div class="bg-light-400 p-4">
                <p class="text-dark-300">
                    Do not enter any credentials, for this is just a sample
                    only. You may try the sample, but we won't be responsible
                    for any private information given here.
                </p>
            </div>
            <Input
                id="email"
                type="email"
                autocomplete="email"
                label="Email"
                label-position="top"
            />
            <Input
                type="password"
                autocomplete="new-password"
                id="new-password"
                label="Password"
                label-position="top"
                v-model="password.new"
                @focus="handlePasswordFocus"
                @blur="handlePasswordBlur"
            />
            <PasswordScore
                :validator="validator.errors"
                :checklist-visible="false"
            />
            <Input
                type="password"
                autocomplete="new-password"
                id="confirm-new-password"
                label="Confirm Password"
                label-position="top"
            />
            <button
                class="btn-base btn-primary w-full mt-8"
                @click="$router.push('/')"
            >
                Sign me up for awesome NeoCorrad!
            </button>
            <!-- <p>{{ validator.level.toString() }}</p> -->
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Card.vue";
import Input from "@/components/forms/Input.vue";
import PasswordScore from "@/components/utils/PasswordScore.vue";
import { reactive, computed } from "vue";
import usePasswordScore from "@/hooks/usePasswordScore";

import background from "@/assets/images/background_sample.svg";

type Password = {
    new: string;
    confirm: string;
};

const password = reactive<Password>({
    new: "",
    confirm: "",
});

const validator = computed(() => usePasswordScore(password.new));

// const handleUpdate = (newValue: string) => {
//     console.log(newValue);
// };
</script>
