<template>
    <Layout>
        <h5>Welcome to payment Testing</h5>
        <form class="flex flex-col gap-4">
            <label>Please select bank to proceed.</label>
            <select class="w-max">
                <option v-for="data in bank" :key="data.code">
                    {{ data.name }}
                </option>
            </select>
        </form>
    </Layout>
</template>
<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import { reactive, onMounted, ref } from "vue";
import axios from "axios";

const bank = ref([]);

onMounted(async () => {
    console.log("testing");
    var data = JSON.stringify({
        sellerId: "SE00006196",
        exchangeId: "EX00005371",
    });

    var config = {
        method: "post",
        url: "https://api.rosengine.com/bank-list",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    var res = await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    bank.value = res.data;
});
</script>
