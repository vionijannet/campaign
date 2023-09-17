<template>
    <div class="absolute -top-2 right-0 my-6 mx-8 flex space-x-4">
        <ButtonBase class="flex" @click="redirectToCreate">
            <img src="../../assets/icon-create.svg" alt="Create">
            <span class="ml-2">Create</span>
        </ButtonBase>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="campaignList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #name="{slotProps}">
                <div class="flex items-center space-x-2 p-2">
                    <svg @click="slotProps.isExpanded = !slotProps.isExpanded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 transform transition-all cursor-pointer" :class="slotProps.isExpanded ? 'rotate-90' : ''">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span>{{ slotProps.name }}</span>
                </div>
            </template>
            <template #status="{slotProps}">
                <div class="p-2" :class="{'text-amber-500': slotProps.status === STATUS_PENDING, 'text-green-500': slotProps.status === STATUS_DONE}">{{ slotProps.status }}</div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/manual-trigger.svg" title="Manual Trigger" alt="Manual Trigger" class="cursor-pointer" @click="manualTriggerCampaign(slotProps.id)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdateCampaign(slotProps.id)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteCampaign(slotProps.id)" />
                </div>
            </template>
            <template #expand="{slotProps}">
                <div class="bg-blue-100 p-2 pl-8 mx-2">
                    <div class="grid grid-cols-6 auto-cols-fr text-sm gap-y-1">
                        <p>Created at</p>
                        <p class="col-span-5">{{ slotProps.createdAt }}</p>
                        <p>Delivered(%)</p>
                        <p class="col-span-5">{{ slotProps.delivered }}</p>
                        <p>Read(%)</p>
                        <p class="col-span-5">{{ slotProps.read }}</p>
                        <p>Clicked(%)</p>
                        <p class="col-span-5">{{ slotProps.clicked }}</p>
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
import { DummyCampaign } from "@/entity/Campaign";
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';

const STATUS_PENDING = "Pending";
const STATUS_DONE = "Done";

function redirectToCreate(): void {
    router.push("/campaign/create");
}

const campaignList: Ref<DummyCampaign[]> = ref([
    {
        id: "id-01",
        name: "Campaign Name Here",
        pageName: "Page Name",
        status: "Pending",
        sent: "5/100",
        failed: "3",
        scheduled: "Not Scheduled",
        createdAt: "28 October 2022, 11:03",
        delivered: "50/100(50%)",
        read: "25(50%)",
        clicked: "0(0.00%)",
        isExpanded: false,
    },
    {
        id: "id-02",
        name: "Campaign Name Here 2",
        pageName: "Page Name",
        status: "Done",
        sent: "90/100",
        failed: "1",
        scheduled: "30 October 2022, 14:30",
        createdAt: "18 October 2022, 11:03",
        delivered: "50/100(50%)",
        read: "25(50%)",
        clicked: "0(0.00%)",
        isExpanded: false,
    },
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
        key: "pageName",
        name: "Page Name",
        isSortable: true
    },
    {
        key: "status",
        name: "Status",
        isSortable: true
    },
    {
        key: "sent",
        name: "Sent",
        isSortable: false
    },
    {
        key: "failed",
        name: "Failed",
        isSortable: false
    },
    {
        key: "scheduled",
        name: "Scheduled",
        isSortable: false
    },
    {
        key: "action",
        name: "Action",
        isSortable: false
    },
] as TableHeader[]);

function manualTriggerCampaign(campaignId: string): void {
    console.log("manual trigger campaign", campaignId);
}

function redirectToUpdateCampaign(campaignId: string): void {
    console.log("update", campaignId);
}

function deleteCampaign(campaignId: string): void {
    console.log("delete", campaignId);
}
</script>