<template>
    <section
        class="
            w-0
            bg-light-100
            md:w-sidebar-expand
            h-screen
            sticky
            top-0
            flex-shrink-0
            transition-all
            duration-700
            ease-in-out
            flex flex-col
            overflow-hidden
        "
        :class="{ collapse: store.state.layout.isSidebarCollapse }"
    >
        <div
            class="
                h-header
                shadow-md
                flex
                items-center
                justify-center
                text-primary-700
                py-2
                px-12
            "
        >
            <img
                src="https://assets-rosengine.s3.ap-southeast-1.amazonaws.com/images/rosengine-logo-fpx.png"
                alt="Rosengine FPX"
            />
        </div>
        <nav class="py-4 px-2 flex-1 overflow-y-auto">
            <!-- First level navigation -->
            <ul class="flex flex-col gap-2 text-white">
                <li v-for="menu in menuList" :key="menu.id">
                    <button
                        :data-active="currentRoute === menu.path"
                        @click="changeFocusedMenu(menu.path || menu.id)"
                    >
                        <div class="w-6 h-6 flex justify-center items-center">
                            <FontAwesomeIcon
                                :icon="icon[menu.icon]"
                                flip="horizontal"
                            />
                        </div>
                        <p
                            class="flex-1"
                            v-if="!store.state.layout.isSidebarCollapse"
                        >
                            {{ menu.label }}
                        </p>
                        <div
                            class="w-6 h-6 flex justify-center items-center"
                            v-if="menu.subMenu"
                        >
                            <FontAwesomeIcon :icon="icon.faChevronRight" />
                        </div>
                    </button>
                    <!-- Second level navigation -->
                    <ul
                        v-if="menu.subMenu"
                        class="
                            max-h-0
                            overflow-hidden
                            transition-all
                            duration-200
                            flex flex-col
                            gap-2
                        "
                        :class="{
                            focused:
                                state.focusedMenu === menu.id ||
                                menu.subMenu
                                    .map((subMenuItem) => subMenuItem.id)
                                    .includes(state.focusedMenu) ||
                                flatMapRoute[menu.id].includes(currentRoute),
                        }"
                    >
                        <li v-for="subMenu1 in menu.subMenu" :key="subMenu1.id">
                            <button
                                @click="
                                    changeFocusedMenu(
                                        subMenu1.path || subMenu1.id
                                    )
                                "
                                :data-active="currentRoute === subMenu1.path"
                            >
                                <div
                                    class="
                                        w-6
                                        h-6
                                        flex
                                        justify-center
                                        items-center
                                        transition-all
                                        duration-300
                                    "
                                    :class="{
                                        'pl-8': !store.state.layout
                                            .isSidebarCollapse,
                                    }"
                                >
                                    <FontAwesomeIcon
                                        :icon="
                                            icon[subMenu1.icon] || icon.faCircle
                                        "
                                        :transform="
                                            subMenu1.icon
                                                ? 'shrink-4'
                                                : 'shrink-8'
                                        "
                                    />
                                </div>
                                <p
                                    class="pl-2 flex-1"
                                    v-if="!store.state.layout.isSidebarCollapse"
                                >
                                    {{ subMenu1.label }}
                                </p>
                                <div
                                    class="
                                        w-6
                                        h-6
                                        flex
                                        justify-center
                                        items-center
                                        pr-4
                                    "
                                    v-if="subMenu1.subMenu"
                                >
                                    <FontAwesomeIcon
                                        :icon="icon.faChevronRight"
                                        transform="shrink-4"
                                    />
                                </div>
                            </button>
                            <!-- Third level navigation -->
                            <ul
                                v-if="subMenu1.subMenu"
                                class="
                                    max-h-0
                                    overflow-hidden
                                    transition-all
                                    duration-200
                                    flex flex-col
                                    gap-2
                                "
                                :class="{
                                    focused:
                                        state.focusedMenu === subMenu1.id ||
                                        flatMapRoute[subMenu1.id].includes(
                                            currentRoute
                                        ),
                                }"
                            >
                                <li
                                    v-for="subMenu2 in subMenu1.subMenu"
                                    :key="subMenu2.id"
                                >
                                    <button
                                        @click="
                                            changeFocusedMenu(subMenu2.path)
                                        "
                                        :data-active="
                                            currentRoute === subMenu2.path
                                        "
                                    >
                                        <div
                                            class="
                                                w-6
                                                h-6
                                                flex
                                                justify-center
                                                items-center
                                                transition-all
                                                duration-300
                                            "
                                            :class="{
                                                'pl-16':
                                                    !store.state.layout
                                                        .isSidebarCollapse,
                                            }"
                                        >
                                            <FontAwesomeIcon
                                                :icon="
                                                    icon[subMenu2.icon] ||
                                                    icon.faDotCircle
                                                "
                                                transform="shrink-8"
                                            />
                                        </div>
                                        <p
                                            class="pl-2"
                                            v-if="
                                                !store.state.layout
                                                    .isSidebarCollapse
                                            "
                                        >
                                            {{ subMenu2.label }}
                                        </p>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="flex items-center justify-center px-4 py-4">
            <!-- <p>{{ process.env.GITHUB_RELEASE_VERSION_URL }}</p> -->
            <button class="btn-info btn-sm w-full">Version: v0.1.1</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "@/store";
import {
    faClipboard,
    faTachometerAlt,
    faClipboardList,
    faChevronDown,
    faChevronRight,
    faMousePointer,
    faCalculator,
    faHandPointUp,
    faPaintBrush,
    faDotCircle,
    faCircle,
    faCouch,
    faFont,
    faUser,
    faBox,
    faInfo,
    faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";
import { sidebarMenu as menuList } from "@/static/sidebarMenu";

type State = {
    focusedMenu?: string;
};
const router = useRouter();
const store = useStore();
const icon = computed(() => ({
    faClipboard,
    faTachometerAlt,
    faClipboardList,
    faChevronDown,
    faChevronRight,
    faMousePointer,
    faCalculator,
    faPaintBrush,
    faHandPointUp,
    faDotCircle,
    faCircle,
    faCouch,
    faFont,
    faUser,
    faBox,
    faInfo,
    faWrench,
}));

const currentRoute = router.currentRoute.value.fullPath;
const state = reactive<State>({
    focusedMenu: undefined,
});

const changeFocusedMenu = (selectedPath: string) => {
    if (selectedPath.startsWith("/")) {
        return router.push(selectedPath);
    }

    if (state.focusedMenu !== selectedPath) state.focusedMenu = selectedPath;
    else state.focusedMenu = undefined;
};

const flatMapRoute: {
    [key: string]: Array<unknown>;
} = {};

// This is version info fetching from Gitthub
// const versionInfoURL = process.env.VUE_APP_GH_VERSION_INFO;
// versionInfoURL && fetch(versionInfoURL).then((data) => data.json()).then(console.log);

menuList.forEach((menuItem) => {
    flatMapRoute[menuItem.id] = [
        menuItem.path ||
            menuItem.subMenu?.flatMap((sub1Item) => {
                flatMapRoute[sub1Item.id] = [
                    sub1Item.path,
                    sub1Item.subMenu?.map((sub2Item) => sub2Item.path),
                ]
                    .flatMap((item) => item)
                    .filter(Boolean);
                return [
                    sub1Item.path,
                    sub1Item.subMenu?.map((sub2Item) => sub2Item.path),
                ]
                    .flatMap((item) => item)
                    .filter(Boolean);
            }),
    ].flatMap((item) => item);
});
</script>

<style scoped>
img {
    @apply max-h-full;
}
ul {
    @apply list-none;
}
.collapse {
    @apply w-sidebar-collapse;
}

nav button {
    @apply h-12 w-full text-left px-4 py-2 rounded-md flex flex-row gap-2 items-center text-primary-400  hover:text-white focus:text-white hover:bg-primary-400 focus:bg-primary-400;
}

nav button[data-active="true"] {
    @apply bg-primary-600 text-white;
}

/* button:focus ~ ul {
    @apply max-h-screen;
} */

ul.focused {
    @apply max-h-screen;
}

nav {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0dd transparent;
}
</style>
