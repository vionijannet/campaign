<template>
    <h1 class="font-bold text-3xl pt-2 pb-4 px-4">
        Add Category Audiens
    </h1>
    <hr class="w-full" />
    <div class="pt-4 pb-2 space-y-4 px-4">
        <InputText :value="groupName" label-for="group-name" label-text="Group Name" placeholder="Group Name Goes Here" />
        <div class="space-y-1">
            <label for="page" class="font-semibold text-base">Page</label>
            <InputDropdown :placeholder="'Select page'" :selected="selectedPage"
                :id="'page'" @change="onChangePage($event.key)" :option-list="pageOptionList">
            </InputDropdown>
        </div>
        <div class="space-y-1">
            <label for="audience" class="font-semibold text-base">Audience</label>
            <InputDropdown :placeholder="'Select audience'" :selected="selectedAudience" :disabled="selectedPage.length < 1"
                :id="'audience'" @change="onChangeAudience" :option-list="audienceList">
            </InputDropdown>
        </div>
        <div class="space-y-1 flex flex-col">
            <label for="color" class="font-semibold text-base">Color</label>
            <input type="color" id="color" name="color" class="h-12" v-model="selectedColor" />
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
        <ButtonBase class="!w-32" @click="createGroup">Save</ButtonBase>
    </div>
</template>

<script setup lang="ts">
import { OptionEntity } from '@/components/ComponentEntity';
import ButtonBase from '@/components/button/ButtonBase.vue';
import InputDropdown from '@/components/input/InputDropdown.vue';
import InputText from '@/components/input/InputText.vue';
import { Page } from '@/entity/page/Page';
import { AddGroupUseCase } from '@/usecase/audience/AddGroupUseCase';
import { GetPageUseCase } from '@/usecase/page/GetPageUseCase';
import { finalize } from 'rxjs';
import { Ref, computed, inject, onMounted, ref } from 'vue';

const getPageUseCase: GetPageUseCase = inject("getPageUseCase")!;
const addGroupUseCase: AddGroupUseCase = inject("addGroupUseCase")!;

const pageList: Ref<Page[]> = ref([]);

const pageOptionList: Ref<OptionEntity[]> = computed(() => {
    return pageList.value.map((data) => {
        return { key: data.page_id, value: data.page_name }
    })
});
const audienceList: Ref<OptionEntity[]> = computed(() => {
    if (selectedPage.value.length > 0) {
        const index = pageList.value.findIndex(data => data.page_id === selectedPage.value);
        return pageList.value[index].audience_list.map((data) => {
            return { key: data.audience_id, value: data.audience_name }
        })
    } 

    return [];
});

const isPublish = ref(false);
const isLoading = ref(false);

const groupName = ref("");
const selectedPage = ref("");
const selectedAudience = ref("");
const selectedColor = ref("#000000");

const emit = defineEmits(["cancel"]);

function onChangePage(pageId: string): void {
    selectedPage.value = pageId;
    selectedAudience.value = "";
}

function onChangeAudience(): void {
    console.log("set audience");
}

function createGroup(): void {
    console.log("create group");
}

function backToList(): void {
    emit("cancel");
}

onMounted(() => {
    loadPage();
});

function loadPage(): void {
    isLoading.value = true;

    getPageUseCase.execute({
        audience_name: "",
        limit: 0,
        page: 0,
        page_name: "",
        sort_by: ""
    }).pipe(
        finalize(() => isLoading.value = false)
    ).subscribe(
        {
            next: (getPageResp) => {
                if (getPageResp.code === 200) {
                    pageList.value = getPageResp.result.data.content.page_list ?? [];
                }
            }
        }
    )
}
</script>