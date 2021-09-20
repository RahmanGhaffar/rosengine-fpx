<template>
    <div class="h-screen w-screen flex py-20 items-center flex-col">
        <Card class="max-w-xl">
            <img
                src="https://assets-rosengine.s3.ap-southeast-1.amazonaws.com/images/rosengine-logo.png"
                width="120"
                alt="Rosengine Logo"
                class="m-auto"
            />
            <!-- First Time Section -->
            <form @submit.prevent="savePin" class="flex flex-col gap-4 px-12">
                <span class="text-bold">First time log in</span>
                <label class="text-light"
                    >We need to set you
                    <span class="text-pink"
                        >Personal Identification Number (PIN)
                    </span>
                    first to secure your activity in the system.</label
                >
                <label class="self-center">6 digits PIN</label>
                <Pin v-model="pin.value" :length="6" class="self-center" />
                <span class="text-light mb-12"
                    >Please enter <span class="text-pink">6 digits</span> number
                    in the field above and
                    <span class="text-pink">remember</span> it for your future
                    use.</span
                >
                <button
                    type="submit"
                    :disabled="pin.value === ''"
                    class="btn-base btn-pink w-full"
                >
                    Submit
                </button>
            </form>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/containers/Card.vue";
import Pin from "@/components/forms/pin.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Pin Function
const pin = reactive({
    value: "",
});

const savePin = () => {
    router.push("/transaction-report");
};
</script>

<style lang="postcss" scoped>
/* Text */
.text-bold {
    font-weight: 500;
}

.text-pink {
    color: #ff3887;
}

.text-light {
    color: #6c757d;
}

/* Link */
.link-light {
    color: rgb(0, 0, 0, 0.5);
    text-decoration: underline;
    text-decoration-color: rgb(0, 0, 0, 0.5);
}

.link-light:hover {
    color: rgb(0, 0, 0, 0.8);
    text-decoration-color: rgb(0, 0, 0, 0.8);
}
/* button */
.btn-pink {
    background-color: #ff95bf;
    color: white;
}

.btn-pink:hover:enabled {
    background-color: #ff3887;
}
</style>
