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
                    :icon="faCheckCircle"
                    class="icon-success mb-4"
                />
                <h2 class="mb-8">Successful</h2>
                <span class="mb-8"><slot></slot></span>
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
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const props = defineProps({
    modal: Boolean,
});

const computeModal = computed(() => props.modal);

const emit = defineEmits(["update:modelValue", "close"]);

const updateValue = (value: boolean) => {
    emit("update:modelValue", value);
    emit("close", value);
};
</script>
