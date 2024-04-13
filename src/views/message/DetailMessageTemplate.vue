<template>
    <div class="p-4 space-y-4">
        <p class="text-2xl font-bold">Detail Message</p>

        <div class="w-full" v-if="messageList.length > 0">
            <p>Template Name</p>
            <div class="w-full pt-2">
                <div class="border border-b-0 p-4 rounded-2xl rounded-b-none">
                    <div class="flex items-center justify-start space-x-8">
                        <p class="cursor-pointer font-semibold" @click="indexActiveMessage = index"
                            :class="{ 'text-blue-primary': indexActiveMessage === index, 'text-gray-700': indexActiveMessage !== index }" v-for="m, index in messageList.length" :key="index">Message {{ m }}</p>
                    </div>
                </div>
                <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                    <textarea disabled class="w-full resize-none bg-gray-100 rounded-2xl outline-none p-4" rows="4" placeholder="Type your message" v-model="messageList[indexActiveMessage].message"></textarea>
                </div>
            </div>
        </div>

        <div class="w-full" v-if="greetingList.length > 0">
            <p>Greetings Name</p>
            <div class="w-full pt-2">
                <div class="border border-b-0 p-4 rounded-2xl rounded-b-none flex items-center justify-between">
                    <div class="flex items-center justify-start space-x-8">
                        <p class="cursor-pointer font-semibold" @click="indexActiveGreeting = index"
                            :class="{ 'text-blue-primary': indexActiveGreeting === index, 'text-gray-700': indexActiveGreeting !== index }" v-for="g, index in greetingList.length" :key="index">Greeting {{ g }}</p>
                    </div>
                </div>
                <div class="border p-4 rounded-2xl border-t-0 rounded-t-none bg-gray-100">
                    <textarea disabled class="w-full resize-none bg-gray-100 rounded-2xl outline-none p-4" rows="4" placeholder="Type your message" v-model="greetingList[indexActiveGreeting].message"></textarea>
                </div>
            </div>
        </div>

        <div class="w-full" v-if="attachmentList.length > 0">
            <p>Attachment</p>
            <div class="w-full pt-2">
                <div class=" border rounded-2xl p-4 bg-gray-100">
                    <div class="border flex items-center bg-white rounded-lg">
                        <div class="p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                        </div>
                        <div class="flex items-center w-full h-full pl-4 border-l">
                            <div class="flex-col w-full">
                                <p class="truncate max-w-[calc(100%-3.5rem)] hover:underline hover:text-blue-darkest cursor-pointer" @click="openImage(attachmentList[0].message)">
                                    {{ attachmentList[0].message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Message } from "@/entity/message/TemplateMessage";
import { GetDetailTemplateUseCase } from "@/usecase/template/GetDetailTemplateUseCase";
import { NotificationManager } from "@/util/NotificationManager";
import { Subscription } from "rxjs";
import { Ref, inject, onMounted, ref } from "vue";

const props = defineProps({
    templateId: {
        type: String,
        default: ""
    }
});
const emit = defineEmits(["close"])

const asyncSubscription: Subscription = new Subscription();
const getDetailTemplateUseCase: GetDetailTemplateUseCase = inject("getDetailTemplateUseCase")!;

const attachmentList: Ref<Message[]> = ref([]);
const indexActiveMessage = ref(0);
const messageList: Ref<Message[]> = ref([]);
const indexActiveGreeting = ref(0);
const greetingList: Ref<Message[]> = ref([]);

onMounted(() => {
    loadDetailTemplate();
})

function openImage(filename: string): void {
    const url = "https://repliemgallery.xyz/images/" + filename;
    window.open(url, "_blank");
}

function loadDetailTemplate(): void {
    asyncSubscription.add(
        getDetailTemplateUseCase.execute({
            template_id: props.templateId
        }).subscribe(
            {
                next: (templateResp) => {
                    if (templateResp.code === 200) {
                        const list = templateResp.result.data.message_list ?? [];

                        messageList.value = list.filter(m => m.message_type === "Message")
                            .sort((a, b) => {
                                if (a.message_order < b.message_order) return -1;
                                else if (a.message_order > b.message_order) return 1;
                                else return 0;
                            });

                        greetingList.value = list.filter(m => m.message_type === "Greeting")
                            .sort((a, b) => {
                                if (a.message_order < b.message_order) return -1;
                                else if (a.message_order > b.message_order) return 1;
                                else return 0;
                            });

                        attachmentList.value = list.filter(m => m.message_type === "Attachment");
                    } else {
                        const message = templateResp.result?.message ?? templateResp.message;
                        NotificationManager.showMessage("Failed to Load Data", message, "error");
                    }
                },
                error: (error) => {
                    NotificationManager.showMessage("Network Error", error, "error");
                }
            }
        )
    );
}
</script>