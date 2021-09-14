<template>
    <div class="overflow-x-auto min-w-0 max-w-full">
        <table class="w-full table-auto">
            <thead>
                <tr>
                    <th v-if="props.checkable" width="50" />
                    <th
                        v-for="th in props.columns"
                        :key="th.name"
                        class="px-4 py-2"
                        :abbr="th.label"
                        :width="th.width || 'auto'"
                    >
                        <div
                            class="
                                flex flex-row
                                items-center
                                gap-2
                                justify-between
                            "
                        >
                            <p>{{ th.label }}</p>
                            <button
                                v-if="th.sortable"
                                name="sort"
                                :value="th.name"
                            >
                                {{
                                    th.name === props.currentSort.column
                                        ? props.currentSort.order
                                        : "Sort"
                                }}
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="props.entries.length === 0">
                    <td :colspan="props.columns.length">
                        <div class="flex flex-col items-center">
                            There is no data
                        </div>
                    </td>
                </tr>
                <tr v-for="td in props.entries" :key="td.id">
                    <td v-if="props.checkable">
                        <input
                            type="checkbox"
                            :id="td.id"
                            name="table-row-check"
                            :value="td.id"
                            @change="handleCheck"
                        />
                    </td>
                    <td v-for="column in props.columns" :key="column.name">
                        <slot :name="`row_${column.name}`" :entry="td" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Table } from "types";
import { defineProps, withDefaults } from "vue";

type Props = {
    columns?: Array<Table.Column>;
    entries?: Array<Table.Entry>;
    currentSort?: Table.CurrentSort;
    checkable?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    columns: () => [],
    entries: () => [],
    currentSort: () => ({
        column: "id",
        order: "asc",
    }),
    checkable: false,
});
</script>
