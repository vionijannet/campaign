<template>
    <div class="grid lg:grid-cols-2 h-screen">
        <div class="hidden lg:block bg-blue-300">
        </div>
        <div class="bg-gray-200 flex items-center">
            <div class="mx-auto bg-white rounded-2xl p-8 leading-8 w-3/4 max-w-xl">
                <h1 class="font-bold text-2xl">Sign In to Your Account</h1>
                <h2 class="text-gray-500">Enter email, password & token to login</h2>

                <div class="py-8 space-y-4">
                    <InputText label-for="email" label-text="Email Address" placeholder="example@mail.com" />
                    <InputText label-for="password" label-text="Password" placeholder="********" />
                    <InputText label-for="token" label-text="Token" placeholder="ex. 2T8Y67K" />
                </div>

                <ButtonBase @click="$router.push('/')">Sign In</ButtonBase>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputText from "@/components/input/InputText.vue";
import ButtonBase from "@/components/button/ButtonBase.vue";
</script>
