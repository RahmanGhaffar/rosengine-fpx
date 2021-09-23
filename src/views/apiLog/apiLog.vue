<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>API Log</h5>
        </section>
        <Card>
            <form @submit.prevent="searchReport" class>
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <div class="flex items-baseline input-group">
                            <label class="flex-1 max-w-input-label">From</label>
                            <flat-pickr
                                v-model="searchForm.from"
                                :config="searchForm.config"
                                class
                                placeholder="Select datetime"
                                name="date"
                            />
                        </div>

                        <div class="flex items-baseline input-group">
                            <label class="flex-1 max-w-input-label">To</label>
                            <flat-pickr
                                v-model="searchForm.to"
                                :config="searchForm.config"
                                class
                                placeholder="Select datetime"
                                name="date"
                            />
                        </div>

                        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
                            <label class="max-w-input-label col-span-1"
                                >Type</label
                            >
                            <div class="col-span-3 mr-4">
                                <div
                                    class="
                                        grid
                                        md:grid-cols-2
                                        sm:grid-cols-1
                                        gap-2
                                    "
                                >
                                    <Checkbox
                                        id="cbType"
                                        label="inbound from system"
                                        checkbox-position="right"
                                        :spaced="true"
                                        class
                                    />
                                    <Checkbox
                                        id="cbType"
                                        label="outbound to system"
                                        checkbox-position="right"
                                        :spaced="true"
                                        class
                                    />
                                    <Checkbox
                                        id="cbType"
                                        label="inbound from provider"
                                        checkbox-position="right"
                                        :spaced="true"
                                        class
                                    />
                                    <Checkbox
                                        id="cbType"
                                        label="outbound to provider"
                                        checkbox-position="right"
                                        :spaced="true"
                                        class
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <Dropdown
                            id="triggerSystem"
                            label="Trigger System"
                            labelPosition="side"
                            :options="dropdown.triggerOptions"
                        />

                        <Dropdown
                            id="sendAddress"
                            label="Send Address"
                            labelPosition="side"
                            :options="dropdown.sendAddressOptions"
                        />
                    </div>
                </div>

                <div class="flex justify-between mt-3">
                    <button type="reset" class="btn-light btn-base">
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
                <template #row_logConfiguration="{ entry }">
                    {{ entry.logConfiguration }}
                </template>
                <template #row_logType="{ entry }">
                    {{ entry.logType }}
                </template>
                <template #row_exchangeId="{ entry }">
                    {{ entry.exchangeId }}
                </template>
                <template #row_sellerId="{ entry }">
                    {{ entry.sellerId }}
                </template>
                <template #row_logDate="{ entry }">
                    {{ entry.logDate }}
                </template>
                <template #row_action>
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
import { reactive, watchEffect } from "vue";
// import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/apiLogSample";
import Dropdown from "@/components/forms/Dropdown.vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const { entries, totalRows } = getData({});

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
const dropdown = {
    triggerOptions: [
        {
            label: "Ansi Systems",
            value: "Configuration 1",
        },
        {
            label: "toyyibPay",
            value: "Configuration 2",
        },
        {
            label: "Artificial intelligence",
            value: "Configuration 3",
        },
    ],
    sendAddressOptions: [
        {
            label: "send1@address.com",
            value: "Configuration 1",
        },
        {
            label: "send2@address.com",
            value: "Configuration 2",
        },
        {
            label: "send3@address.com",
            value: "Configuration 3",
        },
    ],
};
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
