<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Form Guides</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    All components under "Form" section are a part of
                    <code>form</code> element. It is advisable to wrap them with
                    <code>&lt;form&gt;</code> and extract data during
                    submission.
                </p>
                <div class="max-w-3xl mb-8">
                    <code-highlight languange="typescript">
                        {{ formUsage }}
                    </code-highlight>
                </div>

                <p>
                    However, there are some cases, where you will have to
                    extract data from the <code>form</code> component to use the
                    data inside page, or some immediate action such as
                    responsive dropdown. To allow that, every
                    <code>form</code> has an emit event called
                    <code>update</code> and the input data will be exposed to
                    the component for your respective usage.
                </p>
                <div class="max-w-3xl mb-8">
                    <code-highlight languange="typescript">
                        {{ formUpdateEmit }}
                    </code-highlight>
                </div>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import { formUsage, formUpdateEmit } from "@/sample/codeSample";
</script>
