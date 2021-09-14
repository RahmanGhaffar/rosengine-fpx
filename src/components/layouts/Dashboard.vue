<template>
    <main-sidebar />
    <section class="main">
        <main-header />
        <main class="content">
            <slot />
        </main>
    </section>
</template>

<script setup lang="ts">
import MainHeader from "../containers/MainHeader.vue";
import MainSidebar from "../containers/MainSidebar.vue";
</script>

<style lang="postcss">
.body {
    @apply bg-baseBg min-h-screen flex flex-row w-full max-w-screen-vw overflow-x-hidden overflow-y-auto relative;
}
.main {
    @apply flex flex-1 flex-col w-10;
}
.content {
    @apply flex flex-col gap-8 p-8 flex-1 max-w-full;
}
</style>
