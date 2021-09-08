<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Inputs</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Input is one of the crucial element in a web app. A more
                    intuitive input will ease user experience.
                </p>

                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importInput }}
                    </code-highlight>
                </div>
            </Card>
            <Card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>Input</code> component:
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
                                <td>Input label</td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>labelPosition</code></td>
                                <td><code>string</code></td>
                                <td><code>top</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Accepted values:
                                    <code>"top"</code>, <code>"side"</code>,
                                    <code>"float"</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>defaultValue</code></td>
                                <td>
                                    <code>string</code> | <code>number</code>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code class="mr-1">inputValidator</code>
                                    <FontAwesomeIcon :icon="faFlask" />
                                </td>
                                <td><code>Function</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>placeholder</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>type</code></td>
                                <td><code>string</code></td>
                                <td>text</td>
                                <td><code>false</code></td>
                                <td>
                                    This is inherited from
                                    <code>type</code> parameter that accepted by
                                    native <code>input</code> elements. Each
                                    types are handled by the component,
                                    including <code>password</code>,
                                    <code>number</code> and so on, except for
                                    <code>file</code>.
                                </td>
                            </tr>
                            <tr>
                                <td><code>prefix</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>Appending static text in front of input</td>
                            </tr>
                            <tr>
                                <td><code>postfix</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>Appending static text after input</td>
                            </tr>
                            <tr>
                                <td><code>required</code></td>
                                <td><code>boolean</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    Other input props are also accepted like
                                    <code>min</code>, <code>max</code>,
                                    <code>minlength</code>, etc.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Emits">
                <p>
                    Here are the list of available emits for
                    <code>Input</code> component:
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
                                    For exposing input value to component. Refer
                                    to form guides for more info.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Sample: Side Label">
                <Input id="test-input-1" label-position="side" label="Name" />
                <Input
                    id="test-input-2"
                    label-position="side"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <Input
                    id="test-input-3"
                    label-position="side"
                    label="Father's name"
                    default-value="This is default value"
                />
            </Card>
            <Card title="Sample: Top Label">
                <Input id="test-input-1" label-position="top" label="Name" />
                <Input
                    id="test-input-2"
                    label-position="top"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <Input
                    id="test-input-3"
                    label-position="top"
                    label="Father's name"
                    default-value="This is default value"
                />
            </Card>
            <Card title="Sample: Float Label">
                <Input id="test-input-1" label-position="float" label="Name" />
                <Input
                    id="test-input-2"
                    label-position="float"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <Input
                    id="test-input-3"
                    label-position="float"
                    label="Father's name"
                    default-value="This is default value, try delete this input to make it submerge again!"
                />
            </Card>
            <Card title="Sample: Float Label (with grid)">
                <div class="grid grid-cols-2 gap-x-16 gap-y-4">
                    <Input
                        id="test-input-1"
                        label-position="float"
                        label="Name"
                    />
                    <Input
                        id="test-input-2"
                        label-position="float"
                        label="Mother's name"
                        placeholder="Can I be placeholder?"
                    />
                    <Input
                        id="test-input-3"
                        label-position="float"
                        label="Father's name"
                        default-value="This is default value."
                    />
                    <Input
                        id="test-input-3"
                        label-position="float"
                        label="Father's name"
                        default-value="This is default value."
                    />
                </div>
            </Card>
            <Card
                title="Sample: Error simulator"
                subtitle="These inputs should be email, try to input an invalid email format"
            >
                <Input
                    id="test-input-1"
                    label-position="float"
                    label="Email"
                    type="email"
                />
                <Input
                    id="test-input-1"
                    label-position="float"
                    label="Email"
                    type="email"
                />
                <Input
                    id="test-input-2"
                    label-position="float"
                    label="Mother's email"
                    :required="true"
                    placeholder="Can I be placeholder?"
                    type="email"
                />
                <Input
                    id="test-input-3"
                    label-position="float"
                    label="Father's email"
                    default-value="abc@gmail.com"
                    type="email"
                />
            </Card>
            <Card title="Sample: Prefixes and Postfixes">
                <Input
                    id="test-input-1"
                    label-position="float"
                    label="Price (with prefix)"
                    type="number"
                    min="1"
                    prefix="MYR"
                    minlength="10"
                />
                <Input
                    id="test-input-1"
                    label-position="float"
                    label="Email (with postfix)"
                    postfix="@corrad.com"
                    minlength="5"
                />
                <Input
                    id="test-input-1"
                    label-position="float"
                    label="Email (with prefix &amp; postfix)"
                    prefix="user."
                    postfix="@corrad.com"
                    minlength="5"
                />
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const codeSample = {
    importInput: `<template>
    <Input
        id="test-input-1"
        label-position="float"
        label="Name"
    />
</template>

<script setup lang="ts">
import Input from "@/components/forms/Input.vue";
<script>`,
    emitUpdateParams: `payload: {
    name: string,
    value: string | number
}`,
};
</script>
