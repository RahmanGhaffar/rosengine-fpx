<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>Redirect to Rosengine FPX Documentation...</h5>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import { onMounted } from "vue";

onMounted(() => {
    window
        .open(
            "https://documenter.getpostman.com/view/7603697/UUxwBorG",
            "_blank"
        )
        .focus();
});
</script>
<style scoped>
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.active,
.accordion:hover {
    background-color: #ccc;
}

.panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
}
</style>
