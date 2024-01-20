<template>
    <h1 class="font-bold text-3xl pt-2 pb-4 px-4">
        Add Category Audiens
    </h1>
    <hr class="w-full" />
    <div class="pt-4 pb-2 space-y-4 px-4">
        <InputText :value="''" label-for="group-name" label-text="Group Name" placeholder="Group Name Goes Here" />
        <div class="space-y-1">
            <label for="page" class="font-semibold text-base">Page</label>
            <InputDropdown :placeholder="'Select page'" :selected="''"
                :id="'page'" @change="onChangePage" :option-list="pageList">
            </InputDropdown>
        </div>
        <div class="space-y-1">
            <label for="audience" class="font-semibold text-base">Audience</label>
            <InputDropdown :placeholder="'Select audience'" :selected="''"
                :id="'audience'" @change="onChangeAudience" :option-list="audienceList">
            </InputDropdown>
        </div>
        <div class="space-y-1 flex flex-col">
            <label for="color" class="font-semibold text-base">Color</label>
            <input type="color" id="color" name="color" class="h-12" />
        </div>
        <div class="flex space-x-2 items-center py-2">
            <label for="publish" tabindex="0" :aria-checked="isPublish" class="peer relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 rounded-full" :class="{'bg-blue-primary': isPublish, 'bg-gray-100': !isPublish}">
                <input type="checkbox" name="publish" id="publish" class="hidden" v-model="isPublish" />
                <span aria-hidden="true" class="rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs"></span>
                <span aria-hidden="true" class="rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs"></span>
                <span aria-hidden="true" class="absolute transform transition ease-in-out duration-200 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-xs" :class="{'translate-x-full text-blue-primary': isPublish, 'translate-x-0 text-gray-400': !isPublish}"></span>
            </label>
            <span>Publish</span>
        </div>
    </div>
    <hr />
    <div class="w-full flex justify-end items-center space-x-4 pt-6 pb-3 pr-4">
        <ButtonBase type="error" class="!w-32" @click="backToList">Back</ButtonBase>
        <ButtonBase class="!w-32" @click="saveCampaign">Save</ButtonBase>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import InputDropdown from '@/components/input/InputDropdown.vue';
import InputText from '@/components/input/InputText.vue';
import { ref } from 'vue';

const pageList = ref([]);
const audienceList = ref([]);

const isPublish = ref(false);

const emit = defineEmits(["cancel"]);

function onChangePage(): void {
    console.log("set page");
}

function onChangeAudience(): void {
    console.log("set audience");
}

function saveCampaign(): void {
    console.log("save campaign");
}

function backToList(): void {
    emit("cancel");
}
</script>