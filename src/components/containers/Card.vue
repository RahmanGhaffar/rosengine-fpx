<template>
    <div
        class="
            py-6
            px-8
            bg-white
            shadow-md
            rounded-md
            flex flex-col
            gap-4
            transition-all
            duration-300
            w-full
        "
        :class="[props.cardType, props.cardClass]"
        v-if="!state.isClosed"
    >
        <div class="flex flex-row justify-between items-start">
            <div class="flex flex-col">
                <h3 v-if="title">{{ props.title }}</h3>
                <p
                    class="text-light-700"
                    :class="[props.cardType]"
                    v-if="props.subtitle"
                >
                    {{ props.subtitle }}
                </p>
            </div>
            <button
                class="p-1"
                :class="[{ hidden: !props.closable }]"
                @click="closeCard"
            >
                <FontAwesomeIcon :icon="icon.faTimes" transform="grow-5" />
            </button>
        </div>
        <hr class="text-light-500" :class="[props.cardType]" v-if="title" />
        <div class="flex flex-col gap-4 w-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, reactive, computed } from "vue";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

type Props = {
    title?: string;
    subtitle?: string;
    cardType?:
        | "default"
        | "primary"
        | "secondary"
        | "info"
        | "success"
        | "warning"
        | "danger"
        | "dark"
        | "light";
    cardClass?: string;
    closable?: boolean;
    isClosed?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    cardType: "default",
    closable: false,
    isClosed: false,
});

const state = reactive({
    isClosed: props.isClosed,
});

const closeCard = () => {
    state.isClosed = true;
};

const icon = computed(() => ({
    faTimes,
}));
</script>

<style scoped lang="postcss">
.primary {
    @apply bg-primary-300 text-white;
}

.secondary {
    @apply bg-secondary-300 text-white;
}

.info {
    @apply bg-info-300 text-white;
}

.success {
    @apply bg-success-300 text-white;
}

.warning {
    @apply bg-warning-300 text-black;
}

.danger {
    @apply bg-danger-300 text-white;
}

.dark {
    @apply bg-dark-300 text-white;
}

.light {
    @apply bg-light-300;
}
</style>
