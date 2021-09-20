<template>
    <Modal
        v-model="computeModal"
        :hideClose="true"
        :hideFooter="true"
        @close="updateValue(false)"
        size="sm"
    >
        <template v-slot:content>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon
                    size="5x"
                    :icon="faTimesCircle"
                    class="icon-danger mb-4"
                />
                <h2 class="mb-8">Unsuccessful</h2>
                <span class="mb-8"
                    >Wrong Personal Identification Number (PIN) entered!</span
                >
                <button
                    type="submit"
                    class="btn-base btn-light"
                    @click="updateValue(false)"
                >
                    Close
                </button>
            </div>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import Modal from "@/components/containers/modal.vue";
// import icon
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const props = defineProps({
    modal: Boolean,
});

const computeModal = computed(() => props.modal);

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => {
    emit("update:modelValue", value);
};
</script>
