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
                    <InputText v-model="loginReq.username" label-for="username" label-text="Username"
                        placeholder="Ex: john_doe" :validation="usernameValidation" @enter="signIn" />
                    <div>
                        <InputPassword v-model="loginReq.password" label-for="password" label-text="Password"
                            placeholder="********" :validation="passwordValidation" @enter="signIn" />
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
        <CreateAccount @success="onSuccessSignUp"></CreateAccount>
    </ModalComponent>

    <LoadingScreen v-if="isLoading" />
</template>

<script setup lang="ts">
import ButtonBase from "@/components/button/ButtonBase.vue";
import { Ref, inject, onMounted, ref } from "vue";
import router from "@/router";
import ModalComponent from "@/components/modal/ModalComponent.vue";
import CreateAccount from "./account/CreateAccount.vue";
import { useUserStore } from "@/stores/UserStore";
import InputText from "@/components/input/InputText.vue";
import InputPassword from "@/components/input/InputPassword.vue";
import { LoginReq } from "@/entity/user/LoginReq";
import { LoginUseCase } from "@/usecase/user/LoginUseCase";
import { FieldError } from "@/entity/BaseResp";
import { finalize } from "rxjs";
import { NotificationManager } from "@/util/NotificationManager";
import { RegisterResp } from "@/entity/user/RegisterResp";
import { RegisterReq } from "@/entity/user/RegisterReq";
import LoadingScreen from "@/components/loading/LoadingScreen.vue";

const isPopupCreateAccountShown = ref(false);

const loginReq: Ref<LoginReq> = ref({
    username: "",
    password: "",
} as LoginReq);
const isLoading = ref(false);

const usernameValidation = ref("");
const passwordValidation = ref("");

const userStore = useUserStore();

const loginUseCase: LoginUseCase = inject("loginUseCase")!;

onMounted(() => {
    if (userStore.token.trim().length > 0) {
        if (userStore.isAlreadyAddFacebook) {
            router.push("/");
        } else {
            router.push("/facebook");
        }
    }
})

function redirectTo(name: string): void {
    const path = name === "tos" ? "/terms" : "/policy";
    const routeData = router.resolve(path);
    window.open(routeData.href, "_blank");
}

function signIn(): void {
    resetValidation(); 
    
    const errorList = loginUseCase.validate(loginReq.value);
    if (errorList.length < 1) {
        isLoading.value = true;

        loginUseCase.execute(loginReq.value)
            .pipe(
                finalize(() => isLoading.value = false)
            ).subscribe(
                {
                    next: (resp) => {
                        if (resp.code === 200) {
                            userStore.setName(resp.result.data.full_name ?? "John Doe");
                            userStore.setEmail(resp.result.data.email ?? "johndoe@gmail.com");
                            userStore.setRole(resp.result.data.role ?? "User");
                            userStore.setPhone(resp.result.data.phone_number ?? "08113276836");
                            userStore.setToken(resp.result.data.access_token ?? "INVALIDTOKEN");
                            userStore.setFacebookAccount(true);

                            router.push("/");
                        } else {
                            const message = resp.result?.message ?? resp.message;
                            NotificationManager.showMessage("Failed to Sign In", message, "error");
                        }
                    },
                    error: (error) => {
                        NotificationManager.showMessage("Failed to Sign In", error, "error");
                    }
                }
            )
    } else {
        validateUsername(errorList);
        validatePassword(errorList);
    }
}

function resetValidation(): void {
    usernameValidation.value = "";
    passwordValidation.value = "";
}

function validateUsername(errorList: FieldError[]): void {
    const filteredError = errorList.filter(data => data.field === "username");
    usernameValidation.value = filteredError.length > 0 ?
        filteredError[0].message[0] : "";
}

function validatePassword(errorList: FieldError[]): void {
    const filteredError = errorList.filter(data => data.field === "password");
    passwordValidation.value = filteredError.length > 0 ?
        filteredError[0].message[0] : "";
}

function onSuccessSignUp(req: RegisterReq, resp: RegisterResp) {
    userStore.setName(req.full_name ?? "John Doe");
    userStore.setEmail(req.email ?? "johndoe@gmail.com");
    userStore.setRole(resp.result.data.role ?? "User");
    userStore.setPhone(req.phone_number ?? "08113276836");
    userStore.setToken(resp.result.data.access_token ?? "INVALIDTOKEN");
    userStore.setFacebookAccount(false);

    router.push("/facebook");
}
</script>