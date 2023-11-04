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
        <InputText :value="pageId" disabled="true" label-for="page-name" label-text="Page Name" placeholder="Page Name Goes Here"></InputText>
        <InputText label-for="campaign-name" label-text="Campaign Name" placeholder="Type your campaign name"></InputText>
        <div>
            <p class="font-semibold text-lg">Scheduler</p>
            <div class="flex justify-between items-center">
                <p>Turning on to set schedule to your campaign</p>
                
                <label for="scheduler" tabindex="0" :aria-checked="isSchedulerOn" class="peer relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 rounded-full" :class="{'bg-blue-primary': isSchedulerOn, 'bg-gray-100': !isSchedulerOn}">
                    <input type="checkbox" id="scheduler" class="hidden" v-model="isSchedulerOn" />
                    <span aria-hidden="true" class="rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs"></span>
                    <span aria-hidden="true" class="rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs"></span>
                    <span aria-hidden="true" class="absolute transform transition ease-in-out duration-200 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-xs" :class="{'translate-x-full text-blue-primary': isSchedulerOn, 'translate-x-0 text-gray-400': !isSchedulerOn}"></span>
                </label>
            </div>
            <div class="flex justify-between space-x-4 my-2 transform transition ease-in-out duration-200 overflow-hidden" :class="{ 'h-full': isSchedulerOn, 'h-0': !isSchedulerOn }">
                <div class="bg-gray-100 flex items-center rounded-lg border w-full">
                    <span class="mx-4">Date</span>
                    <DatePicker class="!w-full !border-none"></DatePicker>
                </div>
                <div class="bg-gray-100 flex items-center rounded-lg border w-full">
                    <span class="mx-4">Time</span>
                    <DatePicker class="!w-full !border-none">
                        <template #icon-calendar>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.665 1.5C3.135 1.5 1.5 3.233 1.5 5.916V14.084C1.5 16.767 3.135 18.5 5.665 18.5H14.333C16.864 18.5 18.5 16.767 18.5 14.084V5.916C18.5 3.233 16.865 1.5 14.334 1.5H5.665ZM14.333 20H5.665C2.276 20 0 17.622 0 14.084V5.916C0 2.378 2.276 0 5.665 0H14.334C17.723 0 20 2.378 20 5.916V14.084C20 17.622 17.723 20 14.333 20Z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.39 12.7675C13.259 12.7675 13.127 12.7335 13.006 12.6625L9.61502 10.6395C9.38902 10.5035 9.24902 10.2585 9.24902 9.99554V5.63354C9.24902 5.21954 9.58502 4.88354 9.99902 4.88354C10.413 4.88354 10.749 5.21954 10.749 5.63354V9.56954L13.775 11.3725C14.13 11.5855 14.247 12.0455 14.035 12.4015C13.894 12.6365 13.645 12.7675 13.39 12.7675Z" fill="currentColor"/>
                            </svg>
                        </template>
                    </DatePicker>
                </div>
            </div>
        </div>
        <div>
            <p class="font-semibold text-lg">Interval</p>
            <div class="flex justify-between space-x-4 my-2">
                <div class="bg-gray-100 flex items-center rounded-lg border w-full">
                    <span class="mx-4">Minimal</span>
                    <input type="text" class="relative inline-block w-full rounded-lg h-12 rounded-l-none outline-none py-[6px] px-[30px] pl-[10px]">
                </div>
                <div class="bg-gray-100 flex items-center rounded-lg border w-full">
                    <span class="mx-4">Maximal</span>
                    <input type="text" class="relative inline-block w-full rounded-lg h-12 rounded-l-none outline-none py-[6px] px-[30px] pl-[10px]">
                </div>
            </div>
        </div>
        <div class="w-full space-y-2">
            <span for="labelFor" class="font-semibold text-lg">Audience</span>
            <div class="flex items-center justify-between bg-gray-100 p-4 w-full rounded-lg text-lg">
                <span class="text-lg text-gray-400">Select audiens</span>
                <button @click="isPopupAudiensOpen=true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <div class="flex justify-between">
                <p class="font-semibold text-lg">Message</p>
                <p class="font-semibold text-blue-primary underline cursor-pointer" @click="isPopupTemplateOpen=true">Use Template</p>
            </div>
            <div class="w-full border rounded-lg p-4 my-2 space-y-1">
                <div class="flex items-center">
                    <input type="text" placeholder="Select image" disabled class="w-full h-12 border border-r-none rounded-r-none rounded-lg outline-none p-4" />
                    <label for="upload-image" class="flex items-center cursor-pointer border border-blue-primary text-blue-primary rounded-lg h-12 p-2 px-4 rounded-l-none">Browse</label>
                    <input type="file" name="image" id="upload-image" class="hidden">
                </div>
                <textarea rows="5" class="w-full outline-none border rounded-lg p-4" placeholder="Type your message"></textarea>
            </div>
            <div class="w-full border rounded-lg p-4 my-2 flex items-start space-x-2" v-for="m, i in messageList">
                <div class="w-full space-y-1">
                    <div class="flex items-center">
                        <input type="text" placeholder="Select image" disabled class="w-full h-12 border border-r-none rounded-r-none rounded-lg outline-none p-4" />
                        <label for="upload-image" class="flex items-center cursor-pointer border border-blue-primary text-blue-primary rounded-lg h-12 p-2 px-4 rounded-l-none">Browse</label>
                        <input type="file" name="image" id="upload-image" class="hidden">
                    </div>
                    <textarea rows="5" class="w-full outline-none border rounded-lg p-4" placeholder="Type your message"></textarea>
                </div>
                <button class="flex-1" @click="removeMessage(i)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d93517" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
            <ButtonBase class="my-2 !w-auto" @click="addMessage">Add Message</ButtonBase>
        </div>
        <hr />
        <div class="w-full flex justify-end items-center space-x-4">
            <ButtonBase type="error" class="!w-32" @click="backToList">Cancel</ButtonBase>
            <ButtonBase class="!w-32">Save</ButtonBase>
        </div>
    </div>

    <ModalComponent v-if="isPopupAudiensOpen" @close="isPopupAudiensOpen=false" :custom-class="'!max-w-xl'">
        <div class="relative space-y-2">
            <div class="flex items-center pb-2">
                <label for="audiens" class="flex items-center space-x-3">
                    <input type="checkbox" name="audiens" id="audiens" />
                    <span class="font-semibold">Select Audience</span>
                </label>
            </div>
            <div class="pb-4 space-y-2">
                <p class="font-semibold">Filter Flag</p>
                <div class="flex space-x-2">
                    <div class="w-9 h-9 rounded bg-green-500" title="Filter 1"></div>
                    <div class="w-9 h-9 rounded bg-blue-500" title="Filter 2"></div>
                    <div class="w-9 h-9 rounded bg-teal-500" title="Filter 3"></div>
                    <div class="w-9 h-9 rounded bg-emerald-500" title="Filter 4"></div>
                </div>
            </div>
            <CheckboxAudiens></CheckboxAudiens>
            <CheckboxAudiens></CheckboxAudiens>
            <CheckboxAudiens></CheckboxAudiens>
            <CheckboxAudiens></CheckboxAudiens>
            <CheckboxAudiens></CheckboxAudiens>
        </div>
        <div class="pt-8 flex justify-center space-x-8">
            <ButtonBase type="error" class="w-32" @click="isPopupAudiensOpen=false">Cancel</ButtonBase>
            <ButtonBase class="w-32">Done</ButtonBase>
        </div>
    </ModalComponent>

    <ModalComponent v-if="isPopupTemplateOpen" @close="isPopupTemplateOpen=false">
        <SelectMessageTemplate @cancel="isPopupTemplateOpen=false"></SelectMessageTemplate>
    </ModalComponent>

    <ModalComponent v-if="isPopupCreateOpen">
        <SelectPage @continue="continueCreateCampaign"></SelectPage>
    </ModalComponent>

    <LoadingScreen v-if="false"></LoadingScreen>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import InputText from '@/components/input/InputText.vue';
import ModalComponent from '@/components/modal/ModalComponent.vue';
import LoadingScreen from '@/components/loading/LoadingScreen.vue';
import CheckboxAudiens from '@/components/in-app/CheckboxAudience.vue';
import SelectMessageTemplate from '@/views/campaign/SelectMessageTemplate.vue';
import router from '@/router';
import { ref, type Ref } from 'vue';
import DatePicker from 'vue-datepicker-next';
import { useRoute } from "vue-router";
import SelectPage from './SelectPage.vue';

const route = useRoute();
const isSchedulerOn = ref(false);
const isPopupAudiensOpen = ref(false);
const isPopupTemplateOpen = ref(false);
const isPopupCreateOpen = ref(true);

const pageId: Ref<string> = ref("");

const messageList: Ref<any[]> = ref([]);

function backToList(): void {
    router.push("/campaign");
}

function addMessage(): void {
    messageList.value.push({});
}

function removeMessage(index: number): void {
    messageList.value.splice(index, 1);
}

function continueCreateCampaign(page: string): void {
    pageId.value = page;
    isPopupCreateOpen.value = false;
}
</script>

<style>
.mx-input {
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem/* 16px */;
    line-height: 1.5rem/* 24px */;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: none;
    height: 3rem/* 48px */;
}
</style>