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
                    <p class="cursor-pointer font-semibold" @click="indexActiveMessage = index"
                        :class="{ 'text-blue-primary': indexActiveMessage === index, 'text-gray-700': indexActiveMessage !== index }" v-for="m, index in messageList.length" :key="index">Message {{ m }}</p>
                </div>
                <ButtonBase type="secondary" class="!w-36 !py-2 !px-4" @click="addMessage">Add Message</ButtonBase>
            </div>
            <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                <textarea class="w-full border rounded-2xl outline-none p-4" rows="4" placeholder="Type your message" v-model="messageList[indexActiveMessage].message"></textarea>
            </div>
        </div>

        <div class="w-full">
            <div class="border border-b-0 p-4 rounded-2xl rounded-b-none flex items-center justify-between">
                <div class="flex-col">
                    <p class="font-medium">Upload Image</p>
                    <p class="font-light text-sm text-gray-700">You can upload multiple image at one time</p>
                </div>
                <div>
                    <label for="upload-image" class="flex items-center cursor-pointer border bg-white hover:bg-gray-100 border-blue-primary text-blue-primary p-2 px-4 rounded-lg font-semibold">Browse Image</label>
                    <input @change="uploadFile($event)" type="file" multiple name="image" id="upload-image" class="hidden">
                </div>
                <!-- <ButtonBase type="secondary" class="!w-36">Browse Image</ButtonBase> -->
            </div>
            <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                <div v-if="attachmentList.length < 1">
                    <label for="upload-image" class="flex text-center items-center flex-col space-y-4 p-8">
                        <img src="@/assets/upload.svg" alt="Upload">
                        <p class="text-stone-500">Select Image to Upload</p>
                    </label>
                </div>
                <div v-else class="grid grid-cols-4 gap-4">
                    <div class="border flex items-center bg-white rounded-lg" v-for="attachment, index in attachmentList" :key="index">
                        <div class="p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                        </div>
                        <div class="flex items-center w-full h-full pl-4 border-l">
                            <div class="flex-col">
                                <p class="truncate max-w-fit">
                                    {{ attachment.filename }}
                                </p>
                                <p class="text-xs text-red-500 cursor-pointer hover:underline" @click="removeAttachment(index)">
                                    Remove
                                </p>
                            </div>
                        </div>
                    </div>
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
import { Message, MessageAttachment } from '@/entity/message/TemplateMessage';
import router from '@/router';
import { ref, type Ref } from 'vue';
import { useRoute } from "vue-router";

const indexActiveMessage = ref(0);
const messageList: Ref<Message[]> = ref([
    {
        message: "abc"
    },
    {
        message: "def"
    },
    {
        message: "ghi"
    },
    {
        message: "jkl"
    }
]);

const attachmentList: Ref<MessageAttachment[]> = ref([]);

function backToList(): void {
    router.push("/message");
}

function addMessage(): void {
    messageList.value.push({
        message: ""
    });
}

function uploadFile(event: Event): void {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList) {
        for (let i = 0; i < fileList.length; i++) {
            attachmentList.value.push({
                filename: fileList[i].name,
                checksum: "",
                messageAttachment: fileList[i]
            });
        }
    }
}

function removeAttachment(index: number): void {
    attachmentList.value.splice(index, 1);
}
</script>