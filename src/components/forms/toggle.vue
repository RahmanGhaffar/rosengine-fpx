<template>
    <!-- Rounded switch -->
    <div
        class="flex"
        :class="{ 'justify-end mr-4': props.position === 'right' }"
    >
        <span>Active</span>
        <label class="switch ml-2 mr-2">
            <input
                id="toggleStats"
                type="checkbox"
                :checked="props.modelValue === 'Active'"
                @change="showModal = true"
            />
            <span class="slider round"></span>
        </label>
        <span>Inactive</span>
    </div>
    <ConfirmModal v-model="showModal" @validate="updateValue"></ConfirmModal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from "vue";
import ConfirmModal from "../utils/modal/confirmModal.vue";
const emit = defineEmits(["update:modelValue", "validate"]);
const props = defineProps({
    modelValue: String,
    position: {
        type: String,
        required: false,
        value: "left",
    },
});

const showModal = ref(false);

const value = computed(() => {
    return props.modelValue === "Active" ? true : false;
});

const updateValue = (valid: boolean) => {
    var stats = !valid ? value.value : !value.value;
    const setValue = stats ? "Active" : "Inactive";

    var toggle = document.getElementById("toggleStats");
    toggle.checked = stats;

    emit("update:modelValue", setValue);
    emit("validate", valid);
    showModal.value = false;
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 39px;
    height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
