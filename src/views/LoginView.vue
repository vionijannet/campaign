<template>
    <div class="grid lg:grid-cols-2 h-screen">
        <div class="hidden lg:flex bg-sky-100 items-center p-8">
            <img src="@/assets/login-img.png" alt="Login Page">
        </div>
        <div class="bg-gray-200 flex items-center">
            <div class="mx-auto bg-white rounded-2xl p-8 leading-8 w-3/4 max-w-xl space-y-2">
                <img src="@/assets/logo.png" alt="RepliEm" class="mx-auto w-10">
                <h1 class="font-extrabold text-4xl text-center">Welcome to RepliEm</h1>

                <div class="py-8 space-y-4 !pb-2">
                    <InputText label-for="username" label-text="Username" placeholder="Ex: john_doe" />
                    <div>
                        <InputPassword label-for="password" label-text="Password" placeholder="********" />
                        <!-- <p class="text-sm underline cursor-pointer py-1" @click="isPopupForgotPasswordShown = true">
                            Forgot your password?
                        </p> -->
                    </div>
                </div>

                <div class="py-8 space-y-1">
                    <ButtonBase @click="signIn">Sign In</ButtonBase>
                    <p class="text-xs text-right py-1 text-neutral-500">Not on RepliEm yet?
                        <b class="underline cursor-pointer" @click="isPopupCreateAccountShown = true">Sign Up</b>
                    </p>
                </div>

                <p class="text-xs text-neutral-500">by continuing, you agree to RepliEm's
                    <b class="underline cursor-pointer" @click="redirectTo('tos')">Terms of Service</b> and acknowledge
                    you've read our <b class="underline cursor-pointer" @click="redirectTo('policy')">Privacy Policy</b>.
                </p>
            </div>
        </div>
    </div>

    <ModalComponent v-if="isPopupCreateAccountShown" @close="isPopupCreateAccountShown = false">
        <CreateAccount></CreateAccount>
    </ModalComponent>
</template>

<script setup lang="ts">
import ButtonBase from "@/components/button/ButtonBase.vue";
import { onMounted, ref, watch } from "vue";
import router from "@/router";
import ModalComponent from "@/components/modal/ModalComponent.vue";
import CreateAccount from "./account/CreateAccount.vue";
import { useUserStore } from "@/stores/UserStore";
import { initFacebook } from '@/oauth-fb/FacebookAuth';
import { useRoute } from "vue-router";
import InputText from "@/components/input/InputText.vue";
import InputPassword from "@/components/input/InputPassword.vue";

onMounted(async () => {
    initFacebook(import.meta.env.VITE_APP_ID);
})

const isPopupCreateAccountShown = ref(false);

const siteKey = "6Lc9Z40hAAAAAFRdtS72GNcB76a1ltmdqWQ-6Zd5";

const userStore = useUserStore();

const route = useRoute();

onMounted(() => {
    if (userStore.token.trim().length > 0) {
        router.push("/");
    } else if (route.query.code) {
        getToken(route.query.code as string);
    }

    // TEST DUMMY GET CODE FROM OAUTH
    // subscription.add(
    //     interval(5000).subscribe(() => {
    //         router.push("/sign-in?code=tokenabcdefg")
    //     })
    // )
})

// const subscription = new Subscription();

// onUnmounted(() => {
//     subscription.unsubscribe();
// })

function redirectTo(name: string): void {
    const path = name === "tos" ? "/terms" : "/policy";
    const routeData = router.resolve(path);
    window.open(routeData.href, "_blank");
}

function signIn(): void {
    userStore.setName("John Doe");
    userStore.setEmail("johndoe@gmail.com");
    userStore.setRole("Administrator");
    userStore.setPhone("08113276836");
    userStore.setToken("tokenabcdefg");

    router.push("/");
}

function getToken(token: string): void {
    console.log("get token", token);
    signIn();
}

watch(route, (value) => {
    if (value.query.code) {
        getToken(value.query.code as string);
    }
}, {
    deep: true
});
</script>