<template>
    <Modal
        v-model="confirmModal"
        :hideClose="true"
        size="md"
        :hideFooter="true"
        @close="closeModal"
    >
        <template v-slot:content>
            <div class="flex flex-col items-center gap-8 mb-8">
                <FontAwesomeIcon
                    size="5x"
                    :icon="faExclamationTriangle"
                    class="icon-warning"
                />
                <h2>Heads Up!</h2>
                <span>
                    <slot></slot>
                </span>
                <div class="text-center w-max">
                    <span>6 digits PIN</span>
                    <Pin v-model="pin" :length="6" />
                </div>
                <span>
                    Enter your 6 digits Personal Identification Number (PIN)
                    above to confirm the process.
                </span>
            </div>
            <div class="flex justify-between">
                <button
                    type="button"
                    @click="checkPin"
                    class="btn-base btn-primary"
                >
                    Confirm
                </button>
                <button
                    type="button"
                    @click="updateValue(false)"
                    class="btn-base btn-light"
                >
                    Cancel
                </button>
            </div>
        </template>
    </Modal>
    <!-- <div>
        <div
            id="bgModal"
            ref="bgModal"
            :class="{ 'show-modal': props.modelValue }"
            class="modal"
            @click="checkModal($event)"
        >
            <div id="contentModal" class="modal-content w-1/2"></div>
        </div>
    </div>-->
    <SuccessModal v-model="successModal"
        >Your changes has been updated</SuccessModal
    >
    <FailModal v-model="failModal" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { ref, defineProps, defineEmits, computed } from "vue";
import Pin from "@/components/forms/pin.vue";
import FailModal from "@/components/utils/modal/failModal.vue";
import SuccessModal from "@/components/utils/modal/successModal.vue";
import Modal from "@/components/containers/modal.vue";

const props = defineProps({
    modelValue: Boolean,
});

const confirmModal = computed(() => props.modelValue);
const pin = ref("");

const successModal = ref(false);
const failModal = ref(false);

const closeModal = () => {
    updateValue(false);
};

// type ChangeEmit = {
//     (e: "success", status: boolean): void;
// };

// const changeEmit = defineEmits<ChangeEmit>();

const emit = defineEmits(["validate", "update:modelValue"]);

const checkPin = () => {
    if (pin.value === "123456") {
        // successModal.value = true;
        emit("validate", true);
    } else {
        failModal.value = true;
        emit("validate", false);
    }
};

// const emit = defineEmits(["update:modelValue"]);
const updateValue = (value: boolean) => {
    emit("validate", value);
    emit("update:modelValue", value);
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
