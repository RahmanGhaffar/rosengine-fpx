<template>
    <div class="validator">
        <ul v-if="props.checklistVisible">
            <li v-for="[key, value] in Object.entries(conditions)" :key="key">
                <div class="checklist" :class="{ fail: validator[key] }">
                    <FontAwesomeIcon
                        :icon="validator[key] ? faTimes : faCheck"
                        transform="shrink-2"
                    />
                </div>
                <p class="text-left flex-1">{{ value }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { PasswordScore } from "types";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

type Props = {
    validator: PasswordScore.Errors;
    checklistVisible: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    checklistVisible: true,
});

const conditions = {
    lowerChar: "Password should contain a lower character (a-z).",
    upperChar: "Password should contain an upper character (A-Z).",
    digitChar: "Password should contain a digit character (0-9).",
    specialChar: "Password should contain a special character (#?!@$%^&*-).",
    validLength: "Password should have more than 8 characters.",
    repetitive:
        "Password should not have any consecutive repetitive character.",
};
</script>

<style scoped lang="postcss">
.validator {
    @apply w-full flex flex-col items-start text-sm text-dark-400;
    ul {
        @apply flex flex-col gap-2;
    }
    li {
        @apply flex flex-row flex-wrap;
        .checklist {
            @apply rounded-full w-6 h-6 mr-2 relative top-1 bg-success-500 text-white flex items-center justify-center transition-colors ease-in-out duration-200;

            &.fail {
                @apply bg-danger-500;
            }
        }
    }
}
</style>
