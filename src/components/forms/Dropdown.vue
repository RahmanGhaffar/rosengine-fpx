<template>
    <div
        ref="target"
        class="dropdown"
        :class="[`label_position-${dropdownProps.labelPosition}`]"
    >
        <p class="label">{{ dropdownProps.label }}</p>
        <div class="wrapper">
            <button class="container" type="button" @click="handleClick">
                <input
                    type="hidden"
                    :name="dropdownProps.id"
                    :id="dropdownProps.id"
                    v-model="dropdownState.selected"
                />
                <p :class="['placeholder', { active: dropdownState.selected }]">
                    {{ selectedOption?.label || dropdownProps.placeholder }}
                </p>
                <!-- <FontAwesomeIcon
                    :icon="
                        dropdownState.openDropdown ? faChevronUp : faChevronDown
                    "
                /> -->
                <FontAwesomeIcon
                    :icon="faChevronDown"
                    class="chevron"
                    :class="{
                        'chevron-invert': dropdownState.openDropdown,
                    }"
                />
            </button>
            <div
                class="options"
                :class="[
                    { expand: dropdownState.openDropdown },
                    dropdownState.dropdownDirection,
                ]"
            >
                <button
                    type="button"
                    v-show="dropdownState.openDropdown"
                    class="options_item"
                    v-for="option in dropdownProps.options"
                    :key="option.value"
                    :value="option.value"
                    :class="{ active: option.value === dropdownState.selected }"
                    @click="handleSelect"
                    :disabled="option.disabled"
                >
                    {{ option.label }}
                </button>
                <!-- <button class="options_item">Hello</button>
                <button class="options_item">Holla</button>
                <button class="options_item">Salam</button> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    reactive,
    defineProps,
    withDefaults,
    computed,
    ref,
    defineEmits,
    onUpdated,
} from "vue";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onClickOutside, useWindowSize } from "@vueuse/core";

type DropdownOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

type DropdownProps = {
    id: string;
    labelPosition?: "top" | "side";
    label: string;
    options?: Array<DropdownOption>;
    placeholder?: string;
};

const dropdownProps = withDefaults(defineProps<DropdownProps>(), {
    labelPosition: "top",
    label: "",
    placeholder: "Please select one...",
    options: () => [],
});

type DropdownState = {
    selected?: string | null;
    openDropdown: boolean;
    dropdownDirection: "top" | "bottom";
};

const initialState: DropdownState = {
    selected: null,
    openDropdown: false,
    dropdownDirection: "bottom",
};

const dropdownState = reactive<DropdownState>(initialState);

type DropdownEmits = {
    (
        e: "update",
        payload: {
            name: string;
            value: boolean;
        }
    ): void;
};

const dropdownEmits = defineEmits<DropdownEmits>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const target = ref<any>(null);

onClickOutside(target, () => (dropdownState.openDropdown = false));

const { height } = useWindowSize();

const selectedOption = computed(() =>
    dropdownProps.options.find(
        (option) => option.value === dropdownState.selected
    )
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleClick = (e: any) => {
    dropdownState.openDropdown = !dropdownState.openDropdown;

    console.log({
        position: e.clientY,
        height,
    });
    dropdownState.dropdownDirection =
        e.clientY + 350 > height.value ? "top" : "bottom";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSelect = (e: any) => {
    const { value } = e.target;
    dropdownState.openDropdown = false;
    dropdownState.selected = value;

    dropdownEmits("update", { name: dropdownProps.id, value });
};
</script>

<style lang="postcss" scoped>
.dropdown {
    @apply flex flex-row;
    &.label_position {
        &-top {
            @apply flex-col;
        }
        &-side {
            @apply flex-row;
        }
    }

    .label {
        @apply flex-1 max-w-input-label py-2;
    }

    .wrapper {
        @apply relative flex-1 mr-4;

        .container {
            @apply flex flex-row flex-wrap items-center gap-4 px-4 py-2 border border-light-600 rounded relative;

            .placeholder {
                @apply flex-1 text-left text-light-700;

                &.active {
                    @apply text-dark-500;
                }
            }
        }

        .options {
            @apply absolute w-full h-auto max-h-0 left-0 bg-white overflow-auto rounded shadow z-50;
            @apply flex flex-col items-stretch;
            @apply transition-all duration-300 ease-in-out;

            &.bottom {
                top: calc(100% + 0.5rem);
            }

            &.top {
                bottom: calc(100% + 0.5rem);
            }
            scrollbar-color: #cbd5e0dd transparent;
            scrollbar-width: thin;

            &.expand {
                @apply max-h-48;
            }

            &_item {
                @apply px-4 py-3 rounded hover:bg-primary-300 hover:text-white text-left transition-colors duration-100 ease-linear;
                &.active {
                    @apply bg-primary-500 text-white;
                }

                &:disabled {
                    @apply text-light-500 hover:bg-white;
                }
            }
        }
    }
}

.chevron {
    @apply transition-transform duration-200 ease-in-out;

    &-invert {
        @apply rotate-180;
    }
}
</style>
