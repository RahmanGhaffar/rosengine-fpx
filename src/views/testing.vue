<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Welcome to Corrad Neo</h1>
            <p class="text-light-700">
                An admin dashboard, created with perfection, powered by
                TailwindCSS and Vue!
            </p>
        </section>
        <Card title="Customisation" cardClass="max-w-screen-lg">
            <p>
                You can explore all components available out of the box for you
                to customise your admin dashboard! Choose what matters to you,
                and start building your own dashboard!

                <br />

                We are still expanding our component libraries, so you can do a
                lot with dashboard customisation, from modal, auth options, and
                others.

                <br />

                To help us build a great dashboard, you can head to our
                <a
                    href="https://github.com/alserembani94/neo-corrad-v1"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Corrad Github</a
                >
                and post issues. Or, you can just do pull request, and our team
                will review your suggestions!
            </p>
        </Card>
    </layout>
</template>

<script setup lang="ts">
import layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
</script>
