<template>
    <div
        class="bg-avatar"
        :class="{
            'bg-sm': size === 'sm',
            'bg-md': size === 'md',
            'color-0': defineColor === 0,
            'color-1': defineColor === 1,
            'color-2': defineColor === 2,
            'color-3': defineColor === 3,
            'color-4': defineColor === 4,
            'color-5': defineColor === 5,
            'color-6': defineColor === 6,
            'color-7': defineColor === 7,
            'color-8': defineColor === 8,
            'color-9': defineColor === 9,
            'color-10': defineColor === 10,
            'color-11': defineColor === 11,
            'color-12': defineColor === 12,
            'color-13': defineColor === 13,
        }"
    >
        <span>{{ initial }}</span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    modelValue: String,
    size: {
        type: String,
        required: false,
        default: "md",
    },
});

const initial = computed(() => {
    if (props.modelValue === undefined || props.modelValue === "") {
        return "?";
    }

    const arr = props.modelValue.split(" ");
    var initial = "";
    for (const i in arr) {
        if (parseInt(i) < 3) initial += arr[i][0].toUpperCase();
        else break;
    }

    return initial;
});

const defineColor = computed(() => {
    if (props.modelValue === undefined) {
        return 0;
    } else {
        var check = props.modelValue[0].toUpperCase();
        if (check === "A" || check === "N") return 1;
        else if (check === "B" || check === "O") return 2;
        else if (check === "C" || check === "P") return 3;
        else if (check === "D" || check === "Q") return 4;
        else if (check === "E" || check === "R") return 5;
        else if (check === "F" || check === "S") return 6;
        else if (check === "G" || check === "T") return 7;
        else if (check === "H" || check === "U") return 8;
        else if (check === "I" || check === "V") return 9;
        else if (check === "J" || check === "W") return 10;
        else if (check === "K" || check === "X") return 11;
        else if (check === "L" || check === "Y") return 12;
        else if (check === "M" || check === "Z") return 13;
    }
    return 0;
});
</script>

<style scoped lang="postcss">
.bg-avatar {
    border-radius: 50%;
    @apply flex items-center justify-center;
}

.bg-md {
    @apply w-11 h-11;
}

.bg-sm {
    font-size: 0.5rem;
    @apply w-7 h-7;
}

.color-0 {
    color: #000;
    background-color: #fff;
}
.color-1 {
    color: #000;
    background-color: #f6e21b;
}
.color-2 {
    color: #fff;
    background-color: #6d388a;
}
.color-3 {
    color: #000;
    background-color: #fbc51b;
}
.color-4 {
    color: #fff;
    background-color: #454d96;
}
.color-5 {
    color: #000;
    background-color: #ef8d20;
}
.color-6 {
    color: #fff;
    background-color: #2c72ae;
}
.color-7 {
    color: #fff;
    background-color: #ea6021;
}
.color-8 {
    color: #fff;
    background-color: #0a96ba;
}
.color-9 {
    color: #fff;
    background-color: #e32322;
}
.color-10 {
    color: #fff;
    background-color: #008b5a;
}
.color-11 {
    color: #fff;
    background-color: #c3087b;
}
.color-12 {
    color: #000;
    background-color: #8bba2c;
}
.color-13 {
    color: #fff;
    background-color: #000000;
}
</style>
