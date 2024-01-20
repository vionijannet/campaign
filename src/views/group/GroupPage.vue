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
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="groupList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #group_name="{slotProps}">
                <div class="p-2">
                    {{ slotProps.group_name }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/preview.svg" title="Preview" alt="Preview" class="cursor-pointer" @click="previewGroup(slotProps.accountId)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteGroup(slotProps.accountId)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdateGroup(slotProps.accountId)" />
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
import Search from '@/components/search/Search.vue';
import { Group } from '@/entity/audience/Group';

function redirectToCreate(): void {
    console.log("pop up to create category");
    // router.push("/message/create");
}

const groupList: Ref<Group[]> = ref([]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "group_name",
    sortOrder: "asc"
});

const totalRow: Ref<number> = ref(2);

const tableHeader: Ref<TableHeader[]> = ref([
    {
        key: "group_name",
        name: "Category",
        isSortable: true
    },
    {
        key: "group_color_hex",
        name: "Tag Color",
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

function previewGroup(accId: string): void {
    console.log("preview account", accId);
}

function redirectToUpdateGroup(accId: string): void {
    console.log("update", accId);
}

function deleteGroup(accId: string): void {
    console.log("delete", accId);
}
</script>