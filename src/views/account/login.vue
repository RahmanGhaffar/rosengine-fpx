<template>
    <div class="h-screen w-screen flex py-20 items-center flex-col">
        <Card class="max-w-2xl">
            <img
                src="https://assets-rosengine.s3.ap-southeast-1.amazonaws.com/images/rosengine-logo.png"
                width="120"
                alt="Rosengine Logo"
                class="m-auto"
            />
            <!-- Login Page -->
            <section class="flex flex-col gap-4 px-12">
                <span class="text-bold">Welcome Back!</span>
                <span>Enter your email address and password to proceed.</span>
                <form @submit.prevent="loginUser">
                    <Input
                        v-model="login.email"
                        type="email"
                        labelPostiton="top"
                        label="Email"
                        prefix="faEnvelope"
                    />
                    <Input
                        v-model="login.password"
                        type="password"
                        labelPostiton="top"
                        label="Password"
                        prefix="faEnvelope"
                    />
                    <a href="/forgot-password" class="float-right"
                        ><span class="link-light mt-2"
                            >Forgot Your password?</span
                        ></a
                    >
                    <Checkbox
                        checkboxPosition="left"
                        class="mt-12"
                        label="Remember me"
                    />
                    <button
                        type="submit"
                        :disabled="login.email === '' || login.password === ''"
                        class="btn-base btn-pink mt-8 w-full"
                    >
                        Log in
                    </button>
                </form>
            </section>
        </Card>
        <span class="text-light"
            >Please contact the system admin if you does not have an
            account.</span
        >
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/containers/Card.vue";
import Input from "@/components/forms/Input.vue";
import Checkbox from "@/components/forms/Checkbox.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const login = reactive({
    email: "",
    password: "",
});

const loginUser = () => {
    router.push("/set-pin");
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
