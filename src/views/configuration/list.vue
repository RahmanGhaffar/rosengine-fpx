<template>
    <Layout>
        <section>
            <h5>Configuration List</h5>
            <router-link to="/config/add"
                ><button class="btn-primary btn-sm float-right">
                    <FontAwesomeIcon :icon="icon.faPlus" class="mr-2" />
                    Add Configuration
                </button></router-link
            >
        </section>
        <Card>
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
                    <button class="btn-primary btn-sm">Submit</button>
                </template>
            </TableData>
        </Card>
    </Layout>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import TableData from "@/components/containers/TableData.vue";
import { reactive, watchEffect, computed } from "vue";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/dataSample";

const { entries, totalRows } = getData({});

// icon manager
const icon = computed(() => ({
    faPlus,
}));

const dataState = reactive({
    entries,
    totalRows,
});

const tableConfig = reactive({
    columns: [
        {
            name: "name",
            label: "Name",
        },
        {
            name: "configStatus",
            label: "Status",
        },
        {
            name: "apiKey",
            label: "API Key",
        },
        {
            name: "dateAdded",
            label: "Date Added",
        },
        {
            name: "action",
            label: "Action",
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
