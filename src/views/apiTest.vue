<template>
    <div class="h-screen w-screen">
        <h1 class="m-4 text-center">API Testing Page</h1>
        <form
            method="post"
            action="https://fpx-api.rosengine.com/staging/payment"
            class="grid items-center grid-cols-2"
        >
            <div class="flex flex-col gap-4 m-4 content-start">
                <div class="form-group">
                    <label class>Ref No</label>
                    <input
                        class="form-input"
                        name="paymentRefNo"
                        v-model="txnId"
                    />
                </div>
                <div class="form-group">
                    <label class>Payment Desc</label>
                    <input
                        class="form-input"
                        name="paymentDescription"
                        value="Testing UAT"
                    />
                </div>
                <div class="form-group">
                    <label>Payment Amount</label>
                    <input
                        class="form-input"
                        name="paymentAmount"
                        value="1.00"
                    />
                </div>
                <div class="form-group">
                    <label>Buyer Email</label>
                    <input
                        name="buyerEmail"
                        class="form-input"
                        value="rahman.ghaffar98@gmail.com"
                    />
                </div>
            </div>
            <div class="flex flex-col gap-4 m-4">
                <div class="form-group">
                    <label>Buyer Bank</label>
                    <div class="grid grid-cols-3 gap-x-2">
                        <div v-for="list in bankList" :key="list.code">
                            <input
                                type="radio"
                                :id="list.code"
                                name="buyerBank"
                                :value="list.code"
                            />
                            <label class="ml-2" :for="list.code">
                                {{ list.name }}
                            </label>
                            <br />
                        </div>
                    </div>

                    <!-- <select class="rounded-lg border" id="buyerBank" name="buyerBank">
                        <option
                            v-for="list in bankList"
                            :key="list.code"
                            :value="list.code"
                        >{{ list.name }}</option>
                    </select>-->
                    <!-- <input name="buyer_bank" value="TEST0021" /> -->
                </div>
                <input
                    type="hidden"
                    name="apiKey"
                    value="FYC9NT0-W7P4PEJ-NPZ3TVY-0NYVBVQ"
                />
                <button class="btn-primary btn-base" type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            bankList: [
                { code: "d", name: "This one is disabled", disabled: true },
            ],
            selectedBank: {},
            sellerId: "SE00006196",
            exchangeId: "EX00005371",
            txnId: "",
        };
    },

    async created() {
        var d = new Date();
        //  d.setHours(d.getHours() + 8);
        // d.setTime(d.getTime() + 8 * 60 * 60 * 1000);
        var timestamp =
            d.getFullYear() +
            (d.getMonth() + 1).toString().padStart(2, "0") +
            d.getDate().toString().padStart(2, "0") +
            d.getHours().toString().padStart(2, "0") +
            d.getMinutes().toString().padStart(2, "0") +
            d.getSeconds().toString().padStart(2, "0");

        this.txnId = timestamp;
        var data = JSON.stringify({
            apiKey: "X8RA9MT-BA64ZR7-MS7N4P8-YGZ7AZV",
        });
        var config = {
            method: "post",
            url: "https://fpx-api.rosengine.com/staging/bankList",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        var list = await axios(config)
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                console.error(error);
            });
        this.bankList = list;
        // this.bankList = [...this.bankList, list]
    },
};
</script>

<style scoped type="postcss">
.form-group {
    @apply flex flex-col gap-2;
}

.form-input {
    @apply rounded-lg border p-2 border-light-700;
}
</style>
