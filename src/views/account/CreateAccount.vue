<template>
    <div class="flex items-center">
        <div class="mx-auto bg-white rounded-2xl p-8 leading-8 w-3/4 max-w-xl space-y-2">
            <img src="@/assets/logo.png" alt="RepliEm" class="mx-auto w-10">
            <h1 class="font-extrabold text-4xl text-center">Welcome to RepliEm</h1>

            <div class="py-8 space-y-4">
                <InputText v-model="registerReq.username" label-for="username" label-text="Username"
                    placeholder="Example: johndoe123" :validation="usernameValidation" />
                <InputText v-model="registerReq.full_name" label-for="fullname" label-text="Full Name"
                    placeholder="John Doe" :validation="fullNameValidation" />
                <InputText v-model="registerReq.email" label-for="email" label-text="Email"
                    placeholder="example@mail.com" :validation="emailValidation" />
                <InputPassword v-model="registerReq.password" label-for="password" label-text="Password"
                    placeholder="********" :validation="passwordValidation" />
                <InputText v-model="registerReq.phone_number" label-for="phone" label-text="Phone Number"
                    placeholder="Example: 089876478291" :validation="phoneValidation" />
            </div>

            <ButtonBase @click="signUp">Sign Up</ButtonBase>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputText from "@/components/input/InputText.vue";
import InputPassword from "@/components/input/InputPassword.vue";
import ButtonBase from "@/components/button/ButtonBase.vue";
import { RegisterReq } from "@/entity/user/RegisterReq";
import { Ref, ref, inject, onMounted } from "vue";
import { RegisterUseCase } from "@/usecase/user/RegisterUseCase";
import { FieldError } from "@/entity/BaseResp";
import { finalize } from "rxjs";
import { NotificationManager } from "@/util/NotificationManager";

const registerReq: Ref<RegisterReq> = ref({
    email: "",
    full_name: "",
    password: "",
    phone_number: "",
    username: ""
} as RegisterReq)

const emailValidation = ref("");
const fullNameValidation = ref("");
const passwordValidation = ref("");
const phoneValidation = ref("");
const usernameValidation = ref("");

const isLoading = ref(true);

const emit = defineEmits(["success"]);

const registerUseCase: RegisterUseCase = inject("registerUseCase")!;

function signUp(): void {
    resetValidation();

    const errorList = registerUseCase.validate(registerReq.value);
    if (errorList.length < 1) {
        isLoading.value = true;

        registerUseCase.execute(registerReq.value)
            .pipe(
                finalize(() => isLoading.value = false)
            ).subscribe(
                {
                    next: (resp) => {
                        if (resp.code === 200) {
                            emit("success", registerReq.value, resp);
                        } else {
                            const message = resp.result?.message ?? resp.message;
                            NotificationManager.showMessage("Failed to Sign Up", message, "error");
                        }
                    },
                    error: (error) => {
                        NotificationManager.showMessage("Failed to Sign Up", error, "error");
                    }
                }
            )
    } else {
        validateUsername(errorList);
        validatePassword(errorList);
        validateFullName(errorList);
        validateEmail(errorList);
        validatePhone(errorList);
    }
}

function resetValidation(): void {
    emailValidation.value = "";
    fullNameValidation.value = "";
    passwordValidation.value = "";
    phoneValidation.value = "";
    usernameValidation.value = "";
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

function validateFullName(errorList: FieldError[]): void {
    const filteredError = errorList.filter(data => data.field === "full_name");
    fullNameValidation.value = filteredError.length > 0 ?
        filteredError[0].message[0] : "";
}

function validateEmail(errorList: FieldError[]): void {
    const filteredError = errorList.filter(data => data.field === "email");
    emailValidation.value = filteredError.length > 0 ?
        filteredError[0].message[0] : "";
}

function validatePhone(errorList: FieldError[]): void {
    const filteredError = errorList.filter(data => data.field === "phone_number");
    phoneValidation.value = filteredError.length > 0 ?
        filteredError[0].message[0] : "";
}
</script>
