<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Table</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Table Base is the base of table component, where you can
                    display rows of tabular data.
                </p>
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ importTableBase }}
                    </code-highlight>
                </div>
            </Card>
            <Card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>TableBase</code> component:
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
                                <td><code>currentSort</code></td>
                                <td>
                                    <pre class="code">{{
                                        currentSortType
                                    }}</pre>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs"></td>
                            </tr>
                            <tr>
                                <td><code>checkable</code></td>
                                <td><code>boolean</code></td>
                                <td><code>false</code></td>
                                <td><code>false</code></td>
                                <td>Adding checkbox at start of table</td>
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
                    <template #row_action>
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
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import { reactive } from "vue";
import tableConfig from "@/sample/tableConfig2.json";
import { getData } from "@/sample/dataSample";
import { importTableBase, tableSlot } from "@/sample/codeSample";

const { entries, totalRows } = getData({});

const dataState = reactive({
    entries,
    totalRows,
});

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

const currentSortType = `{
    column: string,
    order: "asc" | "desc",
}`;
</script>
