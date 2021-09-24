<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h5>Transaction Report</h5>
        </section>
        <Card>
            <form @submit.prevent="searchReport" class>
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <div class="flex items-baseline input-group">
                            <!-- Date Input -->
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
                            <!-- Date Input -->
                            <label class="flex-1 max-w-input-label">To</label>
                            <flat-pickr
                                v-model="searchForm.to"
                                :config="searchForm.config"
                                class
                                placeholder="Select datetime"
                                name="date"
                            />
                        </div>

                        <Dropdown
                            id="exchangeId"
                            labelPosition="side"
                            label="Exchange ID"
                            :options="optionItems.exchangeId"
                        >
                            <template #options="{ option }"
                                >Test - {{ option.label }}</template
                            >
                        </Dropdown>

                        <div
                            class="
                                grid
                                sm:grid-cols-1
                                md:grid-cols-4
                                gap-4
                                w-full
                            "
                        >
                            <label class="col-span-1">Transaction Status</label>
                            <div
                                class="
                                    flex
                                    col-span-3
                                    flex-col
                                    gap-4
                                    md:flex-row
                                    w-full
                                "
                            >
                                <Checkbox
                                    id="cbStatus"
                                    label="Successful"
                                    checkbox-position="right"
                                    :spaced="true"
                                />
                                <Checkbox
                                    id="cbStatus"
                                    label="Pending"
                                    checkbox-position="right"
                                    :spaced="true"
                                />
                                <Checkbox
                                    id="cbStatus"
                                    label="Unsuccessful"
                                    checkbox-position="right"
                                    :spaced="true"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 flex-1 min-w-mobile">
                        <Dropdown
                            id="sellerId"
                            labelPosition="side"
                            label="Seller ID"
                            :options="optionItems.sellerId"
                        />
                        <Input
                            id="statusInput"
                            label-position="side"
                            label="FPX Transaction ID"
                        />
                        <Input
                            id="statusInput"
                            label-position="side"
                            label="Merchant Transaction ID"
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
                <template #row_triggerDateTime="{ entry }">
                    <span class="whitespace-nowrap">{{
                        entry.triggerDateTime
                    }}</span>
                </template>
                <template #row_fpxTransactionId="{ entry }">
                    {{ entry.fpxTransactionId }}
                </template>
                <template #row_merchantTransactionId="{ entry }">
                    {{ entry.merchantTransactionId }}
                </template>
                <template #row_amount="{ entry }">{{ entry.amount }}</template>
                <template #row_reportStatus="{ entry }">
                    <span class="whitespace-nowrap">
                        <FontAwesomeIcon
                            :icon="faCircle"
                            flip="horizontal"
                            :class="{
                                'icon-green':
                                    entry.reportStatus === 'Successful',
                                'icon-red':
                                    entry.reportStatus === 'Unsuccessful',
                            }"
                        />
                        {{ entry.reportStatus }}
                    </span>
                </template>
                <template #row_reportReason="{ entry }">
                    <span class="whitespace-nowrap">{{
                        entry.reportReason
                    }}</span>
                </template>
                <template #row_statusDatetime="{ entry }">
                    <span class="whitespace-nowrap">{{
                        entry.statusDatetime
                    }}</span>
                </template>
                <template #row_buyerBank="{ entry }">
                    <span class="whitespace-nowrap">{{ entry.buyerBank }}</span>
                </template>
                <template #row_buyerName="{ entry }">
                    <span class="whitespace-nowrap">{{ entry.buyerName }}</span>
                </template>
                <template #row_buyerEmail="{ entry }">
                    {{ entry.buyerEmail }}
                </template>
                <template #row_exchangeId="{ entry }">
                    <span class="whitespace-nowrap">{{
                        entry.exchangeId
                    }}</span>
                </template>
                <template #row_sellerId="{ entry }">
                    <span class="whitespace-nowrap">{{ entry.sellerId }}</span>
                </template>
                <template #row_configuration="{ entry }">
                    <span class="whitespace-nowrap">{{
                        entry.configuration
                    }}</span>
                </template>
                <template #row_action="{ entry }">
                    <button
                        type="button"
                        class="btn-light btn-sm"
                        @click="viewDetail(entry)"
                    >
                        View
                    </button>
                </template>
            </TableData>
        </Card>

        <!-- detail modal -->
        <Modal v-model="detail.modal" size="lg" :hideFooter="true">
            <template v-slot:content>
                <!-- Detail -->
                <div class="grid grid-cols-2 gap-4 mb-8">
                    <div class="col-span-1">
                        <div class="div-group">
                            <label>FPX Transaction ID :</label>
                            <span>{{ detail.value.fpxTransactionId }}</span>
                        </div>
                        <div class="div-group">
                            <label>Merchant Transaction ID :</label>
                            <span>{{
                                detail.value.merchantTransactionId
                            }}</span>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="div-group">
                            <label>Status :</label>
                            <span
                                :class="{
                                    'text-red':
                                        detail.value.reportStatus ===
                                        'Unsuccessful',
                                    'text-green':
                                        detail.value.reportStatus ===
                                        'Successful',
                                }"
                                >{{ detail.value.reportStatus }}</span
                            >
                        </div>
                        <div class="div-group">
                            <label>Reason :</label>
                            <span>{{ detail.value.reportReason }}</span>
                        </div>
                    </div>
                </div>

                <!-- Bank Detail -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <div class="div-group">
                            <label>Buyer Bank :</label>
                            <span>{{ detail.value.buyerBank }}</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="col-span-1">
                        <div class="div-group">
                            <label>Exchange ID :</label>
                            <span>{{ detail.value.exchangeId }}</span>
                        </div>
                        <div class="div-group">
                            <label>Seller ID :</label>
                            <span>{{ detail.value.sellerId }}</span>
                        </div>
                        <div class="div-group">
                            <label>Trigger Date :</label>
                            <span>{{ detail.value.triggerDateTime }}</span>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="div-group">
                            <label>Buyer Name :</label>
                            <span>{{ detail.value.buyerName }}</span>
                        </div>
                        <div class="div-group">
                            <label>Amount (RM) :</label>
                            <span>{{ detail.value.amount }}</span>
                        </div>
                        <div class="div-group">
                            <label>Status Date :</label>
                            <span>{{ detail.value.statusDatetime }}</span>
                        </div>
                    </div>
                </div>

                <!-- Logs Detail -->
                <div class="grid grid-cols-12 gap-4">
                    <label class="col-span-2 text-right">Logs :</label>
                    <div class="flex flex-col col-span-10">
                        <span
                            >16/03/2021 10:23:41 - Transaction request
                            received.</span
                        >
                        <span>
                            16/03/2021 10:23:46 - Transaction request sent to
                            FPX
                        </span>
                        <span
                            >16/03/2021 10:35:02 - Processing Transaction</span
                        >
                        <span>16/03/2021 10:35:30 - Transaction failed</span>
                        <span>16/03/2021 10:35:52 - Callback sent</span>
                    </div>
                </div>
            </template>
        </Modal>
    </Layout>
</template>

<script setup lang="ts">
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Importing components
import Checkbox from "@/components/forms/Checkbox.vue";
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import TableData from "@/components/containers/TableData.vue";
import Input from "@/components/forms/Input.vue";
import Dropdown from "@/components/forms/Dropdown.vue";
import Modal from "@/components/containers/modal.vue";
import { reactive, watchEffect } from "vue";
// import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/reportSample";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

const detail = reactive({
    modal: false,
    value: {
        fpxTransactionId: "",
        merchantTransactionId: "",
        reportStatus: "",
        statusDatetime: "",
        amount: "",
        buyerName: "",
        triggerDateTime: "",
        sellerId: "",
        exchangeId: "",
        buyerBank: "",
        reportReason: "",
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const viewDetail = (report: any) => {
    detail.value = report;
    detail.modal = true;
};

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
            name: "buyerBank",
            label: "Buyer Bank",
        },
        {
            name: "buyerName",
            label: "Buyer Name",
        },
        {
            name: "buyerEmail",
            label: "Buyer Email",
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

const optionItems = reactive({
    exchangeId: [
        {
            value: "EX00001",
            label: "EX0001 - TOYYIBPAY SDN BHD",
        },
        {
            value: "EX00002",
            label: "EX00002 - ANSI SYSTEMS SDN BHD",
        },
    ],
    sellerId: [
        {
            value: "SE00001",
            label: "SE00001 - TOYYIBPAY SDN BHD",
        },
        {
            value: "SE00002",
            label: "SE00002 - ANSI SYSTEMS SDN BHD",
        },
    ],
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

/* icon */
.icon-green {
    color: #43d39e;
}

.icon-red {
    color: #ff5c75;
}

/* text */
.text-red {
    color: #ff5c75;
}

.text-green {
    color: #43d39e;
}

/* Group Div */
.div-group {
    @apply grid grid-cols-3 gap-4;

    label {
        @apply text-right;
    }
    span {
        @apply col-span-2;
    }
}
</style>
