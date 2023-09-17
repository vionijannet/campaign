<template>
    <div class="absolute -top-2 right-0 my-6 mx-8 flex space-x-4">
        <ButtonBase class="flex" @click="backToList">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span class="ml-2">Back</span>
        </ButtonBase>
    </div>
    <div class="bg-white w-full rounded-2xl p-6 space-y-6">
        <InputText label-for="template-name" label-text="Template Name" placeholder="Type your template name"></InputText>

        <div class="w-full">
            <div class="border border-b-0 p-4 rounded-2xl rounded-b-none flex items-center justify-between">
                <div class="flex items-center justify-start space-x-8">
                    <p class="cursor-pointer font-semibold text-blue-primary">Message 1</p>
                    <p class="cursor-pointer font-semibold text-gray-700">Message 2</p>
                    <p class="cursor-pointer font-semibold text-gray-700">Message 3</p>
                </div>
                <ButtonBase type="secondary" class="!w-36">Add Message</ButtonBase>
            </div>
            <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                <textarea class="w-full border rounded-2xl outline-none p-4" rows="4" placeholder="Type your message"></textarea>
            </div>
        </div>

        <div class="w-full">
            <div class="border border-b-0 p-4 rounded-2xl rounded-b-none flex items-center justify-between">
                <div class="flex-col">
                    <p class="font-medium">Upload Image</p>
                    <p class="font-light text-sm text-gray-700">You can upload multiple image at one time</p>
                </div>
                <ButtonBase type="secondary" class="!w-36">Browse Image</ButtonBase>
            </div>
            <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                <div v-if="true" class="flex text-center items-center flex-col space-y-4 p-8">
                    <img src="@/assets/upload.svg" alt="Upload">
                    <p class="text-stone-500">Select Image to Upload</p>
                </div>
            </div>
        </div>
        
        <hr />
        <div class="w-full flex justify-end items-center space-x-4">
            <ButtonBase type="error" class="!w-32" @click="backToList">Cancel</ButtonBase>
            <ButtonBase class="!w-32">Save</ButtonBase>
        </div>
    </div>

    <LoadingScreen v-if="false"></LoadingScreen>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import InputText from '@/components/input/InputText.vue';
import LoadingScreen from '@/components/loading/LoadingScreen.vue';
import router from '@/router';
import { ref, type Ref } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
const isSchedulerOn = ref(false);

function backToList(): void {
    router.push("/message");
}
</script>