<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>Documentation</h5>
        </section>
        <Card>
            <Accordion></Accordion>
        </Card>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
// import Checkbox from "@/components/forms/Checkbox.vue";
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
// import TableData from "@/components/containers/TableData.vue";
// import Input from "@/components/forms/Input.vue";
import Accordion from "@/components/containers/accordion.vue";
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
