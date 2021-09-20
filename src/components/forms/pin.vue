<template>
    <div class="flex w-max gap-4">
        <input
            v-for="index in props.length"
            :id="'pin' + index"
            :key="index"
            maxlength="1"
            @keyup="test"
            class="custom-border w-8 text-center"
        />
        <!-- <input
            v-for="index in length"
            :id="'pin' + (index - 1)"
            :key="index"
            :value="input[index - 1]"
            maxlength="1"
            @input="updateValue"
            class="custom-border w-8 text-center"
        /> -->
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
    modelValue: String,
    length: Number,
});

const input = computed(() => {
    return props.modelValue;
});

const emit = defineEmits(["update:modelValue"]);

const test = async (event) => {
    const numberOnly = /^[0-9]*$/;
    var id = parseInt(event.originalTarget.id.substr(3));
    console.log("id", id);

    if (event.key === "Backspace" || event.key === "Delete") {
        var idBefore = id - 1;
        var delValue =
            input.value.substr(0, id - 1) + "-" + input.value.substr(id);

        await emit("update:modelValue", delValue.substr(0, props.length));

        if (idBefore > 0) {
            document.getElementById("pin" + idBefore).focus();
        }
    } else if (event.key.match(numberOnly)) {
        var newValue =
            input.value.substr(0, id - 1) + event.key + input.value.substr(id);

        await emit("update:modelValue", newValue.substr(0, props.length));

        if (id < props.length) {
            var idNext = parseInt(id) + 1;
            document.getElementById("pin" + idNext).focus();
        }
    } else {
        return;
    }
};
// const stepForward = (id) => {
//     var value = document.getElementById("pin" + id).value;

//     var newValue =
//         input.value.substr(0, id - 1) +
//         value +
//         input.value.substr(id - 1 + value.length);

//     emit("update:modelValue", newValue);

//     if (id < props.length) {
//         var iterate = id + 1;
//         document.getElementById("pin" + iterate).focus();
//     }
// };

// const stepBackward = (id) => {
//     // var newValue = input.value.substr(0, id - 1) + input.value.substr(id);
//     if (id > 0) {
//         var iterate = id - 1;
//         var newValue =
//             input.value.substr(0, id) + "-" + input.value.substr(id + 1);
//         emit("update:modelValue", newValue);
//         document.getElementById("pin" + iterate).focus();
//     }
// };
</script>

<style lang="postcss" scoped>
.custom-border {
    border-bottom-width: 1px;
    border-color: rgb(0, 0, 0, 0.3);
}
</style>
