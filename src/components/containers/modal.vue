<template>
    <div>
        <!-- The Modal -->
        <div
            id="bgModal"
            ref="bgModal"
            :class="{ 'show-modal': props.modelValue }"
            class="modal"
            @click="checkModal($event)"
        >
            <!-- Modal content -->
            <div
                id="contentModal"
                class="modal-content"
                :class="{
                    'w-2/5': props.size === 'sm',
                    'w-1/2': props.size === 'md',
                    'w-3/4': props.size === 'lg',
                }"
            >
                <div class="flex justify-between items-baseline">
                    <h5>{{ props.title }}</h5>
                    <span
                        v-if="!props.hideClose"
                        @click="updateValue(false)"
                        class="close"
                        >&times;</span
                    >
                </div>
                <slot name="content" />
                <slot name="footer" />
                <div
                    v-if="!hideFooter"
                    class="flex justify-end items-baseline gap-4"
                >
                    <button class="btn-sm btn-light">Cancel</button
                    ><button class="btn-sm btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps({
    title: String,
    modelValue: Boolean,
    size: String,
    hideFooter: {
        required: false,
        type: Boolean,
    },
    hideClose: {
        required: false,
        type: Boolean,
    },
});

const bgModal = ref();

const checkModal = (event) => {
    if (bgModal.value === event.target) {
        updateValue(false);
    }
};

// const openModal = defineEmits(["input", true]);

// const emit = defineEmits(["update:modelValue"]);
const closeModal = defineEmits(["close"]);

const updateValue = () => {
    closeModal("close", false);
    // emit("update:modelValue", value);
};
</script>

<style scoped lang="postcss">
/* The Modal (background) */
.modal {
    display: none;
}

#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 60;
    cursor: pointer;
}

.show-modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 60; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 1rem;
    border: 1px solid #888;
    /* box-shadow: 1px 1px 10px #000000; */
    border-radius: 0.5rem;
    height: max-content;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 2rem;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>
