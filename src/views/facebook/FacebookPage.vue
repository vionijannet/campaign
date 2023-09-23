<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search />
            <ButtonBase class="flex w-fit" @click="redirectToCreate">
                <img src="../../assets/icon-create.svg" alt="Create">
                <span class="ml-2">Add Account</span>
            </ButtonBase>
        </div>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="templateList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #name="{slotProps}">
                <div class="p-2">
                    {{ slotProps.accountName }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/preview.svg" title="Preview" alt="Preview" class="cursor-pointer" @click="previewAccount(slotProps.accountId)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteAccount(slotProps.accountId)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdateAccount(slotProps.accountId)" />
                    <div class="w-5 h-5 bg-emerald-400 rounded-full flex justify-center items-center cursor-pointer ">
                        <img src="../../assets/sync.svg" title="Sync" alt="Sync" class="w-3 rotate-90" @click="syncAccount(slotProps.accountId)" />
                    </div>
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
import { Facebook } from "@/entity/facebook/Facebook";
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';
import Search from '@/components/search/Search.vue';

function redirectToCreate(): void {
    router.push("/message/create");
}

const templateList: Ref<Facebook[]> = ref([
    {
        accountId: "fb-01",
        accountName: "Darlene Robertson",
        accountImage: "",
        totalPageConnect: 5,
        lastAdded: "30 October 2023, 14:30",
    },
    {
        accountId: "fb-02",
        accountName: "Darell Steward",
        accountImage: "",
        totalPageConnect: 2,
        lastAdded: "30 October 2021, 14:30",
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
        name: "Account Name",
        isSortable: true
    },
    {
        key: "totalPageConnect",
        name: "Page Connect",
        isSortable: true
    },
    {
        key: "lastAdded",
        name: "Added",
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