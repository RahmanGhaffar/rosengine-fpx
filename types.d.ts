export declare namespace Table {
    type Column = {
        name: string;
        label: string;
        sortable?: boolean;
        // Allow fixed width declaration
        width?: string;
        // To match it with data structure
        field?: string;
        filterable?: boolean;
        // Allow dynamic display alternative
        // display?: unknown;
    };

    type Entry = {
        id: string;
        [key: string]: string | number | undefined;
    };

    type CurrentSort = {
        column: string;
        order: "asc" | "desc";
    };

    type Pagination = {
        currentPage: number;
        entrySize: number;
        showEntries: Array<number>;
        currentSort: CurrentSort;
        checkable?: boolean;
        filterOptions?: Array<FilterOption>;
    };

    type Config = {
        columns?: Array<Column>;
        entries?: Array<Entry>;
        pagination: Pagination;
        totalRows?: number;
    };

    type FilterOption = {
        filterId: number;
        column: string;
        match: boolean;
        value: string;
    };
}
