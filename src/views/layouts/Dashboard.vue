<template>
    <DashboardLayout>
        <section class="flex flex-col gap-2">
            <h1>Dashboard</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>This is the dashboard layout.</p>
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ importDashboardLayout }}
                    </code-highlight>
                </div>

                <img
                    src="@/assets/images/default_layout.jpg"
                    alt="Default NeoCorrad UI"
                />
            </Card>
        </section>
    </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import { importDashboardLayout } from "@/sample/codeSample";
</script>
