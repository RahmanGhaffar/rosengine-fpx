<template>
    <div class="h-screen">
        <header
            class="
                bg-white
                h-header
                flex flex-row
                shadow-md
                items-center
                justify-end
                px-8
                py-2
                sticky
                top-0
                z-50
                w-screen
            "
        >
            <router-link to="/login"
                ><button class="btn-base btn-info">Log In</button></router-link
            >
        </header>
        <div class="flex flex-col h-4/5 justify-center items-center gap-4">
            <img
                src="https://assets-rosengine.s3.ap-southeast-1.amazonaws.com/images/rosengine-logo.png"
                width="300"
                alt="Rosengine Logo"
            />
            <label>Log in to access the engines.</label>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
