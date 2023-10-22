<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search @enter="loadTemplate($event)" />
            <ButtonBase class="flex !w-fit" @click="redirectToCreate">
                <img src="../../assets/icon-create.svg" alt="Create">
                <span class="ml-2">Add Template</span>
            </ButtonBase>
        </div>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="templateList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #name="{slotProps}">
                <div class="p-2">
                    {{ slotProps.template_name }}
                </div>
            </template>
            <template #createdAt="{slotProps}">
                <div class="p-2">
                    {{ convertCreatedAt(slotProps.created_at) }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/preview.svg" title="Preview" alt="Preview" class="cursor-pointer" @click="previewMessage(slotProps.template_id)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdate(slotProps.template_id)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteTemplate(slotProps.template_id)" />
                </div>
            </template>
        </TableExpandComponent>
    </div>

    <ModalComponent v-if="selectedTemplateId.length > 0" @close="selectedTemplateId=''">
        <DetailMessageTemplate :template-id="selectedTemplateId"></DetailMessageTemplate>
    </ModalComponent>
</template>

<script setup lang="ts">
import DetailMessageTemplate from "./DetailMessageTemplate.vue";
import ButtonBase from '@/components/button/ButtonBase.vue';
import TableExpandComponent from '@/components/table/TableExpandComponent.vue';
import router from "@/router";
import { inject, onMounted, ref, type Ref } from 'vue';
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';
import { TemplateMessage } from "@/entity/message/TemplateMessage";
import Search from '@/components/search/Search.vue';
import { Subscription } from 'rxjs';
import { GetTemplateUseCase } from '@/usecase/template/GetTemplateUseCase';
import { DateConverter } from '@/util/DateConverter';
import ModalComponent from '@/components/modal/ModalComponent.vue';

const asyncSubscription: Subscription = new Subscription();
const selectedTemplateId = ref("");

const getTemplateUseCase: GetTemplateUseCase = inject("getTemplateUseCase")!;

function redirectToCreate(): void {
    router.push("/message/create");
}

const templateList: Ref<TemplateMessage[]> = ref([]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "",
    sortOrder: "asc"
});

const totalRow: Ref<number> = ref(2);

const tableHeader: Ref<TableHeader[]> = ref([
    {
        key: "name",
        name: "Name",
        isSortable: true
    },
    {
        key: "createdAt",
        name: "Created At",
        isSortable: true
    },
    {
        key: "action",
        name: "Action",
        isSortable: false
    },
] as TableHeader[]);

function previewMessage(messageId: string): void {
    selectedTemplateId.value = messageId;
}

function redirectToUpdate(messageId: string): void {
    router.push(`/message/${messageId}`);
}

function deleteTemplate(messageId: string): void {
    console.log("delete", messageId);
}

function convertCreatedAt(date: string): string {
    return DateConverter.convertDateObjectToDateString(new Date(date));
}

onMounted(() => {
    loadTemplate("");
})

function loadTemplate(template_name: string): void {
    asyncSubscription.add(
        getTemplateUseCase.execute({
            limit: searchCriteria.value.rowPerPage,
            page: searchCriteria.value.page-1,
            sort_by: searchCriteria.value.sortKey.length > 0 ? `${searchCriteria.value.sortKey},${searchCriteria.value.sortOrder}` : "",
            template_name
        }).subscribe(
            (getTemplateResp) => {
                if (getTemplateResp.code === 200) {
                    templateList.value = getTemplateResp.result.data.content;
                    totalRow.value = getTemplateResp.result.data.total_elements;
                } else {
                    console.log("gagal", getTemplateResp);
                }
            }
        )
    );
}
</script>