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
            <h1>NeoCorrad UI</h1>
            <p class="text-dark-400">
                Welcome to our new, personally crafted UI components, for your
                dashboard needs!
            </p>
            <p class="text-dark-400">
                To start, you can navigate to our home dashboard screen.
            </p>
            <button
                class="btn-base btn-primary w-full mt-8"
                @click="$router.push('/')"
            >
                Go to dashboard
            </button>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Card.vue";
import background from "@/assets/images/background_sample.svg";
</script>
