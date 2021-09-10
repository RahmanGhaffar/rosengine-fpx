/* eslint-disable */
<template>
    <div
        class="checkbox"
        :class="[
            checkboxProps.wrapperClass,
            {
                checkbox_right: checkboxProps.checkboxPosition === 'right',
                checkbox_left: checkboxProps.checkboxPosition === 'left',
                checkbox_spaced: checkboxProps.spaced,
            },
        ]"
    >
        <label :for="checkboxProps.id">{{ checkboxProps.label }}</label>
        <input
            type="checkbox"
            v-bind="checkboxProps.inputAttrs"
            :name="checkboxProps.name"
            :id="checkboxProps.id"
            :checked="checkboxState.checked"
            :class="checkboxClass"
            @change="handleCheck"
        />
        <span @click="handleCheck" />
    </div>
</template>

<script setup lang="ts">
import {
    reactive,
    defineProps,
    InputHTMLAttributes,
    defineEmits,
    withDefaults,
} from "vue";

type CheckboxState = {
    checked: boolean;
};

type CheckboxProps = {
    id: string;
    checkboxPosition?: "left" | "right";
    defaultValue?: boolean;
    spaced?: boolean;
    label?: string;
    wrapperClass?: string;
    checkboxClass?: string;
    inputAttrs?: InputHTMLAttributes;
};

type CheckboxEmits = {
    (
        e: "update",
        payload: {
            name: string;
            value: boolean;
        }
    ): void;
};

const checkboxProps = withDefaults(defineProps<CheckboxProps>(), {
    checkboxPosition: "left",
    defaultValue: false,
    spaced: false,
});

const checkboxEmits = defineEmits<CheckboxEmits>();

const checkboxState = reactive<CheckboxState>({
    checked: checkboxProps.defaultValue,
});

const handleCheck = ({ target }: { target: HTMLInputElement }) => {
    if (target.tagName === "INPUT") {
        checkboxState.checked = target.checked;
    } else {
        checkboxState.checked = !checkboxState.checked;
    }
    checkboxEmits("update", {
        name: checkboxProps.id,
        value: checkboxState.checked,
    });
};
</script>

<style lang="postcss">
.checkbox {
    @apply flex gap-2 cursor-pointer;
    label {
        @apply cursor-pointer select-none;
    }

    input {
        @apply opacity-0 w-0 h-0;
        &:focus ~ span {
            @apply bg-light-500;
        }
        &:focus:checked ~ span {
            @apply shadow-focus;
        }
    }

    span {
        @apply relative top-0 h-6 w-6 bg-white rounded transition-colors duration-300 ease-in-out ring-2 ring-light-500;
        &:after {
            content: "";
            @apply absolute hidden left-2 top-1 w-2 h-3 border-white border-r-2 border-b-2 rotate-45;
        }
    }

    &:hover input ~ span {
        @apply bg-light-500;
    }

    &:hover input:checked ~ span {
        @apply shadow-focus;
    }

    input:checked ~ span {
        @apply bg-primary-500 ring-0;

        &:after {
            @apply block;
        }
    }

    &_left {
        @apply flex-row-reverse justify-end;
    }

    &_right {
        @apply flex-row;
    }

    &_spaced {
        @apply justify-between;
    }
}
</style>
