<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search />
            <ButtonBase class="flex !w-fit" @click="redirectToCreate">
                <img src="../../assets/icon-create.svg" alt="Create">
                <span class="ml-2">Add Category</span>
            </ButtonBase>
        </div>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="audiensList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #category="{slotProps}">
                <div class="p-2">
                    {{ slotProps.category_name }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/preview.svg" title="Preview" alt="Preview" class="cursor-pointer" @click="previewAccount(slotProps.accountId)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteAccount(slotProps.accountId)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdateAccount(slotProps.accountId)" />
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
import { Audience } from "@/entity/audience/Audience";
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';
import Search from '@/components/search/Search.vue';

function redirectToCreate(): void {
    console.log("pop up to create category");
    // router.push("/message/create");
}

const audiensList: Ref<Audience[]> = ref([
    {
        category_id: "c-01",
        category_name: "Loyal Fans",
        tag: "entertainment",
        status: "Active",
        created_at: "30 October 2021, 14:30",
    },{
        category_id: "c-02",
        category_name: "Sport",
        tag: "activity",
        status: "Active",
        created_at: "12 October 2022, 14:30",
    },
]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "category",
    sortOrder: "asc"
});

const totalRow: Ref<number> = ref(2);

const tableHeader: Ref<TableHeader[]> = ref([
    {
        key: "category",
        name: "Category Name",
        isSortable: true
    },
    {
        key: "tag",
        name: "Tag",
        isSortable: true
    },
    {
        key: "status",
        name: "Status",
        isSortable: true
    },
    {
        key: "created_at",
        name: "Created At",
        isSortable: true
    },
    {
        key: "action",
        name: "Action",
        isSortable: false
    },
] as TableHeader[]);

function previewAccount(accId: string): void {
    console.log("preview account", accId);
}

function redirectToUpdateAccount(accId: string): void {
    console.log("update", accId);
}

function deleteAccount(accId: string): void {
    console.log("delete", accId);
}

function syncAccount(accId: string): void {
    console.log("sync", accId);
}
</script>