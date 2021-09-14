<template>
    <h4>FPX</h4>
    <VueCollapsiblePanelGroup accordion>
        <VueCollapsiblePanel
            v-for="data in apiDocs.array"
            :key="data.documentationTitle"
            :expanded="false"
        >
            <template #title
                ><button class="btn-sm btn-primary mr-2">
                    {{ data.documentationMethod }}
                </button>
                {{ data.documentationTitle }}</template
            >
            <template #content>
                <div class="flex gap-3 markdown">
                    <textarea
                        v-model="input['data.documentationTitle']"
                        v-if="edit.isEdited"
                        :class="{ 'is-edited': edit.isEdited }"
                    ></textarea>
                    <Markdown
                        :source="bufferToString(data.documentationDescription)"
                        :class="{ 'is-edited': edit.isEdited }"
                        :breaks="true"
                    />
                </div>
            </template>
        </VueCollapsiblePanel>
    </VueCollapsiblePanelGroup>
</template>

<script setup lang="ts">
import { Buffer } from "buffer";
import {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
} from "@dafcoe/vue-collapsible-panel";
import Markdown from "vue3-markdown-it";

import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import { reactive, onMounted } from "vue";
import axios from "axios";

// Edit API
var edit = reactive({
    buttonTitle: "Edit",
    isEdited: false,
});

onMounted(async () => {
    var config = {
        method: "post",
        url: "https://dqpete2rnc.execute-api.ap-southeast-1.amazonaws.com/dev",
        headers: {},
    };

    var resp = await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    apiDocs.array = resp.data;
});

const apiDocs = reactive({
    data: "",
    array: [],
    parseBuffer: "",
});

const bufferToString = (buffer) => {
    return Buffer.from(buffer).toString();
};
</script>

<style scoped lang="postcss">
th {
    @apply w-full;
}
.is-edited {
    @apply w-6/12;
}

.markdown {
    @apply flex flex-col gap-4;

    & >>> h1,
    & >>> h2,
    & >>> h3,
    & >>> h4,
    & >>> h5,
    & >>> h6 {
        @apply mt-8;
    }
}
</style>
