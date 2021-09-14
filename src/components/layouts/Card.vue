<template>
    <div
        class="min-h-screen flex items-center justify-center flex-1"
        :class="[background]"
        :style="{
            backgroundImage: `url(${props.backgroundImage})`,
        }"
    >
        <Card cardClass="w-full max-w-md items-center">
            <slot />
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/containers/Card.vue";
import { defineProps, withDefaults } from "vue";

type Props = {
    background?: string;
    backgroundImage?: string;
};

const props = withDefaults(defineProps<Props>(), {
    background: "bg-baseBg",
    backgroundImage: "",
});
</script>
