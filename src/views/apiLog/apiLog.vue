<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>API Log</h5>
        </section>
        <Card>
            <form @submit.prevent="searchReport" class="">
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <!-- Date Input -->
                        <Input
                            id="fromInput"
                            label-position="side"
                            label="From"
                        />
                        <Input id="toInput" label-position="side" label="To" />
                        <div class="grid lg:grid-cols-8 md:grid-cols-2 gap-2">
                            <label
                                class="
                                    lg:col-span-2
                                    md:row-span-4 md:col-span-1
                                    sm:col-span-1
                                "
                                >Type</label
                            >
                            <Checkbox
                                id="cbType"
                                label="inbound from system"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="lg:col-span-3 sm:col-span-1"
                            />
                            <Checkbox
                                id="cbType"
                                label="outbound to system"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="lg:col-span-3 sm:col-span-1"
                            />
                            <Checkbox
                                id="cbType"
                                label="inbound from provider"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="lg:col-span-3 sm:col-span-1"
                            />
                            <Checkbox
                                id="cbType"
                                label="outbound to provider"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="lg:col-span-3 sm:col-span-1"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <Input
                            id="statusInput"
                            label-position="side"
                            label="Trigger System (Dropdown)"
                        /><Input
                            id="statusInput"
                            label-position="side"
                            label="Send Address (Dropdown)"
                        />
                    </div>
                </div>

                <div class="flex justify-between mt-3">
                    <button
                        type="reset"
                        class="btn-light btn-base"
                        @click="reset"
                    >
                        Reset
                    </button>
                    <button type="submit" class="btn-primary btn-base">
                        Search
                    </button>
                </div>
            </form>
        </Card>
        <Card v-if="searchForm.isOpen" class="overflow-x-auto">
            <TableData
                :columns="tableConfig.columns"
                :entries="dataState.entries"
                :pagination="pagination"
                :total-rows="totalRows"
                @paginate="handlePagination"
                @filter="handleFilter"
                @sort="handleSort"
                @entry-resize="handleResize"
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
                    <div class="flex gap-3 justify-center">
                        <button class="btn-ligt btn-sm">View</button>
                        <button class="btn-info btn-sm">Download</button>
                    </div>
                </template>
            </TableData>
        </Card>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Checkbox from "@/components/forms/Checkbox.vue";
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import TableData from "@/components/containers/TableData.vue";
import Input from "@/components/forms/Input.vue";
import { reactive, watchEffect } from "vue";
// import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/dataSample";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

const tableConfig = reactive({
    columns: [
        {
            name: "logConfiguration",
            label: "Configuration",
        },
        {
            name: "logType",
            label: "Type",
        },
        {
            name: "exchangeId",
            label: "Exchange ID",
        },
        {
            name: "sellerId",
            label: "Seller ID",
        },
        {
            name: "logDate",
            label: "Log Date",
        },
        {
            name: "reportReason",
            label: "Reason",
        },
        {
            name: "action",
            label: "action",
            titleAlign: "center",
        },
    ],
    pagination: {
        currentPage: 1,
        entrySize: 10,
        currentSort: {
            column: "id",
            order: "asc",
        },
        filterOptions: [],
        showEntries: [5, 10, 25, 50, 100, 1000],
        checkable: false,
    },
});

const pagination = reactive<Table.Pagination>({
    ...(tableConfig.pagination as Table.Pagination),
});

// serach Form Function
const searchForm = reactive({
    isOpen: false,
});

const searchReport = () => {
    searchForm.isOpen = true;
};

// Handle data call here, preferably use async/await
const updateData = (params: GetDataProps) => {
    const { entries: nextEntries, totalRows: nextTotalRows } = getData(params);
    dataState.entries = nextEntries;
    dataState.totalRows = nextTotalRows;
};

// watchEffect used here to handle side effects, which allows async/await operation later on
watchEffect(() => {
    // console.table({
    //     page: pagination.currentPage,
    //     size: pagination.entrySize,
    //     sortOption: pagination.currentSort,
    //     filterOptions: pagination.filterOptions,
    // });
    updateData({
        page: pagination.currentPage,
        size: pagination.entrySize,
        sortOption: pagination.currentSort,
        filterOptions: pagination.filterOptions,
    });
});

// Importing types and dependencies
import { Table } from "types";

const handlePagination = (page: number) => {
    pagination.currentPage = page;
};

const handleFilter = (filterOptions: Array<Table.FilterOption>) => {
    pagination.currentPage = 1;
    pagination.filterOptions = filterOptions;
};

const handleSort = (sortOption: Table.CurrentSort) => {
    pagination.currentPage = 1;
    pagination.currentSort = sortOption;
};

const handleResize = (size: number) => {
    pagination.currentPage = 1;
    pagination.entrySize = size;
};
</script>
