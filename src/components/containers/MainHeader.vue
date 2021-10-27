<template>
    <header
        class="
            bg-white
            h-header
            flex flex-row
            shadow-md
            items-center
            justify-between
            px-8
            py-2
            sticky
            top-0
            z-50
        "
    >
        <div class="flex flex-row gap-6">
            <button class="p-2" @click="toggleSidebar">
                <FontAwesomeIcon :icon="icon.faBars" />
            </button>
            <!-- <button class="p-2">
                <FontAwesomeIcon :icon="icon.faUndoAlt" flip="horizontal" />
            </button>
            <button class="p-2">
                <FontAwesomeIcon :icon="icon.faHome" />
            </button>-->
        </div>

        <div class="flex">
            <Dropdown
                id="org"
                noLabel="true"
                :options="org.options"
                @update="updateOrg"
                label=""
            >
                <template #options="{ option }">
                    <div class="flex">
                        <!-- <Avatar v-model="option.label" size="sm" /> -->
                        <span class="flex flex-nowrap ml-2">{{
                            option.label
                        }}</span>
                    </div></template
                >
                <!-- <template #options_selected="{ option }">
                    <div class="flex items-baseline">
                        <span class="flex flex-nowrap ml-2">{{
                            option.label
                        }}</span>
                    </div></template
                > -->
            </Dropdown>

            <button @click="dropdownOpen = !dropdownOpen" class="setting">
                <Avatar v-if="name" v-model="name" />
            </button>

            <div
                v-show="dropdownOpen"
                @click="dropdownOpen = false"
                class="fixed inset-0 h-full w-full z-10"
            ></div>

            <div v-show="dropdownOpen" class="setting-box">
                <a href="#" class="setting-option">
                    <FontAwesomeIcon :icon="faArrowLeft" />
                    <span class="">back to Main System</span></a
                >
                <a href="/logout" class="setting-option"
                    ><FontAwesomeIcon :icon="faSignOutAlt" />
                    <span class="">Log out</span></a
                >
            </div>
        </div>
    </header>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from "vue";
import { useStore } from "@/store";
import {
    faBars,
    faUndoAlt,
    faHome,
    faArrowLeft,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Dropdown from "@/components/forms/Dropdown.vue";
import Avatar from "@/components/utils/avatar.vue";

onMounted(() => {
    const detail = store.getters["auth/currentUser"];
    name.value = detail.username;
});

const name = ref("");

const dropdownOpen = ref(false);

const store = useStore();
const icon = computed(() => ({
    faBars,
    faUndoAlt,
    faHome,
}));

const org = reactive({
    options: [
        {
            value: "ansiCode",
            label: "ANSI Systems",
        },
        {
            value: "tybCode",
            label: "toyyibPay Sdn Bhd",
        },
    ],
    selected: "",
});

const updateOrg = async (value) => {
    org.selected = value.value;
};

const toggleSidebar = () => store.commit("layout/toggleSidebar");
</script>

<style scoped lang="postcss">
.setting {
    @apply relative z-10 block rounded-lg bg-white focus:outline-none;
}
.setting-box {
    @apply absolute right-1 mt-16 w-max bg-white shadow-md z-20;
}
.setting-option {
    text-decoration: unset;
    @apply block px-4 py-2 text-sm text-black hover:bg-primary-100 gap-3;
}
</style>
