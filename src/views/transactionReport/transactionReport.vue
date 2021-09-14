<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>Transaction Report</h5>
        </section>
        <Card>
            <form @submit.prevent="searchReport" class="">
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <div class="flex items-baseline input-group">
                            <!-- Date Input -->
                            <label class="flex-1 max-w-input-label">From</label>
                            <flat-pickr
                                v-model="searchForm.from"
                                :config="searchForm.config"
                                class=""
                                placeholder="Select date"
                                name="date"
                            />
                        </div>

                        <div class="flex items-baseline input-group">
                            <!-- Date Input -->
                            <label class="flex-1 max-w-input-label">To</label>
                            <flat-pickr
                                v-model="searchForm.to"
                                :config="searchForm.config"
                                class=""
                                placeholder="Select date"
                                name="date"
                            />
                        </div>

                        <Input
                            id="exchangeInput"
                            label-position="side"
                            label="Exchange ID"
                        />
                        <div class="grid md:grid-cols-2 lg:grid-cols-4">
                            <label class="max-w-input-label md:row-span-3"
                                >Transaction Status</label
                            >
                            <Checkbox
                                id="cbStatus"
                                label="Successful"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="flex-1"
                            />
                            <Checkbox
                                id="cbStatus"
                                label="Pending"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="flex-1"
                            />
                            <Checkbox
                                id="cbStatus"
                                label="Unsuccessful"
                                checkbox-position="right"
                                :spaced="false"
                                @update="handleUpdate"
                                class="flex-1"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <Input
                            id="statusInput"
                            label-position="side"
                            label="Seller ID (Dropdown)"
                        /><Input
                            id="statusInput"
                            label-position="side"
                            label="FPX Transaction ID"
                        /><Input
                            id="statusInput"
                            label-position="side"
                            label="Merchant Transaction ID"
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
                    <button class="btn-primary btn-sm">Submit</button>
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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

const tableConfig = reactive({
    columns: [
        {
            name: "triggerDateTime",
            label: "Trigger Date Time",
            field: "triggerDateTime",
        },
        {
            name: "fpxTransactionId",
            label: "FPX Transaction ID",
            field: "fpxTransactionId",
        },
        {
            name: "merchantTransactionId",
            label: "Merchant Transaction ID",
            field: "merchantTransactionId",
        },
        {
            name: "amount",
            label: "Amount (RM)",
            field: "amount",
        },
        {
            name: "reportStatus",
            label: "Status",
        },
        {
            name: "reportReason",
            label: "Reason",
        },
        {
            name: "statusDatetime",
            label: "Status Date Time",
        },
        {
            name: "buyer Bank",
            label: "Buyer Bank",
        },
        {
            name: "buyerBank",
            label: "Buyer Bank",
        },
        {
            name: "buyerName",
            label: "Buyer Name",
        },
        {
            name: "buyerEmail",
            label: "Exchange ID",
        },
        {
            name: "selerId",
            label: "Seller ID",
        },
        {
            name: "configuration",
            label: "Configuration",
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

// serach Form Function
const searchForm = reactive({
    isOpen: false,
    from: "",
    to: "",
    config: {
        dateFormat: "Y-m-d H:i",
        enableTime: true,
    },
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

<style scoped lang="postcss">
.input-group {
    @apply mr-4;

    & >>> input {
        @apply border rounded-md border-light-500 py-2 px-4 flex-1 w-full min-w-input outline-none transition-all duration-300 ease-in-out;
        @apply hover:border-light-600 focus:border-primary-300 focus:shadow-focus;
    }
}
</style>
