<template>
    <div
        class="bg-avatar"
        :class="{ 'bg-sm': size === 'sm', 'bg-md': size === 'md' }"
    >
        <span>{{ initial }}</span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    modelValue: String,
    size: {
        type: String,
        required: false,
        default: "md",
    },
});

const initial = computed(() => {
    const arr = props.modelValue.split(" ");
    var initial = "";
    for (const i in arr) {
        if (parseInt(i) < 3) initial += arr[i][0].toUpperCase();
        else break;
    }

    return initial;
});
</script>

<style scoped lang="postcss">
.bg-avatar {
    border-radius: 50%;
    color: #fff;
    @apply flex items-center justify-center bg-primary-500;
}

.bg-md {
    @apply w-11 h-11;
}

.bg-sm {
    font-size: 0.5rem;
    @apply w-7 h-7;
}
</style>
