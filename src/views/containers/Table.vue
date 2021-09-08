<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Table Data</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Table data is table with paginations, filters, sorts options
                    available out of the box!
                </p>
                <!-- <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div> -->
            </Card>
            <Card title="Sample Data">
                <TableBase
                    :columns="tableConfig.columns"
                    :entries="dataState.entries"
                >
                    <template #row_id="{ entry }">
                        {{ entry.id }}
                    </template>
                    <template #row_name="{ entry }">
                        {{ entry.name }}
                    </template>
                    <template #row_age="{ entry }">
                        {{ entry.age }}
                    </template>
                    <template #row_action="">
                        <button class="btn-primary btn-sm">Submit</button>
                    </template>
                </TableBase>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import TableBase from "@/components/containers/TableBase.vue";

import { reactive } from "vue";
import tableConfig from "@/sample/tableConfig2.json";
import { getData } from "@/sample/dataSample";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

// Importing types and dependencies
</script>
