<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Buttons</h1>
        </section>
        <!-- <button class="btn-base ring-2 ring-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">Hello</button> -->
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    There are several button styles provided out of the box for
                    you. To use it, you can simply call
                    <code>button</code> element, and include class names as
                    below.

                    <br />

                    Here is the usage example in the code.

                    <code-highlight languange="typescript">
                        {{ buttonUsage }}
                    </code-highlight>
                </p>
            </Card>
            <Card title="Styles">
                <h4>🌟 Button Styles</h4>
                <p>You can choose from one of these styles provided:</p>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Style Category</td>
                                <td>Class</td>
                                <td>Default</td>
                                <td>Disabled</td>
                                <td>Active</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- For solid button -->
                            <tr>
                                <td rowspan="8">Solid Style</td>
                                <td><code>btn-primary</code></td>
                                <td>
                                    <button class="btn-primary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-secondary</code></td>
                                <td>
                                    <button class="btn-secondary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-info</code></td>
                                <td>
                                    <button class="btn-info btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-info btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-info btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-success</code></td>
                                <td>
                                    <button class="btn-success btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-warning</code></td>
                                <td>
                                    <button class="btn-warning btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-danger</code></td>
                                <td>
                                    <button class="btn-danger btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-dark</code></td>
                                <td>
                                    <button class="btn-dark btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-dark btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-dark btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-light</code></td>
                                <td>
                                    <button class="btn-light btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-light btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-light btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <!-- For outline button -->
                            <tr>
                                <td rowspan="8">Outline Style</td>
                                <td><code>btn-outline-primary</code></td>
                                <td>
                                    <button
                                        class="btn-outline-primary btn-base"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-secondary</code></td>
                                <td>
                                    <button
                                        class="btn-outline-secondary btn-base"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-secondary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-secondary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-info</code></td>
                                <td>
                                    <button class="btn-outline-info btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-info btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-info btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-success</code></td>
                                <td>
                                    <button
                                        class="btn-outline-success btn-base"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-success btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-success btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-warning</code></td>
                                <td>
                                    <button
                                        class="btn-outline-warning btn-base"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-warning btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-warning btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-danger</code></td>
                                <td>
                                    <button class="btn-outline-danger btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-danger btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-danger btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-dark</code></td>
                                <td>
                                    <button class="btn-outline-dark btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-dark btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-dark btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-outline-light</code></td>
                                <td>
                                    <button class="btn-outline-light btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-light btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-outline-light btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 class="mt-12">↔ Button Sizes</h4>
                <p>You can choose from one of these sizes provided:</p>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Size Category</td>
                                <td>Class</td>
                                <td>Default</td>
                                <td>Disabled</td>
                                <td>Active</td>
                                <td>Specs</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- For button size -->
                            <tr>
                                <td rowspan="3">Button Size</td>
                                <td><code>btn-sm</code></td>
                                <td>
                                    <button class="btn-primary btn-sm">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-primary btn-sm" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-sm"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 1rem</code></p>
                                    <p><code>font-size: 0.875rem</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-base</code></td>
                                <td>
                                    <button class="btn-primary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 1.5rem</code></p>
                                    <p><code>font-size: 1rem</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-lg</code></td>
                                <td>
                                    <button class="btn-primary btn-lg">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-primary btn-lg" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-lg"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 2rem</code></p>
                                    <p><code>font-size: 1.125rem</code></p>
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

import { buttonUsage } from "@/sample/codeSample";
</script>
