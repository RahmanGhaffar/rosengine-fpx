<template>
    <input
        :type="apiKeyConfig.type"
        :value="props.modelValue"
        disabled
        class="border-light-400"
    />
    <button type="button" class="btn-sm btn-light max-w-max" @click="toggleKey">
        <FontAwesomeIcon
            v-if="apiKeyConfig.type === 'password'"
            :icon="faEyeSlash"
        />
        <FontAwesomeIcon
            v-if="apiKeyConfig.type !== 'password'"
            :icon="faEye"
        />
    </button>
</template>

<script setup lang="ts">
import { reactive, defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
    modelValue: String,
});

// API Key Configuration
const apiKeyConfig = reactive({
    type: "password",
});

const toggleKey = () => {
    apiKeyConfig.type = apiKeyConfig.type === "password" ? "text" : "password";
};
// eo API Key Configuration
</script>
