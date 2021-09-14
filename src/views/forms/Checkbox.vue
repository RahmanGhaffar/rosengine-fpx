<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Checkbox</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Checkbox is one of the crucial element in a web app. A more
                    intuitive input will ease user experience.
                </p>

                <div class="max-w-3xl w-full">
                    <code-highlight languange="typescript">
                        {{ importCheckbox }}
                    </code-highlight>
                </div>
            </Card>
            <Card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>Checkbox</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Props</td>
                                <td>Type</td>
                                <td>Default value</td>
                                <td>Required</td>
                                <td class="w-1/3">Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>true</code></td>
                                <td>For render optimization</td>
                            </tr>
                            <tr>
                                <td><code>label</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>checkboxPosition</code></td>
                                <td><code>string</code></td>
                                <td><code>left</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Accepted values:
                                    <code>"left"</code>, <code>"right"</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>spaced</code></td>
                                <td><code>boolean</code></td>
                                <td><code>false</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Put whitespace between checkbox and label.
                                    Useful when creating full-screen form.
                                </td>
                            </tr>
                            <tr>
                                <td><code>defaultValue</code></td>
                                <td><code>boolean</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>wrapperClass</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    Adding class to the wrapper of the checkbox
                                </td>
                            </tr>
                            <tr>
                                <td><code>checkboxClass</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    Adding class to the input of the checkbox
                                </td>
                            </tr>
                            <tr>
                                <td><code>inputAttrs</code></td>
                                <td>
                                    <a
                                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        ><code>InputHTMLAttributes</code></a
                                    >
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>
                                    Accepting other attributes of input. Passing
                                    events is not advisable. Use emit instead.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Emits">
                <p>
                    Here are the list of available emits for
                    <code>Checkbox</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Emit</td>
                                <td>Parameters</td>
                                <td class="w-1/3">Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>update</code></td>
                                <td>
                                    <pre class="code">{{
                                        codeSample.emitUpdateParams
                                    }}</pre>
                                </td>
                                <td>
                                    For exposing checkbox value to component.
                                    Refer to form guides for more info.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Sample: Left Checkbox">
                <p class="text-dark-500 font-bold">Your favourite food:</p>
                <Checkbox label="🍕" id="first" />
                <Checkbox label="🍔" id="second" />
                <Checkbox label="🥓" id="third" />
                <Checkbox label="Krusty Fried Chicked" id="fourth" />

                <p class="text-dark-500 mt-8 font-bold">
                    How about spaced checkbox?
                </p>
                <div
                    class="
                        max-w-md
                        flex flex-col
                        gap-4
                        p-4
                        border border-light-500
                        rounded
                    "
                >
                    <Checkbox label="Cool" id="ques2-1" :spaced="true" />
                    <Checkbox label="Attractive" id="ques2-2" :spaced="true" />
                    <Checkbox label="Organised" id="ques2-3" :spaced="true" />
                    <Checkbox label="Awesome!" id="ques2-4" :spaced="true" />
                </div>
            </Card>
            <Card title="Sample: Left Checkbox">
                <p class="text-dark-500 font-bold">Your favourite food:</p>
                <Checkbox id="ques3-1" label="🍕" checkbox-position="right" />
                <Checkbox id="ques3-2" label="🍔" checkbox-position="right" />
                <Checkbox id="ques3-3" label="🥓" checkbox-position="right" />
                <Checkbox
                    id="ques3-4"
                    label="Krusty Fried Chicked"
                    checkbox-position="right"
                />
                <Checkbox
                    id="ques3-5"
                    label="You noticed the typo, right?"
                    checkbox-position="right"
                />

                <p class="text-dark-500 mt-8 font-bold">
                    How about spaced checkbox?
                </p>
                <div
                    class="
                        max-w-md
                        flex flex-col
                        gap-4
                        p-4
                        border border-light-500
                        rounded
                    "
                >
                    <Checkbox
                        id="ques4-1"
                        label="Cool"
                        checkbox-position="right"
                        :spaced="true"
                    />
                    <Checkbox
                        id="ques4-2"
                        label="Attractive"
                        checkbox-position="right"
                        :spaced="true"
                    />
                    <Checkbox
                        id="ques4-3"
                        label="Organised"
                        checkbox-position="right"
                        :spaced="true"
                    />
                    <Checkbox
                        id="ques4-4"
                        label="Awesome"
                        checkbox-position="right"
                        :spaced="true"
                    />
                </div>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Checkbox from "@/components/forms/Checkbox.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
// import { faFlask } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { importCheckbox } from "@/sample/codeSample";

const codeSample = {
    emitUpdateParams: `payload: {
    name: string,
    value: string | number
}`,
};
</script>
