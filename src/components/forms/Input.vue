<template>
    <div :class="labelPosition" class="w-full">
        <p class="message" :class="{ error: inputHandler.isError }">
            {{ inputHandler.inputMessage }}
        </p>
        <div class="input-wrapper flex flex-row flex-1 relative w-full">
            <div
                class="prefix"
                v-if="!!prefix || $slots.input_prefix"
                :class="{
                    error: inputHandler.isError,
                    focus: inputHandler.isFocused,
                }"
            >
                <p v-if="!$slots.input_prefix">{{ prefix }}</p>
                <slot name="input_prefix" />
            </div>
            <input
                :class="{
                    inputPrefix: !!prefix || $slots.input_prefix,
                    inputPostfix:
                        !!postfix ||
                        props.type === 'password' ||
                        $slots.input_postfix,
                    error: inputHandler.isError,
                }"
                :type="
                    props.type !== 'password'
                        ? props.type
                        : inputHandler.passwordVisible
                        ? 'text'
                        : 'password'
                "
                :id="props.id"
                :name="props.name"
                :required="required"
                :placeholder="
                    labelPosition === 'float' ? undefined : placeholder
                "
                :inputmode="inputHandler.inputMode"
                @input="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
                v-bind="$attrs"
                v-model="inputHandler.inputElement"
            />
            <!-- <button class="absolute right-4 top-2" v-if="type === 'password'">
                <FontAwesomeIcon
                    :icon="faEyeSlash"
                    v-if="inputHandler.passwordVisible"
                />
                <FontAwesomeIcon
                    :icon="faEye"
                    v-if="!inputHandler.passwordVisible"
                />
            </button> -->
            <div
                class="postfix"
                v-if="
                    !!postfix ||
                    props.type === 'password' ||
                    $slots.input_postfix
                "
                :class="{
                    password: props.type === 'password',
                    error: inputHandler.isError,
                    focus: inputHandler.isFocused,
                }"
            >
                <slot name="input_postfix" />
                <button
                    class="h-full px-4 py-2 w-14"
                    v-if="props.type === 'password'"
                    @click="
                        inputHandler.passwordVisible =
                            !inputHandler.passwordVisible
                    "
                >
                    <FontAwesomeIcon
                        :icon="faEyeSlash"
                        v-if="inputHandler.passwordVisible"
                    />
                    <FontAwesomeIcon
                        :icon="faEye"
                        v-if="!inputHandler.passwordVisible"
                    />
                </button>
                <p v-if="!$slots.input_postfix">{{ postfix }}</p>
            </div>
        </div>
        <label
            :for="props.id"
            :class="{
                filled: !!inputHandler.inputElement,
                focus: inputHandler.isFocused,
                hasPrefix: !!prefix || $slots.input_prefix,
            }"
            >{{ props.label }} {{ required ? "*" : "" }}</label
        >
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    label: {
        type: String,
    },
    id: {
        type: String,
        required: true,
    },
    labelPosition: {
        type: String,
        default: "top",
        validator: (value: string) => {
            return ["top", "side", "float"].indexOf(value) !== -1;
        },
    },
    defaultValue: [String, Number],
    inputValidator: Function,
    placeholder: String,
    type: {
        type: String,
        default: "text",
    },
    prefix: {
        type: String,
    },
    postfix: {
        type: String,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

type Emits = {
    (
        e: "update",
        payload: {
            name: string;
            value: string | number;
        }
    ): void;
};

const emit = defineEmits<Emits>();

type InputHandler = {
    inputElement: string | number;
    inputMessage: string;
    isError: boolean;
    isFocused: boolean;
    prevInput?: string;
    inputMode: string;
    passwordVisible?: false;
};

const inputHandler = reactive<InputHandler>({
    inputElement: props.defaultValue || "",
    inputMessage: "",
    isError: false,
    isFocused: false,
    prevInput: undefined,
    inputMode:
        props.type === "number"
            ? "numeric"
            : props.type === "email"
            ? "email"
            : "text",
    passwordVisible: false,
});

const handleFocus = () => {
    inputHandler.isFocused = true;
};

const handleChange = ({ target }: { target: HTMLInputElement }) => {
    if (target.value !== inputHandler.prevInput) {
        inputHandler.isError = false;
        inputHandler.prevInput = undefined;
    }

    emit("update", { name: props.id, value: target.value });
};

const handleBlur = ({ target }: { target: HTMLInputElement }) => {
    inputHandler.isFocused = false;
    const validityState: ValidityState = target.validity;
    inputHandler.prevInput = target.value;

    if (!validityState.valid) {
        inputHandler.isError = true;
        inputHandler.inputMessage = target.validationMessage;
    }
};

// const isValid = computed(() => {
//     return (props.inputValidator)
//         ? props.inputValidator(inputElement.value)
//         : true;
// });
</script>

<style scoped lang="postcss">
input {
    @apply border rounded-md border-light-500 py-2 px-4 flex-1 w-full min-w-input outline-none transition-all duration-300 ease-in-out;
    @apply hover:border-light-600 focus:border-primary-300 focus:shadow-focus;
    /* @apply hover:border-light-600 focus:border-primary-300 focus:ring-primary-300 focus:ring-1; */

    &.error {
        @apply border-danger-500 focus:shadow-danger;
    }

    &.inputPrefix {
        @apply rounded-l-none;
    }

    &.inputPostfix {
        @apply rounded-r-none;
    }
}

.prefix {
    @apply py-2 px-6 rounded-l-md bg-light-500 transition-colors duration-500 ease-in-out;

    &.error {
        @apply bg-danger-500 text-white;
        &.focus {
            @apply shadow-danger;
        }
    }
}

.postfix {
    @apply py-2 px-6 rounded-r-md bg-light-500 transition-colors duration-500 ease-in-out;
    &.password {
        @apply bg-white border border-light-500 py-0 px-0;
    }

    &.error {
        @apply bg-danger-500 text-white;
        &.focus {
            @apply shadow-danger;
        }
    }
}

.message {
    @apply text-xs max-h-0 ml-4 mt-1 transition-all duration-500 ease-in-out overflow-hidden;
    &.error {
        @apply text-danger-500 max-h-10;
    }
}

.side {
    @apply flex flex-row-reverse items-start;
    label {
        @apply flex-1 max-w-input-label mt-2;
    }
    .input_wrapper {
        @apply ml-8;
    }
}

.top,
.float {
    @apply flex flex-col-reverse items-start;
    label {
        @apply mb-2 text-sm;
    }
}

.float {
    /* input:focus ~ label, */
    label.focus,
    label.filled,
    label.hasPrefix {
        @apply translate-x-0 translate-y-0 text-black;
    }
    label {
        @apply translate-x-4 translate-y-10 pointer-events-none transition-all duration-200 ease-in-out text-light-600;
    }
}
</style>
