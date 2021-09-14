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
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ importTableData }}
                    </code-highlight>
                </div>
            </Card>
            <Card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>Input</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Props</td>
                                <td>Type</td>
                                <td>Default value</td>
                                <td>Required</td>
                                <td class="w-1/3">Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>columns</code></td>
                                <td>
                                    <pre class="code">{{ columnType }}</pre>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    For defining columns. If not passed, no
                                    column will be rendered.
                                    <code>name</code> is important to match with
                                    slots inside <code>&lt;TableBase&gt;</code>.
                                </td>
                            </tr>
                            <tr>
                                <td><code>entries</code></td>
                                <td>
                                    <pre class="code">{{ entriesType }}</pre>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    Your array of data, requiring id for each
                                    row. If nothing or empty array passed, the
                                    table will display "no data".
                                </td>
                            </tr>
                            <tr>
                                <td><code>pagination</code></td>
                                <td>
                                    <pre class="code">{{ paginationType }}</pre>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    This configuration is needed for pagination.
                                    This later can be saved as config for other
                                    uses such as sharing data.
                                </td>
                            </tr>
                            <tr>
                                <td><code>totalRows</code></td>
                                <td><code>number</code></td>
                                <td><code>0</code></td>
                                <td><code>false</code></td>
                                <td>Total rows inside database or dataset.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Emits">
                <p>
                    Here are the list of available emits for
                    <code>TableData</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Emit</td>
                                <td>Parameters</td>
                                <td class="w-1/3">Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>paginate</code></td>
                                <td>
                                    <pre class="code"></pre>
                                </td>
                                <td>Returning page navigation information.</td>
                            </tr>
                            <tr>
                                <td><code>filter</code></td>
                                <td>
                                    <pre class="code"></pre>
                                </td>
                                <td>
                                    Returning array of filters supplied by the
                                    user.
                                </td>
                            </tr>
                            <tr>
                                <td><code>sort</code></td>
                                <td>
                                    <pre class="code"></pre>
                                </td>
                                <td>
                                    Returning current sort column and order.
                                </td>
                            </tr>
                            <tr>
                                <td><code>entryResize</code></td>
                                <td>
                                    <pre class="code"></pre>
                                </td>
                                <td>Returning value of selected entry size.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Slots">
                <p>
                    To render each row, <code>slot</code> is used. The template
                    should be as below.
                </p>
                <div class="max-w-3xl mb-8">
                    <code-highlight languange="typescript">
                        {{ tableSlot }}
                    </code-highlight>
                </div>
                <p>Here are important note on the table slots:</p>
                <ul>
                    <li>
                        Replace <code>row name here</code> with defined column
                        name inside <code>columns</code>. This is important as
                        the table will arrange the columns for you, so the
                        arrangement doesn't matter.
                    </li>
                    <li>
                        <code>{ entry }</code> indicates that your data that
                        passed through <code>entries</code> are exposed here.
                        You can also omit if you don't want to use it
                    </li>
                    <li>
                        You can replace <code>[key]</code> to your data keys,
                        e.g. <code>entry['username']</code>
                    </li>
                    <li>
                        You can also put other than data, such as button, or
                        label, or any component inside as well! Refer to top
                        example, on <code>&lt;template #row_action&gt;</code>
                    </li>
                </ul>

                <p>You can also refer to the top example to get started!</p>
            </Card>
            <Card title="Sample Data">
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
        </section>
    </Layout>
</template>

<script setup lang="ts">
// Importing components
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import TableData from "@/components/containers/TableData.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import { reactive, watchEffect } from "vue";
import tableConfig from "@/sample/tableConfig.json";
import { getData, GetDataProps } from "@/sample/dataSample";
import { importTableData, tableSlot } from "@/sample/codeSample";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
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

const columnType = `Array<{
    name: string,
    label: string,
    sortable?: boolean,
    width?: string,
    field?: string,
    filterable?: boolean,
}>`;

const entriesType = `Array<{
    id: string,
    // Your data
}>`;

const paginationType = `{
    currentPage: number,
    entrySize: number,
    showEntries: Array<number>,
    currentSort: {
        column: string,
        order: "asc" | "desc",
    },
    checkable: boolean,
    filterOptions: Array<{
        filterId: number,
        column: string,
        match: boolean,
        value: string,
    }>,
}`;
</script>
