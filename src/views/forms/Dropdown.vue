<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Dropdown</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>
                    Dropdown is one of the crucial element in a web app. A more
                    intuitive input will ease user experience.
                </p>

                <div class="max-w-3xl w-full">
                    <code-highlight languange="typescript">
                        {{ importDropdown }}
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
                                <td><code>true</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>labelPosition</code></td>
                                <td><code>string</code></td>
                                <td><code>top</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Accepted values:
                                    <code>"top"</code>, <code>"side"</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>placeholder</code></td>
                                <td><code>string</code></td>
                                <td>Please select one...</td>
                                <td><code>true</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>options</code></td>
                                <td>
                                    <code>Array&lt;DropdownOption&gt;</code>
                                </td>
                                <td><code>[]</code></td>
                                <td><code>false</code></td>
                                <td>
                                    Adding class to the wrapper of the checkbox
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Emits">
                <p>
                    Here are the list of available emits for
                    <code>Dropdown</code> component:
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
                                    <!-- <pre class="code">{{
                                        codeSample.emitUpdateParams
                                    }}</pre> -->
                                </td>
                                <td>
                                    For exposing dropdown value to component.
                                    Refer to form guides for more info.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <Card title="Dropdown sample">
                <form
                    @submit.prevent="handleSubmit"
                    class="flex flex-col gap-4"
                >
                    <Dropdown
                        id="dropdown-1"
                        label="Choose one"
                        :options="sampleOptions1"
                    />
                    <Dropdown
                        id="dropdown-2"
                        label="Choose one (with example)"
                        :options="sampleOptions2"
                    />
                    <button type="submit" class="btn-base btn-primary">
                        Submit
                    </button>
                </form>
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import Dropdown from "@/components/forms/Dropdown.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
// import { faFlask } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { importDropdown } from "@/sample/codeSample";

const sampleOptions1 = [
    {
        value: "option-1",
        label: "Option 1",
    },
    {
        value: "option-2",
        label: "Option 2",
    },
    {
        value: "option-3",
        label: "Option 3",
    },
    {
        value: "option-4",
        label: "Option 4",
    },
    {
        value: "option-5",
        label: "Option 5",
    },
];

const sampleOptions2 = [
    {
        value: "option-1",
        label: "Option 1",
    },
    {
        value: "option-2",
        label: "Option 2",
        disabled: true,
    },
    {
        value: "option-3",
        label: "Option 3",
    },
    {
        value: "option-4",
        label: "Option 4",
    },
    {
        value: "option-5",
        label: "Option 5",
    },
];

const handleSubmit = ({ target }: { target: HTMLFormElement }) => {
    console.log(
        Object.values(target.elements).filter((element) =>
            ["dropdown-1", "dropdown-2"].includes(element.id)
        )
    );
};

// const handleUpdate = ({
//     name,
//     value,
// }: {
//     name: string;
//     value: string | number;
// }) => {
//     // console.log({ name, value });
// };

// const codeSample = {
//     emitUpdateParams: `payload: {
//     name: string,
//     value: string | number
// }`,
// };
</script>
