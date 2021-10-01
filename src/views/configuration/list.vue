<template>
    <Layout>
        <section>
            <h5>Configuration List</h5>
            <router-link to="/config/add">
                <button class="btn-primary btn-sm float-right">
                    <FontAwesomeIcon :icon="icon.faPlus" class="mr-2" />Add
                    Configuration
                </button>
            </router-link>
        </section>
        <Card>
            <TableData
                :columns="tableConfig.columns"
                :entries="dataState.entries"
                :pagination="pagination"
                :total-rows="dataState.totalRows"
                @paginate="handlePagination"
                @filter="handleFilter"
                @sort="handleSort"
                @entry-resize="handleResize"
            >
                <template #row_name="{ entry }">{{ entry.name }}</template>
                <template #row_configStatus="{ entry }">
                    {{ entry.configStatus }}
                </template>
                <template #row_apiKey="{ entry }">
                    <div class="flex">
                        <ApiKey v-model="entry.apiKey" />
                    </div>
                </template>
                <template #row_dateAdded="{ entry }">
                    {{ entry.dateAdded }}
                </template>
                <template #row_action="{ entry }">
                    <button
                        type="button"
                        @click="showDetail(entry)"
                        class="btn-primary btn-sm"
                    >
                        Details
                    </button>
                </template>
            </TableData>
        </Card>
    </Layout>

    <!-- Modal -->
    <Modal
        v-model="detail.modal"
        size="md"
        title="Configuration details"
        :hideFooter="true"
    >
        <template v-slot:content>
            <div class="modal-control">
                <label>Name :</label>
                <span>{{ detail.value.name }}</span>
                <label>Description :</label>
                <span>{{ detail.value.description }}</span>
                <label>Status :</label>
                <span>{{ detail.value.configStatus }}</span>
                <label>API Key :</label>
                <ApiKey v-model="detail.value.apiKey" />
                <label>Date Added :</label>
                <span>{{ detail.value.dateAdded }}</span>
                <router-link
                    :to="
                        '/config/manage/' +
                        returnURI(detail.value.fpxConfigurationId)
                    "
                    class="row-end-7 col-end-4 place-self-end"
                >
                    <button class="btn-base btn-dark mt-4">Manage</button>
                </router-link>
            </div>
        </template>
    </Modal>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import ApiKey from "@/components/utils/apiKey.vue";
import TableData from "@/components/containers/TableData.vue";
import Modal from "@/components/containers/modal.vue";
import { reactive, watchEffect, computed, onMounted } from "vue";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import tableConfig from "@/sample/tableConfig.json";
import { GetDataProps } from "@/sample/configSample";
import API from "@/api";
// import { store } from "@/store";
// import auth from "@/store/modules/auth";
// import { useStore } from "vuex";
// const mutateAuth = auth.mutations;

// import { useStore } from "@/store";
// const { entries, totalRows } = getData({});

// const store = useStore();

// const auth = computed(() => store.state.auth);

onMounted(async () => {
    const list = await API.getConfigList();
    dataState.entries = list.data;
    dataState.totalRows = list.data.length;
    // console.log(auth.value);
    // store.commit("auth/UPDATE_AUTH", "Ghaffar");
    // console.log(auth.value);
});

// icon manager
const icon = computed(() => ({
    faPlus,
}));

const dataState = reactive({
    entries: [],
    totalRows: Number,
});

const detail = reactive({
    modal: false,
    value: {
        fpxConfigurationId: String,
        name: String,
        description: String,
        configStatus: String,
        apiKey: String,
        dateAdded: String,
    },
});

const returnURI = (val: any) => {
    return encodeURIComponent(val);
};

const showDetail = (data: any) => {
    detail.value = data;
    detail.modal = true;
};

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
    // const { entries: nextEntries, totalRows: nextTotalRows } = getData(params);
    // dataState.entries = nextEntries;
    // dataState.totalRows = nextTotalRows;
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

<style lang="postcss" scoped>
.modal-control {
    @apply grid grid-cols-3 items-center;
    label {
        @apply col-span-1 text-right mr-4;
    }
    span {
        @apply col-span-2;
    }
}
</style>
