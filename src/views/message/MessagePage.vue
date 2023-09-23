<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search />
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
                    {{ slotProps.name }}
                </div>
            </template>
            <template #message="{slotProps}">
                <div class="p-2">
                    {{ slotProps.previewMessage }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/preview.svg" title="Preview" alt="Preview" class="cursor-pointer" @click="previewMessage(slotProps.templateId)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdate(slotProps.templateId)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteTemplate(slotProps.templateId)" />
                </div>
            </template>
        </TableExpandComponent>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import TableExpandComponent from '@/components/table/TableExpandComponent.vue';
import router from "@/router";
import { ref, type Ref } from 'vue';
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';
import { TemplateMessage } from "@/entity/message/TemplateMessage";
import Search from '@/components/search/Search.vue';

function redirectToCreate(): void {
    router.push("/message/create");
}

const templateList: Ref<TemplateMessage[]> = ref([
    {
        templateId: "id-01",
        name: "Template Message Name Here 1",
        message: [],
        previewMessage: "Preview message goes in here 1",
        createdAt: "30 October 2022",
        attachment: [],
    },
    {
        templateId: "id-02",
        name: "Template Message Name Here 2",
        message: [],
        previewMessage: "Preview message goes in here 2",
        createdAt: "30 October 2022",
        attachment: [],
    }
]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "name",
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
        key: "message",
        name: "Message",
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
    console.log("preview message", messageId);
}

function redirectToUpdate(messageId: string): void {
    console.log("update", messageId);
}

function deleteTemplate(messageId: string): void {
    console.log("delete", messageId);
}
</script>