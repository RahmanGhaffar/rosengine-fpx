<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Single Card Layout</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>This is the single card layout.</p>
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ importCardLayout }}
                    </code-highlight>
                </div>

                <img
                    src="@/assets/images/single_card_layout.png"
                    alt="Default NeoCorrad UI"
                />
            </Card>
            <Card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>CardLayout</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Props</td>
                                <td>Type</td>
                                <td>Default value</td>
                                <td>Required</td>
                                <td>Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>background</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    Using Tailwind classes OR your own defined
                                    class.
                                </td>
                            </tr>
                            <tr>
                                <td><code>backgroundImage</code></td>
                                <td><code>image imports</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    This will override <code>background</code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

import { importCardLayout } from "@/sample/codeSample";
</script>
