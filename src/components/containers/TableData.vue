<template>
    <form class="flex flex-col gap-8" @submit.prevent="handleSubmit">
        <div class="filter" :data-open="filterOptions.length !== 0">
            <div
                class="
                    flex flex-row
                    gap-x-8 gap-y-4
                    justify-between
                    items-start
                "
            >
                <div class="flex flex-col">
                    <h4>Filter</h4>
                    <p class="text-light-700 text-sm mb-4">
                        Set the conditions to apply to filter the entries
                    </p>
                </div>
                <div class="flex flex-row gap-4">
                    <button class="btn-light btn-base" name="filter">
                        Clear All
                    </button>
                    <button class="btn-primary btn-base" name="applyFilter">
                        Apply
                    </button>
                </div>
            </div>
            <div
                v-for="filterOption in filterOptions"
                :key="filterOption.filterId"
                class="flex flex-row gap-4 items-center filter-row"
            >
                <button name="removeFilter" :value="filterOption.filterId">
                    <FontAwesomeIcon :icon="faMinus" />
                </button>
                <select
                    name="filter-column"
                    :id="`filter-column-${filterOption.filterId}`"
                >
                    <option
                        v-for="column in columns.filter(
                            (column) => column.filterable
                        )"
                        :key="column.name"
                        :value="column.name"
                        :selected="column === filterOption.column"
                    >
                        {{ column.label }}
                    </option>
                </select>
                <select
                    name="filter-match"
                    :id="`filter-match-${filterOption.filterId}`"
                >
                    <!-- TODO: More options -->
                    <option :value="true" :selected="filterOption.match">
                        is
                    </option>
                    <option :value="false" :selected="!filterOption.match">
                        is not
                    </option>
                </select>
                <!-- TODO: Depends on column type -->
                <!-- Maybe considering constructing column model? -->
                <Input
                    :id="`filter-value-${filterOption.filterId}`"
                    name="filter-value"
                    :defaultValue="filterOption.value"
                />
                <button name="addFilter">
                    <FontAwesomeIcon :icon="faPlus" />
                </button>
            </div>
        </div>
        <div class="flex flex-row flex-wrap gap-4 items-start">
            <button
                class="btn-light btn-base flex flex-row gap-2 items-center"
                name="filter"
            >
                <FontAwesomeIcon :icon="faFilter" />
                Filter
            </button>
            <div class="flex flex-row flex-wrap gap-4 max-w-md">
                <div
                    class="filter-applied"
                    v-for="(appliedFilter, index) in appliedFilterOptions"
                    :key="`applied-${index}`"
                >
                    <p>{{ appliedFilter.column }}</p>
                    <p>{{ appliedFilter.match ? "is" : "is not" }}</p>
                    <p>{{ appliedFilter.value }}</p>
                    <div class="w-px h-6 bg-primary-200 mx-2" />
                    <button
                        name="removeApplied"
                        :value="appliedFilter.filterId"
                    >
                        <FontAwesomeIcon :icon="faTimes" />
                    </button>
                </div>
            </div>
            <button class="btn-danger btn-base ml-auto" name="delete">
                Delete
            </button>
        </div>
        <TableBase
            :columns="props.columns"
            :entries="props.entries"
            :currentSort="props.pagination.currentSort"
            :checkable="props.pagination.checkable"
        >
            <template v-for="(_, slot) in $slots" v-slot:[slot]="{ entry }">
                <slot
                    v-if="slot.startsWith('row_')"
                    :name="slot"
                    :entry="entry"
                />
            </template>
        </TableBase>
        <div
            class="
                pagination
                flex flex-row
                gap-4
                justify-start
                items-center
                px-4
            "
        >
            <p>
                Showing {{ pageInfo.from }} to {{ pageInfo.to }} of
                {{ pageInfo.total }} entries
            </p>
            |
            <div class="flex flex-row items-center gap-4 pagination">
                <p>Show</p>
                <select
                    name="entries-size"
                    id="entries-size"
                    @change="handleResize"
                >
                    <option
                        v-for="entrySize in props.pagination.showEntries"
                        :key="entrySize"
                        :value="entrySize"
                        :selected="entrySize === props.pagination.entrySize"
                    >
                        {{ entrySize.toString() }}
                    </option>
                </select>
            </div>
            <div class="nav ml-auto flex flex-row gap-2">
                <button
                    name="page-nav"
                    :value="1"
                    :disabled="Number(props.pagination.currentPage) === 1"
                >
                    <FontAwesomeIcon :icon="faAngleDoubleLeft" />
                </button>
                <button
                    name="page-nav"
                    :value="Number(props.pagination.currentPage) - 1"
                    :disabled="Number(props.pagination.currentPage) === 1"
                >
                    <FontAwesomeIcon :icon="faChevronLeft" />
                </button>
                <button
                    v-for="page in availablePages"
                    name="page-nav"
                    :value="page"
                    :key="page"
                    :data-active="page === Number(props.pagination.currentPage)"
                >
                    {{ page }}
                </button>
                <button
                    name="page-nav"
                    :value="Number(props.pagination.currentPage) + 1"
                    :disabled="
                        Number(props.pagination.currentPage) ===
                        pageInfo.totalPage
                    "
                >
                    <FontAwesomeIcon :icon="faChevronRight" />
                </button>
                <button
                    name="page-nav"
                    :value="pageInfo.totalPage"
                    :disabled="
                        Number(props.pagination.currentPage) ===
                        pageInfo.totalPage
                    "
                >
                    <FontAwesomeIcon :icon="faAngleDoubleRight" />
                </button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { Table } from "types";
// eslint-disable-next-line prettier/prettier
import {
    computed,
    defineProps,
    withDefaults,
    defineEmits,
    ref,
    SelectHTMLAttributes,
} from "vue";
import {
    faPlus,
    faTimes,
    faMinus,
    faFilter,
    faChevronLeft,
    faChevronRight,
    faAngleDoubleLeft,
    faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TableBase from "./TableBase.vue";
import Input from "@/components/forms/Input.vue";

type Props = {
    columns?: Array<Table.Column>;
    entries?: Array<Table.Entry>;
    pagination: Table.Pagination;
    totalRows?: number;
};

const props = withDefaults(defineProps<Props>(), {
    columns: () => [],
    entries: () => [],
    pagination: () => ({
        currentPage: 1,
        entrySize: 10,
        showEntries: [5, 10, 25, 100],
        currentSort: { column: "id", order: "asc" },
    }),
    totalRows: 0,
});

type Emits = {
    (e: "paginate", page: number): void;
    (e: "filter", filterOptions: Array<Table.FilterOption>): void;
    (e: "sort", sortOption: Table.CurrentSort): void;
    (e: "entryResize", size: number): void;
    // (e: "customAction", rowsId: Array<string | number>): void;
};

const emit = defineEmits<Emits>();

const filterOptions = ref<Array<Table.FilterOption>>([]);
const appliedFilterOptions = ref<Array<Table.FilterOption>>([]);

const maxTo = computed(
    () => props.pagination.entrySize * props.pagination.currentPage
);

const pageInfo = computed(() => ({
    from: props.pagination.entrySize * (props.pagination.currentPage - 1) + 1,
    to: maxTo.value > props.totalRows ? props.totalRows : maxTo,
    total: props.totalRows,
    totalPage: Math.ceil(props.totalRows / props.pagination.entrySize),
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const availablePages = computed<Array<number>>(() => {
    const currentPage = props.pagination.currentPage;
    const maxPage = pageInfo.value.totalPage;
    const minRange = currentPage - 2;
    const maxRange = currentPage + 2;

    const min = minRange < 1 ? 1 : minRange;
    const max = maxRange > maxPage ? maxPage : maxRange;

    const diff = max - min + 1;

    const pageArray = Array(diff)
        .fill(0)
        .map((value, index) => min + index);

    return pageArray;
});

type FormAction = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: (payload?: any) => any;
};

// TODO: Code Splitting
const generateId = (): number => {
    return Math.ceil(Math.random() * 1000000);
};

const formAction: FormAction = {
    filter: () => {
        if (
            appliedFilterOptions.value.length !== 0 &&
            filterOptions.value.length === 0
        ) {
            filterOptions.value = JSON.parse(
                JSON.stringify(appliedFilterOptions.value)
            );
            return;
        }
        if (filterOptions.value.length !== 0) {
            filterOptions.value = [];
            return;
        }
        filterOptions.value.push({
            filterId: generateId(),
            column: "",
            match: true,
            value: "",
        });
    },
    addFilter: () => {
        filterOptions.value.push({
            filterId: generateId(),
            column: "",
            match: true,
            value: "",
        });
    },
    removeFilter: (filterId: number) => {
        const prevFilterOptions = JSON.parse(
            JSON.stringify(filterOptions.value)
        );
        filterOptions.value = prevFilterOptions.filter(
            (option: Table.FilterOption) => {
                return option.filterId.toString() !== filterId.toString();
            }
        );
    },
    applyFilter: (form: HTMLFormElement) => {
        const filterColumn: Array<HTMLSelectElement> = Object.values(
            form.srcElement.elements["filter-column"]
        );
        const filterMatch: Array<HTMLSelectElement> = Object.values(
            form.srcElement.elements["filter-match"]
        );
        const filterValue: Array<HTMLInputElement> = Object.values(
            form.srcElement.elements["filter-value"]
        );

        const filters = filterValue
            // Remove all falsy value
            // but this need more consideration after applying boolean later on
            .filter((value) => Boolean(value.value))
            .map((value, index) => ({
                filterId: Number(value.id.split("-")[2]),
                column: filterColumn[index].value,
                match: filterMatch[index].value.toLowerCase() === "true",
                value: value.value,
            }));
        appliedFilterOptions.value = filters;
        emit("filter", filters);
        filterOptions.value = [];
    },
    removeApplied: (filterId: number) => {
        const prevFilterOptions = JSON.parse(
            JSON.stringify(appliedFilterOptions.value)
        );

        appliedFilterOptions.value = prevFilterOptions.filter(
            (option: Table.FilterOption) => {
                return option.filterId.toString() !== filterId.toString();
            }
        );

        emit("filter", JSON.parse(JSON.stringify(appliedFilterOptions.value)));
    },
    "page-nav": (page: number) => {
        emit("paginate", page);
    },
    sort: (sortParam: string) => {
        const { column: prevColumn, order: prevOrder } =
            props.pagination.currentSort;
        const nextSort: Table.CurrentSort = {
            column: sortParam,
            order: "asc",
        };
        if (prevColumn === sortParam) {
            nextSort.order = prevOrder === "asc" ? "desc" : "asc";
        } else nextSort.order = "asc";

        console.log(nextSort);
        emit("sort", nextSort);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete: (data: Array<any>) => {
        console.log(`Deleting ${data.join(", ")}`);
    },
};

const handleResize = ({ target }: { target: SelectHTMLAttributes }) => {
    emit("entryResize", Number(target.value));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleSubmit = (element: HTMLFormElement) => {
    const { name, value } = element.submitter;
    if (name === "page-nav") formAction[name](value);
    else if (name === "delete") {
        const checked = Object.values(
            element.srcElement.elements["table-row-check"]
        )
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((element: any) => element.checked)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((checked: any) => checked.value);
        formAction.delete(checked);
    } else if (name === "sort") {
        // console.log(value);
        formAction.sort(value);
    } else if (name === "applyFilter") {
        formAction.applyFilter(element);
    } else formAction[name](value);
};
</script>

<style lang="postcss" scoped>
.pagination {
    .nav {
        button {
            @apply rounded-full ring-1 ring-light-300 w-8 h-8 flex justify-center items-center hover:bg-light-300 disabled:bg-light-300 disabled:text-light-700;
            &[data-active="true"] {
                @apply ring-0 bg-primary-500 text-white;
            }
        }
    }
}

.filter {
    @apply flex flex-col px-8 overflow-auto max-h-0 transition-all duration-300 ease-in-out bg-light-300 rounded opacity-0;
    &[data-open="true"] {
        @apply max-h-96 py-4 shadow opacity-100;
    }

    &-row {
        button {
            @apply w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center;
        }
    }

    &-applied {
        @apply bg-primary-100 px-4 py-2 rounded flex flex-row gap-2 items-center;
    }
}
</style>
