/** --------------------------------------------------
 *      BASIC COMPONENT
 --------------------------------------------------- */
export const buttonUsage = `<template>
    <button class="btn-primary btn-base">
        Submit
    </button>
</template>`;

/** --------------------------------------------------
 *      FORM COMPONENT
 --------------------------------------------------- */

export const formUsage = `<form @submit.prevent="handleSubmit">
    <Input />
    <Checkbox />
    <button type="submit" />
</form>

<script setup lang="ts">
const handleSubmit = ({ target }: { target: HTMLFormElement }) => {
    // All your inputs should be available inside \`target.elements\`
    // Can also be looped using \`Object.values(target.elements)\`
}
</script>`;

export const formUpdateEmit = `<template>
    <Input @update="handleInputUpdate" />
    <Checkbox @update="handleCheckboxUpdate" />
</template>

<script setup lang="ts">
const handleInputUpdate = ({ name, value }) => {
    // ...
}
const handleCheckboxUpdate = ({ name, value }) => {
    // ...
}
</script>`;

export const importInput = `<template>
    <Input
        id="test-input-1"
        label-position="float"
        label="Name"
    />
</template>

<script setup lang="ts">
import Input from "@/components/forms/Input.vue";
</script>`;

export const importCheckbox = `<template>
    <Checkbox
        id="checkbox-1"
        label="This the checkbox label"
        checkbox-position="left"
        :spaced="false"
        @update="handleUpdate"
    />
</template>

<script setup lang="ts">
import Checkbox from "@/components/forms/Checkbox.vue";
</script>`;

export const importDropdown = `<template>
    <Dropdown
        id="dropdown-1"
    />
</template>

<script setup lang="ts">
import Dropdown from "@/components/forms/Dropdown.vue";
</script>`;

/** --------------------------------------------------
 *      CONTAINER COMPONENT
 --------------------------------------------------- */

export const importCard = `<template>
    <Card title="Introduction">
        <!-- ...Your card content -->
    </Card>
</template>

<script setup lang="ts">
import Card from "@/components/containers/Card.vue";
</script>`;

export const tableSlot = `<template #row_[row name here]="{ entry }">
    {{ entry[key] }}
</template>`;

export const importTableBase = `<template>
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
</template>

<script setup lang="ts">
import TableBase from "@/components/containers/TableBase.vue";
</script>`;

export const importTableData = `<template>
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
</template>

<script setup lang="ts">
import TableData from "@/components/containers/TableData.vue";
</script>`;

/** --------------------------------------------------
 *      LAYOUT COMPONENT
 --------------------------------------------------- */

export const importDashboardLayout = `<template>
    <DashboardLayout>
        <!-- Your content -->
    </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from "@/components/layouts/Dashboard.vue";
</script>`;

export const importCardLayout = `<template>
    <CardLayout>
        <!-- Your content -->
    </CardLayout>
</template>

<script setup lang="ts">
import CardLayout from "@/components/layouts/Card.vue";
</script>`;
